"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Expand, Maximize2, Minus, Plus, RotateCcw, X } from "lucide-react";

type ViewState = { scale: number; x: number; y: number };
type Point = { x: number; y: number };

const initialView: ViewState = { scale: 1, x: 0, y: 0 };

export function ArchitectureViewer() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<ViewState>(initialView);
  const viewportRef = useRef<HTMLDivElement>(null);
  const pointers = useRef(new Map<number, Point>());
  const gesture = useRef<{ distance: number; scale: number; midpoint: Point } | null>(null);

  const reset = useCallback(() => setView(initialView), []);
  const close = useCallback(() => {
    setOpen(false);
    reset();
  }, [reset]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "+" || event.key === "=") setView((current) => ({ ...current, scale: Math.min(4, current.scale * 1.2) }));
      if (event.key === "-") setView((current) => ({ ...current, scale: Math.max(0.6, current.scale / 1.2) }));
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [close, open]);

  const zoom = (factor: number) => {
    setView((current) => ({ ...current, scale: Math.max(0.6, Math.min(4, current.scale * factor)) }));
  };

  const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    zoom(event.deltaY < 0 ? 1.12 : 0.89);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.current.size === 2) {
      const [a, b] = Array.from(pointers.current.values());
      gesture.current = {
        distance: Math.hypot(b.x - a.x, b.y - a.y),
        scale: view.scale,
        midpoint: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 },
      };
    }
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const previous = pointers.current.get(event.pointerId);
    if (!previous) return;
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.current.size === 2 && gesture.current) {
      const [a, b] = Array.from(pointers.current.values());
      const distance = Math.hypot(b.x - a.x, b.y - a.y);
      const midpoint = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      setView((current) => ({
        scale: Math.max(0.6, Math.min(4, gesture.current!.scale * (distance / gesture.current!.distance))),
        x: current.x + midpoint.x - gesture.current!.midpoint.x,
        y: current.y + midpoint.y - gesture.current!.midpoint.y,
      }));
      gesture.current.midpoint = midpoint;
      return;
    }

    if (pointers.current.size === 1) {
      setView((current) => ({ ...current, x: current.x + event.clientX - previous.x, y: current.y + event.clientY - previous.y }));
    }
  };

  const onPointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    pointers.current.delete(event.pointerId);
    if (pointers.current.size < 2) gesture.current = null;
  };

  const toggleFullscreen = async () => {
    if (!viewportRef.current) return;
    if (document.fullscreenElement) await document.exitFullscreen();
    else await viewportRef.current.requestFullscreen();
  };

  return (
    <div className="architecture-block reveal">
      <div className="architecture-copy">
        <div>
          <span className="mini-label">SYSTEM DESIGN</span>
          <h3>RAG 系统架构</h3>
          <p>从文档摄取、混合检索与重排，到可验证回答、观测与离线评测的完整链路。</p>
        </div>
        <button className="secondary-button" type="button" onClick={() => setOpen(true)}>
          <Expand size={17} aria-hidden="true" />
          交互查看
        </button>
      </div>
      <button className="architecture-preview" type="button" onClick={() => setOpen(true)} aria-label="打开 RAG 架构图交互查看器">
        {/* SVG is intentionally displayed as an image so the original architecture remains unchanged. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/architecture/rag-architecture.svg" alt="AI Knowledge Server RAG 系统架构图，包含展示层、检索管线、数据层与可观测评测层" />
        <span>点击放大 · 支持拖动与缩放</span>
      </button>
      <div className="architecture-legend" aria-label="架构图图例">
        <span><i className="legend-blue" />Presentation Layer</span>
        <span><i className="legend-orange" />Backend / Retrieval Pipeline</span>
        <span><i className="legend-purple" />Data Layer</span>
        <span><i className="legend-green" />Observability / Evaluation</span>
      </div>

      {open ? createPortal((
        <div className="architecture-modal" role="dialog" aria-modal="true" aria-label="RAG 系统架构交互查看器">
          <div className="viewer-header">
            <div>
              <span className="mini-label">INTERACTIVE ARCHITECTURE</span>
              <strong>RAG 系统架构</strong>
            </div>
            <button className="icon-button" type="button" onClick={close} aria-label="关闭架构图"><X /></button>
          </div>
          <div
            className="viewer-viewport"
            ref={viewportRef}
            onWheel={onWheel}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerEnd}
            onPointerCancel={onPointerEnd}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="viewer-image"
              src="/architecture/rag-architecture.svg"
              alt="AI Knowledge Server RAG 系统架构图"
              draggable={false}
              style={{ transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})` }}
            />
            <div className="viewer-controls" aria-label="缩放控制" onPointerDown={(event) => event.stopPropagation()}>
              <button type="button" onClick={() => zoom(1.2)} aria-label="放大"><Plus /></button>
              <button type="button" onClick={() => zoom(0.83)} aria-label="缩小"><Minus /></button>
              <button type="button" onClick={reset} aria-label="重置视图"><RotateCcw /></button>
              <button type="button" onClick={toggleFullscreen} aria-label="全屏查看"><Maximize2 /></button>
            </div>
            <span className="viewer-hint">拖动平移 · 滚轮或双指缩放 · Esc 关闭</span>
          </div>
        </div>
      ), document.body) : null}
    </div>
  );
}

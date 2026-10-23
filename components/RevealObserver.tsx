"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.classList.remove("reveal-pending");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 },
    );

    const observe = (node: HTMLElement) => {
      if (node.classList.contains("is-visible") || node.classList.contains("reveal-pending")) return;

      const rect = node.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        node.classList.add("is-visible");
        return;
      }

      node.classList.add("reveal-pending");
      observer.observe(node);
    };

    document.querySelectorAll<HTMLElement>(".reveal").forEach(observe);

    // Server-rendered sections can arrive after this client effect runs.
    const additions = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((added) => {
          if (!(added instanceof HTMLElement)) return;
          if (added.matches(".reveal")) observe(added);
          added.querySelectorAll<HTMLElement>(".reveal").forEach(observe);
        });
      });
    });
    additions.observe(document.body, { childList: true, subtree: true });

    // Catch anchor jumps and browser cases where intersection callbacks are delayed.
    const revealInView = () => {
      document.querySelectorAll<HTMLElement>(".reveal-pending").forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          node.classList.add("is-visible");
          node.classList.remove("reveal-pending");
          observer.unobserve(node);
        }
      });
    };
    window.addEventListener("scroll", revealInView, { passive: true });
    window.addEventListener("resize", revealInView);
    const fallback = window.setInterval(revealInView, 1000);

    return () => {
      window.clearInterval(fallback);
      window.removeEventListener("scroll", revealInView);
      window.removeEventListener("resize", revealInView);
      observer.disconnect();
      additions.disconnect();
      document.querySelectorAll<HTMLElement>(".reveal-pending").forEach((node) => node.classList.remove("reveal-pending"));
    };
  }, []);

  return null;
}

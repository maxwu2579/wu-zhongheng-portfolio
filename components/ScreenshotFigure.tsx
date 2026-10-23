import Image from "next/image";

type ScreenshotFigureProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  priority?: boolean;
  className?: string;
  width?: number;
  height?: number;
};

export function ScreenshotFigure({ src, alt, title, description, priority = false, className = "", width = 1800, height = 1100 }: ScreenshotFigureProps) {
  return (
    <figure className={`screenshot-figure reveal ${className}`}>
      <a className="screenshot-shell" href={src} target="_blank" rel="noopener noreferrer" aria-label={`查看原图：${title}`}>
        <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 800px) 100vw, 76vw" priority={priority} />
      </a>
      <figcaption>
        <h4>{title}</h4>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
}

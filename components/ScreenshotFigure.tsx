import Image from "next/image";

type ScreenshotFigureProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  priority?: boolean;
  className?: string;
};

export function ScreenshotFigure({ src, alt, title, description, priority = false, className = "" }: ScreenshotFigureProps) {
  return (
    <figure className={`screenshot-figure reveal ${className}`}>
      <div className="screenshot-shell">
        <Image src={src} alt={alt} width={1800} height={1100} sizes="(max-width: 800px) 100vw, 76vw" priority={priority} />
      </div>
      <figcaption>
        <h4>{title}</h4>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
}

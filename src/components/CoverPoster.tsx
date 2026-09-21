import { cn } from "@/lib/utils";

interface CoverPosterProps {
  src: string;
  alt: string;
  className?: string;
  /** `hero` is a centered readable poster; `card` fills the card width. */
  variant?: "hero" | "card";
  width?: number;
  height?: number;
}

/**
 * Full marketing poster. Natural aspect ratio, no object-cover, no viewport
 * max-height — the page scrolls so title/price/destination rows stay visible.
 */
export const CoverPoster = ({
  src,
  alt,
  className,
  variant = "card",
  width,
  height,
}: CoverPosterProps) => {
  const ratio =
    width && height ? ({ aspectRatio: `${width} / ${height}` } as const) : undefined;

  const image = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        "block h-auto w-full max-w-full",
        variant === "hero" && "rounded-sm shadow-elegant ring-1 ring-primary/25",
      )}
      style={ratio}
    />
  );

  if (variant === "hero") {
    return (
      <figure className={cn("relative mx-auto w-full max-w-2xl shrink-0 px-6", className)}>
        {image}
      </figure>
    );
  }

  return <div className={cn("relative w-full shrink-0 bg-navy", className)}>{image}</div>;
};

import { cn } from "@/lib/utils";

interface CoverPosterProps {
  src: string;
  alt: string;
  className?: string;
  /** `hero` fits the full poster in the viewport; `card` shows it at the card width. */
  variant?: "hero" | "card";
}

/**
 * Renders itinerary CoverImages as full marketing posters (typically ~9:16).
 * Uses object-contain so title, price, and destination strips are never cropped.
 */
export const CoverPoster = ({
  src,
  alt,
  className,
  variant = "card",
}: CoverPosterProps) => {
  if (variant === "hero") {
    return (
      <figure className={cn("relative flex justify-center px-6 lg:px-12", className)}>
        <div className="overflow-hidden rounded-sm bg-navy shadow-elegant ring-1 ring-primary/25">
          <img
            src={src}
            alt={alt}
            className="block h-auto w-auto max-h-[calc(100svh-14rem)] max-w-full object-contain"
          />
        </div>
      </figure>
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-navy", className)}>
      <img
        src={src}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl"
      />
      <img
        src={src}
        alt={alt}
        className="relative z-10 h-auto w-full object-contain object-center"
      />
    </div>
  );
};

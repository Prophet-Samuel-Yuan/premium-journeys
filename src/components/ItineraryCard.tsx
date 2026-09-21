import { Link } from "react-router-dom";
import { Itinerary } from "@/integrations/airtable";
import { ArrowRight } from "lucide-react";
import { resolveItineraryImage } from "@/lib/image-resolver";
import { CoverPoster } from "@/components/CoverPoster";

interface ItineraryCardProps {
  itinerary: Itinerary;
}

export const ItineraryCard = ({ itinerary }: ItineraryCardProps) => {
  const imageUrl = resolveItineraryImage(itinerary.CoverImage?.[0]?.url);

  return (
    <Link
      to={`/itinerary/${itinerary.id}`}
      className="group flex h-full flex-col bg-card rounded-lg overflow-hidden transition-all duration-500 hover:shadow-elegant hover:-translate-y-2"
    >
      <CoverPoster
        src={imageUrl}
        alt={itinerary.Title}
        variant="card"
        className="border-b border-primary/15"
      />

      <div className="flex flex-1 flex-col p-6">
        {itinerary.duration && (
          <span className="mb-2 text-xs uppercase tracking-wider font-sans text-primary">
            {itinerary.duration}
          </span>
        )}
        <h3 className="font-serif text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {itinerary.Title}
        </h3>
        <p className="text-sm text-muted-foreground font-sans line-clamp-2">
          {itinerary.Description || "Bespoke itinerary crafted for the modern explorer."}
        </p>

        <div className="mt-auto pt-4 flex items-center gap-2 text-primary font-sans text-sm uppercase tracking-wider opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <span>View Details</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
};

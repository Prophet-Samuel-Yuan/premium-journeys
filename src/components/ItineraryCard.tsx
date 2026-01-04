import { Link } from "react-router-dom";
import { Itinerary } from "@/integrations/airtable";
import { ArrowRight } from "lucide-react";
import { resolveItineraryImage } from "@/lib/image-resolver";

interface ItineraryCardProps {
  itinerary: Itinerary;
}

export const ItineraryCard = ({ itinerary }: ItineraryCardProps) => {
  const imageUrl = resolveItineraryImage(itinerary.CoverImage?.[0]?.url);

  return (
    <Link
      to={`/itinerary/${itinerary.id}`}
      className="group block bg-card rounded-lg overflow-hidden transition-all duration-500 hover:shadow-elegant hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={itinerary.Title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-primary/90 text-primary-foreground px-3 py-1 text-xs uppercase tracking-wider font-sans rounded">
            {itinerary.duration || 'Bespoke'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {itinerary.Title}
        </h3>
        <p className="text-sm text-muted-foreground font-sans line-clamp-2">
          {itinerary.Description || 'Bespoke itinerary crafted for the modern explorer.'}
        </p>

        {/* View Details */}
        <div className="mt-4 flex items-center gap-2 text-primary font-sans text-sm uppercase tracking-wider opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <span>View Details</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
};

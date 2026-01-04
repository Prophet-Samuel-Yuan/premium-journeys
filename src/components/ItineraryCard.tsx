import { Link } from "react-router-dom";
import { Itinerary } from "@/data/itineraries";
import { ArrowRight } from "lucide-react";

// Image imports
import baikalIce from "@/assets/tours/baikal-ice.jpg";
import kenyaSafari from "@/assets/tours/kenya-safari.jpg";
import huizhou from "@/assets/tours/huizhou.jpg";
import teamBuilding from "@/assets/tours/team-building.jpg";
import businessConference from "@/assets/tours/business-conference.jpg";
import egyptPyramids from "@/assets/tours/egypt-pyramids.jpg";
import morocco from "@/assets/tours/morocco.jpg";
import greece from "@/assets/tours/greece.jpg";

const imageMap: Record<string, string> = {
  "baikal-ice": baikalIce,
  "kenya-safari": kenyaSafari,
  "huizhou": huizhou,
  "team-building": teamBuilding,
  "business-conference": businessConference,
  "egypt-pyramids": egyptPyramids,
  "morocco": morocco,
  "greece": greece,
};

interface ItineraryCardProps {
  itinerary: Itinerary;
}

export const ItineraryCard = ({ itinerary }: ItineraryCardProps) => {
  const image = imageMap[itinerary.image] || baikalIce;

  return (
    <Link
      to={`/itinerary/${itinerary.slug}`}
      className="group block bg-card rounded-lg overflow-hidden transition-all duration-500 hover:shadow-elegant hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={itinerary.titleEn}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-primary/90 text-primary-foreground px-3 py-1 text-xs uppercase tracking-wider font-sans rounded">
            {itinerary.duration}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {itinerary.titleCn}
        </h3>
        <p className="text-sm text-muted-foreground font-sans mb-3">
          {itinerary.titleEn}
        </p>
        <p className="text-sm text-muted-foreground font-sans line-clamp-2">
          {itinerary.descriptionEn}
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

import { useItineraries } from "@/hooks/useItineraries";
import { ItineraryCard } from "@/components/ItineraryCard";
import { Briefcase, Loader2 } from "lucide-react";

export const BusinessVisitSection = () => {
  const { data: itineraries, isLoading, error } = useItineraries();

  const filteredItineraries = itineraries?.filter(i => i.category === "business") || [];

  return (
    <section id="business-visit" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-sans mb-4">
            Premium Itineraries
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4">
            Business Visit
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Elevate your business travel with our premium corporate delegation and conference services.
          </p>
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center py-12 text-destructive">
            Failed to load itineraries. Please check your connection.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItineraries.map((itinerary) => (
              <ItineraryCard key={itinerary.id} itinerary={itinerary} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

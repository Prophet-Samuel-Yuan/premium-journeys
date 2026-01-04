import { useQuery } from "@tanstack/react-query";
import { fetchItineraries, fetchItineraryById, Itinerary as AirtableItinerary } from "@/integrations/airtable";
import { itineraries as localItineraries } from "@/data/itineraries";

const normalizeLocalItinerary = (local: any): AirtableItinerary => ({
    id: local.id,
    Title: local.titleEn,
    Description: local.descriptionEn,
    Content: local.descriptionEn, // Fallback for content
    Price: local.price ? parseFloat(local.price.replace(/[^0-9.]/g, '')) : undefined,
    CoverImage: [{ url: local.image }], // Use image name as URL for local resolution
    category: local.category,
    highlights: local.highlights,
    duration: local.duration,
    slug: local.slug,
});

export const useItineraries = () => {
    return useQuery({
        queryKey: ["itineraries"],
        queryFn: async () => {
            const data = await fetchItineraries();
            if (data && data.length > 0) return data;

            console.log("Airtable fetch failed or returned empty, falling back to local data");
            return localItineraries.map(normalizeLocalItinerary);
        },
    });
};

export const useItinerary = (id: string) => {
    return useQuery({
        queryKey: ["itinerary", id],
        queryFn: async () => {
            const data = await fetchItineraryById(id);
            if (data) return data;

            console.log(`Airtable fetch for ${id} failed, falling back to local data`);
            const local = localItineraries.find(i => i.id === id || i.slug === id);
            return local ? normalizeLocalItinerary(local) : null;
        },
        enabled: !!id,
    });
};

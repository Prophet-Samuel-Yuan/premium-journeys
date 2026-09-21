import { supabase } from "@/integrations/supabase/client";

export interface Itinerary {
  id: string;
  Title: string;
  Description?: string;
  Content?: string;
  Price?: number;
  CoverImage?: { url: string }[];
  category?: 'personal' | 'team-building' | 'business';
  highlights?: string[];
  duration?: string;
  slug?: string;
}

/** Airtable currently names the currency field "Price (CNY)"; keep `Price` for the UI. */
type AirtableItineraryRaw = Itinerary & {
  'Price (CNY)'?: number;
};

function normalizeItinerary(raw: AirtableItineraryRaw): Itinerary {
  const { 'Price (CNY)': priceCny, ...rest } = raw;
  return {
    ...rest,
    Price: raw.Price ?? priceCny,
  };
}

export async function fetchItineraries(): Promise<Itinerary[]> {
  try {
    const { data, error } = await supabase.functions.invoke('airtable-proxy');

    if (error) {
      console.error('Error fetching itineraries:', error.message);
      return [];
    }

    return Array.isArray(data) ? data.map(normalizeItinerary) : [];
  } catch (error) {
    console.error('Failed to fetch itineraries:', error);
    return [];
  }
}

export async function fetchItineraryById(id: string): Promise<Itinerary | null> {
  try {
    const { data, error } = await supabase.functions.invoke(`airtable-proxy?action=getById&id=${encodeURIComponent(id)}`);

    if (error) {
      console.error(`Error fetching itinerary ${id}:`, error.message);
      return null;
    }

    return data ? normalizeItinerary(data) : null;
  } catch (error) {
    console.error(`Failed to fetch itinerary ${id}:`, error);
    return null;
  }
}

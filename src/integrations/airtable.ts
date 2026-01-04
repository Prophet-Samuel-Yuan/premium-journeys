
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

const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = 'Itineraries';

export async function fetchItineraries(): Promise<Itinerary[]> {
    if (!API_KEY || !BASE_ID) {
        console.error('Airtable credentials missing');
        return [];
    }

    const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });
        if (!response.ok) {
            throw new Error(`Error fetching itineraries: ${response.statusText} (${response.status})`);
        }
        const data = await response.json();
        return data.records.map((record: any) => ({
            id: record.id,
            ...record.fields
        }));
    } catch (error) {
        console.error('Failed to fetch itineraries:', error);
        return [];
    }
}

export async function fetchItineraryById(id: string): Promise<Itinerary | null> {
    if (!API_KEY || !BASE_ID) {
        console.error('Airtable credentials missing');
        return null;
    }

    const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}/${id}`;
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });
        if (!response.ok) {
            throw new Error(`Error fetching itinerary ${id}: ${response.statusText} (${response.status})`);
        }
        const record = await response.json();
        return {
            id: record.id,
            ...record.fields
        };
    } catch (error) {
        console.error(`Failed to fetch itinerary ${id}:`, error);
        return null;
    }
}

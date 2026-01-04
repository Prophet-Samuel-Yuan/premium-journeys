console.log('API Key exists:', !!import.meta.env.VITE_AIRTABLE_API_KEY);
console.log('Base ID exists:', !!import.meta.env.VITE_AIRTABLE_BASE_ID);

const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = 'Itineraries';

export async function fetchItineraries() {
    const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;
    console.log('Attempting to fetch from Airtable (All)...');
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
        console.log('Successfully fetched itineraries:', data.records.length);
        return data.records.map(record => ({
            id: record.id,
            ...record.fields
        }));
    } catch (error) {
        console.error('Failed to fetch itineraries:', error);
        return [];
    }
}

export async function fetchItineraryById(id) {
    const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}/${id}`;
    console.log(`Attempting to fetch from Airtable (ID: ${id})...`);
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
        console.log(`Successfully fetched itinerary ${id}`);
        return {
            id: record.id,
            ...record.fields
        };
    } catch (error) {
        console.error(`Failed to fetch itinerary ${id}:`, error);
        return null;
    }
}

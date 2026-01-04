
export const resolveItineraryImage = (url?: string) => {
    if (!url) return 'https://via.placeholder.com/600x400';

    // If it's already a full URL (from Airtable), return it
    if (url.startsWith('http')) return url;

    // If it's a local asset name (from our fallback), resolve it from assets
    // Using the public path or Vite's dynamic asset loading
    // For local development with Vite, we can use the /src/assets path if it's served
    // But more reliably, we can map the IDs to imported images.

    return `/src/assets/tours/${url}.jpg`;
};

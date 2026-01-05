
// Import all tour images
const tourImages: Record<string, any> = import.meta.glob(
    '../assets/tours/*.jpg',
    { eager: true, import: 'default' }
);

export const resolveItineraryImage = (url?: string) => {
    if (!url) return 'https://via.placeholder.com/600x400';

    // If it's already a full URL (from Airtable), return it
    if (url.startsWith('http')) return url;

    // Match the local image name from imported assets
    const imagePath = Object.keys(tourImages).find(path => path.includes(url));
    if (imagePath) {
        return tourImages[imagePath];
    }

    return 'https://via.placeholder.com/600x400';
};


// Import all tour images
const tourImages: Record<string, any> = import.meta.glob(
    '../assets/tours/*.jpg',
    { eager: true, import: 'default' }
);

export const resolveItineraryImage = (url?: string) => {
    if (!url) return 'https://via.placeholder.com/600x400';

    // Airtable attachments, or files already on this origin (e.g. /covers/egypt.jpg)
    if (url.startsWith('http') || url.startsWith('/')) return url;

    // Match the local image name from imported assets
    const imagePath = Object.keys(tourImages).find(path => path.includes(url));
    if (imagePath) {
        return tourImages[imagePath];
    }

    return 'https://via.placeholder.com/600x400';
};

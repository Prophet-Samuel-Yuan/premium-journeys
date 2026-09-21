
// Import all tour images
const tourImages: Record<string, string> = import.meta.glob(
    '../assets/tours/*.jpg',
    { eager: true, import: 'default' }
);

export type CoverAttachment = {
    url?: string;
    width?: number;
    height?: number;
    thumbnails?: {
        small?: { url?: string; width?: number; height?: number };
        large?: { url?: string; width?: number; height?: number };
        full?: { url?: string; width?: number; height?: number };
    };
};

const PLACEHOLDER = 'https://via.placeholder.com/600x400';

export const resolveItineraryImage = (url?: string) => {
    if (!url) return PLACEHOLDER;

    // Airtable attachments, or files already on this origin (e.g. /covers/egypt.jpg)
    if (url.startsWith('http') || url.startsWith('/')) return url;

    // Match the local image name from imported assets
    const imagePath = Object.keys(tourImages).find(path => path.includes(url));
    if (imagePath) {
        return tourImages[imagePath];
    }

    return PLACEHOLDER;
};

/** Original Airtable file URL (never small/large thumbs). */
export const getFullCoverUrl = (cover?: CoverAttachment | CoverAttachment[]): string | undefined => {
    const att = Array.isArray(cover) ? cover[0] : cover;
    if (!att) return undefined;
    return att.url || att.thumbnails?.full?.url;
};

export const resolveCover = (cover?: CoverAttachment | CoverAttachment[] | null) => {
    const att = Array.isArray(cover) ? cover[0] : cover || undefined;
    const rawUrl = getFullCoverUrl(att);
    return {
        src: resolveItineraryImage(rawUrl),
        width: att?.width ?? att?.thumbnails?.full?.width,
        height: att?.height ?? att?.thumbnails?.full?.height,
    };
};

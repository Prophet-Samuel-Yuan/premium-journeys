import { fetchItineraryById } from './src/api.js';

async function initDetail() {
    const container = document.getElementById('detail-container');
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (!id) {
        container.innerHTML = '<div class="container" style="padding: 100px 0;"><p>No tour ID specified. <a href="index.html">Return home</a>.</p></div>';
        return;
    }

    const tour = await fetchItineraryById(id);

    if (!tour) {
        container.innerHTML = '<div class="container" style="padding: 100px 0;"><p>Tour not found. <a href="index.html">Return home</a>.</p></div>';
        return;
    }

    // Update page title
    document.title = `${tour.Title} | 1st Landing Tours`;

    const imageUrl = tour.CoverImage?.[0]?.url || 'https://via.placeholder.com/1200x800';

    container.innerHTML = `
        <header class="detail-hero" style="background-image: url('${imageUrl}')">
            <div class="container">
                <div class="detail-header">
                    <a href="index.html#tours" class="back-btn"><i class="fa-solid fa-arrow-left"></i> Back to Tours</a>
                    <h1>${tour.Title}</h1>
                </div>
            </div>
        </header>

        <section class="detail-content">
            <div class="container">
                <div class="price-tag">Starting from $${tour.Price?.toLocaleString() || 'Quote on request'}</div>
                <div class="itinerary-content">
                    ${tour.Content ? tour.Content.replace(/\n/g, '<br>') : 'Details for this bespoke journey are being finalized. Please contact our consultants for the full itinerary.'}
                </div>
                
                <div style="margin-top: 50px;">
                    <a href="index.html#contact" class="btn btn-primary">Inquire About This Journey</a>
                </div>
            </div>
        </section>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('App started. Checking environment variables...');
    initDetail();
});

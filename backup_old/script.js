import { fetchItineraries } from './src/api.js';

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const heroBg = document.getElementById('hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrollValue * 0.4}px)`;
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (scrollValue > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function applyAnimations(elements) {
    elements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
        observer.observe(el);
    });
}

async function initTours() {
    const toursContainer = document.getElementById('tours-container');
    if (!toursContainer) return;

    const itineraries = await fetchItineraries();

    if (itineraries.length === 0) {
        toursContainer.innerHTML = '<p class="error-msg">No itineraries found. Please check your Airtable connection.</p>';
        return;
    }

    toursContainer.innerHTML = ''; // Clear loading state

    itineraries.forEach(tour => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-image">
                <img src="${tour.CoverImage?.[0]?.url || 'https://via.placeholder.com/600x400'}" alt="${tour.Title}">
            </div>
            <div class="service-card-content">
                <div class="service-icon"><i class="fa-solid fa-map-location-dot"></i></div>
                <h3>${tour.Title}</h3>
                <p>${tour.Description || 'Bespoke itinerary crafted for the modern explorer.'}</p>
                <a href="/detail.html?id=${tour.id}" class="service-link">View Details <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        `;
        toursContainer.appendChild(card);
    });

    // Apply animations to newly added cards
    applyAnimations(toursContainer.querySelectorAll('.service-card'));
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('App started. Checking environment variables...');
    // Select initial elements to animate
    const initialAnimElements = [
        ...document.querySelectorAll('.intro'),
        ...document.querySelectorAll('.footer-grid > div')
    ];
    applyAnimations(initialAnimElements);

    // Initialize tours
    initTours();

    // Handle form submission
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your inquiry. A bespoke travel consultant will contact you shortly.');
            form.reset();
        });
    }
});

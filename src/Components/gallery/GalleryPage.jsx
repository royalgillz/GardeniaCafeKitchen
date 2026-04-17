import React, { useState, useEffect, useCallback } from 'react';
import PageHero from '../ui/PageHero';
import pastaimage from '../../assets/gallery/pasta.jpg';
import coffeeimage from '../../assets/gallery/coffee.jpg';
import cozyenvironmentimage from '../../assets/gallery/cozyenvironmentimage.png';
import livemusicimage from '../../assets/gallery/livemusicimage.png';
import bigbreakfastimage from '../../assets/the-big-breakfast.jpg';
import eggbenedictimage from '../../assets/egg-benedict.jpg';
import bruschettaimage from '../../assets/bruschetta.jpg';

const SLIDES = [bigbreakfastimage, eggbenedictimage, bruschettaimage];

const SLIDE_ALTS = ['The Big Breakfast', 'Eggs Benedict', 'Bruschetta'];

const GRID_PHOTOS = [
    { src: cozyenvironmentimage, alt: 'Cozy seating area' },
    { src: coffeeimage, alt: 'Specialty coffee' },
    { src: pastaimage, alt: 'Delicious pasta' },
    { src: livemusicimage, alt: 'Live music night' },
    { src: bigbreakfastimage, alt: 'The Big Breakfast' },
    { src: eggbenedictimage, alt: 'Eggs Benedict' },
];

const GalleryPage = () => {
    const [current, setCurrent] = useState(0);
    const [lightbox, setLightbox] = useState(null);

    const nextSlide = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);
    const prevSlide = () => setCurrent((c) => (c === 0 ? SLIDES.length - 1 : c - 1));

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    useEffect(() => {
        const handleKey = (e) => {
            if (lightbox === null) return;
            if (e.key === 'Escape') setLightbox(null);
            if (e.key === 'ArrowRight') setLightbox((l) => (l + 1) % GRID_PHOTOS.length);
            if (e.key === 'ArrowLeft') setLightbox((l) => (l === 0 ? GRID_PHOTOS.length - 1 : l - 1));
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightbox]);

    return (
        <div className="gallery-page">
            <PageHero title="Our Gallery" subtitle="A glimpse into life at Gardenia CafeKitchen." />

            <section className="gallery-slideshow-section">
                <div className="gallery-slideshow">
                    <button className="slide-btn slide-btn--prev" onClick={prevSlide} aria-label="Previous">&#8249;</button>
                    <div className="gallery-slide-track">
                        {SLIDES.map((src, i) => (
                            <div key={i} className={`gallery-slide${i === current ? ' active' : ''}`}>
                                <img src={src} alt={SLIDE_ALTS[i]} />
                            </div>
                        ))}
                    </div>
                    <button className="slide-btn slide-btn--next" onClick={nextSlide} aria-label="Next">&#8250;</button>
                    <div className="gallery-slide-dots">
                        {SLIDES.map((_, i) => (
                            <button
                                key={i}
                                className={`gallery-dot${i === current ? ' active' : ''}`}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="gallery-grid-section">
                <h2 className="gallery-grid-title">Moments at the Cafe</h2>
                <div className="gallery-grid">
                    {GRID_PHOTOS.map((photo, i) => (
                        <button
                            key={i}
                            className="gallery-grid-item"
                            onClick={() => setLightbox(i)}
                            aria-label={`View ${photo.alt}`}
                        >
                            <img src={photo.src} alt={photo.alt} loading="lazy" />
                            <div className="gallery-grid-overlay">
                                <span>{photo.alt}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {lightbox !== null && (
                <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
                    <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">&#x2715;</button>
                    <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l === 0 ? GRID_PHOTOS.length - 1 : l - 1)); }} aria-label="Previous">&#8249;</button>
                    <img
                        src={GRID_PHOTOS[lightbox].src}
                        alt={GRID_PHOTOS[lightbox].alt}
                        className="lightbox-img"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l + 1) % GRID_PHOTOS.length); }} aria-label="Next">&#8250;</button>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;

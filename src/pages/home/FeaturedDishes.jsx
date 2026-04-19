import { useState, useEffect, useCallback } from 'react';
import SectionHeader from '../../Components/ui/SectionHeader';
import Button from '../../Components/ui/Button';

const FeaturedDishes = ({ dishes }) => {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => setCurrent((c) => (c + 1) % dishes.length), [dishes.length]);
    const prev = () => setCurrent((c) => (c === 0 ? dishes.length - 1 : c - 1));

    useEffect(() => {
        const timer = setInterval(next, 4500);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section className="featured-dishes">
            <SectionHeader
                title="Our Popular Dishes"
                subtitle="Fresh ingredients, prepared with care every morning."
            />
            <div className="carousel">
                <button className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Previous dish">&#8249;</button>
                <div className="carousel-track">
                    {dishes.map((dish, i) => (
                        <div key={i} className={`carousel-slide${i === current ? ' active' : ''}`} aria-hidden={i !== current}>
                            <div className="carousel-card">
                                <div className="carousel-img-wrap">
                                    <img src={dish.image} alt={dish.name} />
                                </div>
                                <div className="carousel-info">
                                    <h3>{dish.name}</h3>
                                    <p>{dish.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-btn carousel-btn--next" onClick={next} aria-label="Next dish">&#8250;</button>
            </div>
            <div className="carousel-dots" role="tablist">
                {dishes.map((_, i) => (
                    <button
                        key={i}
                        role="tab"
                        aria-selected={i === current}
                        aria-label={`Dish ${i + 1}`}
                        className={`carousel-dot${i === current ? ' active' : ''}`}
                        onClick={() => setCurrent(i)}
                    />
                ))}
            </div>
            <div className="carousel-cta">
                <Button to="/menu" variant="secondary">See Full Menu</Button>
            </div>
        </section>
    );
};

export default FeaturedDishes;

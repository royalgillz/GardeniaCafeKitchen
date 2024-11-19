import React from 'react';

const Carousel = ({ dishes }) => {
    return (
        <div className="carousel">
            <h2 className="carousel-title">Our Popular Dishes</h2>
            <div className="carousel-container">
                {dishes.map((dish, index) => (
                    <div key={index} className="carousel-item">
                        <img src={dish.image} alt={dish.name} className="carousel-image" />
                        <h3 className="carousel-dish-name">{dish.name}</h3>
                        <p className="carousel-dish-description">{dish.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

import React, { useState } from 'react';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slideshow">
            <button className="slide-button" onClick={prevSlide}>
                &#8249;
            </button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slide-image" />
            <button className="slide-button" onClick={nextSlide}>
                &#8250;
            </button>
        </div>
    );
};

export default Slideshow;

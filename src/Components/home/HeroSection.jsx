import React from 'react';

const HeroSection = ({ tagline, image }) => {
    return (
        <div className="hero-section" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay">
                <h1 className="hero-tagline">{tagline}</h1>
                <a href="/contact" className="visit-us-button">Visit Us</a>
            </div>
        </div>
    );
};

export default HeroSection;

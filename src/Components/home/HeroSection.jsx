import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ tagline, image }) => {
    return (
        <div className="hero-section" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay">
                <h1 className="hero-tagline">{tagline}</h1>
                <Link to="/contact-us" className="visit-us-button">Visit Us</Link>
            </div>
        </div>
    );
};

export default HeroSection;

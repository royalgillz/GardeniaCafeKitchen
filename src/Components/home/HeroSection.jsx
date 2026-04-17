import React from 'react';
import Button from '../ui/Button';

const HeroSection = ({ tagline, image }) => {
    return (
        <div className="hero-section" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay">
                <p className="hero-eyebrow">Welcome to Gardenia CafeKitchen</p>
                <h1 className="hero-tagline">{tagline}</h1>
                <div className="hero-actions">
                    <Button to="/menu" variant="primary" size="lg">View Menu</Button>
                    <Button to="/contact-us" variant="outline" size="lg">Find Us</Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

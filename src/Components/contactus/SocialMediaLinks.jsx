import React from 'react';

const SocialMediaLinks = ({ links }) => {
    return (
        <div className="social-media-links">
            <h2>Connect With Us</h2>
            <a href={links.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
            </a>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
            </a>
            <a href={links.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
            </a>
        </div>
    );
};

export default SocialMediaLinks;

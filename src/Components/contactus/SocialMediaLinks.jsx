import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";

const SocialMediaLinks = ({ links }) => {
    return (
        <div className="social-media-links">
            <h2>Connect With Us</h2>
            <a href={links.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="fab fa-facebook"></FaFacebook>
            </a>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="fab fa-instagram"></FaInstagram>
            </a>
            {/* <a href={links.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
            </a> */}
        </div>
    );
};

export default SocialMediaLinks;

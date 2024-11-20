import React from "react";
import { FaFacebook, FaInstagram, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Cafe Details Section */}
                <div className="footer-section">
                    <h2 className="footer-heading">Gardenia CafeKitchen</h2>
                    <p className="footer-text">"Freshness in Every Bite"</p>
                    <p className="footer-text">
                        <FaClock className="footer-icon" />
                        Open Daily: 11:30 AM - 2:00 PM
                    </p>
                    <p className="footer-text">
                        <FaPhone className="footer-icon" />
                        +61 8 9407 8749
                    </p>
                    <p className="footer-text">
                        <FaMapMarkerAlt className="footer-icon" />
                        Shop 12/1244 Marmion Ave, Currambine WA 6028, Australia
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section">
                    <h3 className="footer-subheading">Quick Links</h3>
                    <ul className="footer-links">
                        <li>
                            <Link to="/" className="footer-link">Home</Link>
                        </li>
                        <li>
                            <Link to="/menu" className="footer-link">Menu</Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="footer-link">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="footer-link">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/about-us" className="footer-link">About Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="footer-section">
                    <h3 className="footer-subheading">Follow Us</h3>
                    <div className="footer-socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <FaFacebook />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p className="footer-bottom-text">© 2024 Gardenia CafeKitchen. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

import { Link } from 'react-router-dom';
import { FaFacebook, FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const QUICK_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/about-us', label: 'About Us' },
    { to: '/contact-us', label: 'Contact' },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2 className="footer-heading">Gardenia CafeKitchen</h2>
                    <p className="footer-tagline">Freshness in Every Bite</p>
                    <ul className="footer-info-list">
                        <li>
                            <FaClock className="footer-icon" />
                            <span>Mon - Sat: 8:00 AM - 2:00 PM</span>
                        </li>
                        <li>
                            <FaPhone className="footer-icon" />
                            <a href="tel:+61894078749">+61 8 9407 8749</a>
                        </li>
                        <li>
                            <FaEnvelope className="footer-icon" />
                            <a href="mailto:info@gardeniacafe.kitchen">info@gardeniacafe.kitchen</a>
                        </li>
                        <li>
                            <FaMapMarkerAlt className="footer-icon" />
                            <a
                                href="https://www.google.com/maps/place/Gardenia+CafeKitchen"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Shop 12/1244 Marmion Ave, Currambine WA 6028
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-subheading">Quick Links</h3>
                    <ul className="footer-links">
                        {QUICK_LINKS.map(({ to, label }) => (
                            <li key={to}>
                                <Link to={to} className="footer-link">{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-subheading">Follow Us</h3>
                    <p className="footer-social-text">Stay connected for updates, specials, and more.</p>
                    <div className="footer-socials">
                        <a
                            href="https://www.facebook.com/profile.php?id=100094037439165"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-bottom-text">
                    &copy; {new Date().getFullYear()} Gardenia CafeKitchen. All Rights Reserved.
                </p>
                <p className="footer-bottom-text">
                    Designed by <a href="https://www.linkedin.com/in/sehaj-gill" target="_blank" rel="noopener noreferrer">Sehaj Gill</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

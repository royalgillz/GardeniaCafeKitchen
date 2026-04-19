import { Link } from 'react-router-dom';
import { FaFacebook, FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const QUICK_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/about-us', label: 'About Us' },
    { to: '/contact-us', label: 'Contact' },
];

const Footer = () => (
    <footer className="footer">
        <div className="footer-inner">
            {/* Brand column */}
            <div className="footer-brand">
                <h2 className="footer-name">Gardenia CafeKitchen</h2>
                <p className="footer-tagline">Freshness in Every Bite</p>
                <p className="footer-about">
                    A warm neighbourhood cafe in Currambine, WA. Fresh food, great coffee, and a welcoming community table.
                </p>
                <div className="footer-socials">
                    <a
                        href="https://www.facebook.com/profile.php?id=100094037439165"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-btn"
                        aria-label="Facebook"
                    >
                        <FaFacebook />
                    </a>
                </div>
            </div>

            {/* Contact column */}
            <div className="footer-col">
                <h3 className="footer-col-heading">Contact</h3>
                <ul className="footer-col-list">
                    <li>
                        <FaMapMarkerAlt />
                        <a href="https://www.google.com/maps/place/Gardenia+CafeKitchen" target="_blank" rel="noopener noreferrer">
                            Shop 12/1244 Marmion Ave<br />Currambine WA 6028
                        </a>
                    </li>
                    <li>
                        <FaPhone />
                        <a href="tel:+61894078749">+61 8 9407 8749</a>
                    </li>
                    <li>
                        <FaEnvelope />
                        <a href="mailto:info@gardeniacafe.kitchen">info@gardeniacafe.kitchen</a>
                    </li>
                </ul>
            </div>

            {/* Links column */}
            <div className="footer-col">
                <h3 className="footer-col-heading">Explore</h3>
                <ul className="footer-col-list footer-col-list--links">
                    {QUICK_LINKS.map(({ to, label }) => (
                        <li key={to}>
                            <Link to={to}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Hours column */}
            <div className="footer-col">
                <h3 className="footer-col-heading">Hours</h3>
                <ul className="footer-col-list">
                    <li><FaClock /><span>Mon – Sat</span></li>
                    <li className="footer-hours-time">8:00 AM – 2:00 PM</li>
                    <li className="footer-hours-closed">Closed Sundays</li>
                </ul>
            </div>
        </div>

        <div className="footer-bar">
            <p>&copy; {new Date().getFullYear()} Gardenia CafeKitchen. All rights reserved.</p>
            <p>Designed by <a href="https://www.linkedin.com/in/sehaj-gill" target="_blank" rel="noopener noreferrer">Sehaj Gill</a></p>
        </div>
    </footer>
);

export default Footer;

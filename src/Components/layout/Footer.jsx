import { Link } from 'react-router-dom';
import { FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from '../ui/Logo';

const NAV_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/about-us', label: 'About' },
    { to: '/contact-us', label: 'Contact' },
];

const Footer = () => (
    <footer className="footer">
        <div className="footer-strip">
            <Link to="/" aria-label="Gardenia CafeKitchen – Home">
                <Logo className="footer-logo" variant="default" />
            </Link>

            <nav className="footer-nav" aria-label="Footer navigation">
                {NAV_LINKS.map(({ to, label }) => (
                    <Link key={to} to={to}>{label}</Link>
                ))}
            </nav>

            <div className="footer-contact">
                <a href="tel:+61894078749" className="footer-contact-item">
                    <FaPhone aria-hidden="true" /><span>+61 8 9407 8749</span>
                </a>
                <a href="mailto:info@gardeniacafe.kitchen" className="footer-contact-item">
                    <FaEnvelope aria-hidden="true" /><span>info@gardeniacafe.kitchen</span>
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100094037439165"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-icon"
                    aria-label="Facebook"
                >
                    <FaFacebook />
                </a>
            </div>
        </div>

        <div className="footer-bar">
            <p>&copy; {new Date().getFullYear()} Gardenia CafeKitchen. All rights reserved.</p>
            <p>Designed by <a href="https://www.linkedin.com/in/sehaj-gill" target="_blank" rel="noopener noreferrer">Sehaj Gill</a></p>
        </div>
    </footer>
);

export default Footer;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Apronlogo.png';

const NAV_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/about-us', label: 'About' },
    { to: '/menu', label: 'Menu' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact-us', label: 'Contact' },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { hash } = useLocation();

    const currentPath = hash.replace('#', '') || '/';
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="header-brand" onClick={closeMenu}>
                    <img src={logo} alt="Gardenia CafeKitchen logo" className="header-logo" />
                    <span className="header-title">Gardenia CafeKitchen</span>
                </Link>

                <nav className={`nav-links${isMenuOpen ? ' open' : ''}`} aria-label="Main navigation">
                    <div className="sidebar-header">
                        <img src={logo} alt="Gardenia CafeKitchen logo" className="sidebar-logo" />
                        <button className="sidebar-close" onClick={closeMenu} aria-label="Close menu">
                            &#x2715;
                        </button>
                    </div>
                    <ul>
                        {NAV_LINKS.map(({ to, label }) => (
                            <li key={to}>
                                <Link
                                    to={to}
                                    onClick={closeMenu}
                                    className={currentPath === to ? 'nav-link active' : 'nav-link'}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className="hamburger"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                </button>
            </div>

            {isMenuOpen && (
                <div className="side-menu-overlay" onClick={closeMenu} aria-hidden="true" />
            )}
        </header>
    );
};

export default Header;

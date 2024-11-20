import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/gardeniacafelogo.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-content">
                {/* Logo */}
                <div className="logo">
                    <img src={logo} alt="Website Logo" />
                </div>

                {/* Title */}
                <div className="title-div">
                    <Link to="">
                        <h1 className="title">Gardenia CafeKitchen</h1>
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                    <div className="sidebar-logo">
                        <img src={logo} alt="Website Logo" />
                    </div>
                    <ul>
                        <li>
                            <Link to="" onClick={closeMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="about-us" onClick={closeMenu}>About</Link>
                        </li>
                        <li>
                            <Link to="menu" onClick={closeMenu}>Menu</Link>
                        </li>
                        <li>
                            <Link to="contact-us" onClick={closeMenu}>Contact Us</Link>
                        </li>
                    </ul>
                </nav>

                {/* Hamburger Menu */}
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

            {/* Side Menu Overlay */}
            {isMenuOpen && <div className="side-menu-overlay" onClick={closeMenu}></div>}
        </header>
    );
};

export default Header;

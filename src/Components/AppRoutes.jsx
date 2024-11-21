// AppRoutes.jsx
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header'
import Footer from './Footer'
//Home
import HomePage from './home/HomePage'
//Menu
import MenuPage from './menu/MenuPage'


import ScrollToTop from './ScrollToTop';
//About Us
import AboutUsPage from './about/AboutUsPage';
//Contact Us
import ContactUsPage from './contactus/ContactUs';
import GalleryPage from './gallery/GalleryPage';


const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            {/* <SideMenu /> */}
            <Routes>
                {/* Home */}
                <Route path="/" element={<HomePage />} />
                {/* About Us */}
                <Route path="/about-us" element={<AboutUsPage />} />
                {/* Menu */}
                <Route path="/menu" element={<MenuPage />} />
                {/* Gallery */}
                <Route path="/gallery" element={<GalleryPage />} />
                {/* Contact Us */}
                <Route path="/contact-us" element={<ContactUsPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRoutes;

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
                <Route path="/about" element={<AboutUsPage />} />
                {/* Menu */}
                <Route path="/menu" element={<MenuPage />} />
                {/* Contact Us */}
                <Route path="/contact-us" element={<ContactUsPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRoutes;

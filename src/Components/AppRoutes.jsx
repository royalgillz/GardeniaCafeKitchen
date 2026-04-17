import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Footer from './Footer';
import HomePage from './home/HomePage';
import AboutUsPage from './about/AboutUsPage';
import MenuPage from './menu/MenuPage';
import GalleryPage from './gallery/GalleryPage';
import ContactUsPage from './contactus/ContactUs';
import NotFoundPage from './NotFoundPage';

const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/contact-us" element={<ContactUsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default AppRoutes;

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/layout/ScrollToTop';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import MenuPage from './pages/menu';
import GalleryPage from './pages/gallery';
import ContactPage from './pages/contact';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about-us" element={<AboutPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/contact-us" element={<ContactPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default AppRoutes;

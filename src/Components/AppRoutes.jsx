// AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Header from './header/Header1'
import Footer from './Footer'
//Home
import HomePage from './home/HomePage'


import ScrollToTop from './ScrollToTop';
import ContactUsPage from './contactus/ContactUs';


const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            {/* <Header />
            <SideMenu /> */}
            <Routes>
                {/* Home */}
                <Route path="/" element={<HomePage />} />
                {/* Contact Us */}
                <Route path="/contact-us" element={<ContactUsPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRoutes;

import React from 'react';
import ContactInfo from './ContactInfo';
import GoogleMap from './GoogleMap';
import ContactForm from './ContactForm';
import PageHero from '../ui/PageHero';
import { FaFacebook } from 'react-icons/fa';

const ContactUsPage = () => {
    return (
        <div className="contact-us-page">
            <PageHero
                title="Get in Touch"
                subtitle="We would love to hear from you. Reach out with any questions or feedback."
            />
            <div className="contact-body">
                <div className="contact-left">
                    <ContactInfo
                        address="Shop 12/1244 Marmion Ave, Currambine WA 6028, Australia"
                        phone="+61 8 9407 8749"
                        email="info@gardeniacafe.kitchen"
                        hours="Mon - Sat: 8:00 AM - 2:00 PM"
                    />
                    <div className="contact-social">
                        <h3>Follow Us</h3>
                        <a
                            href="https://www.facebook.com/profile.php?id=100094037439165"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-social-link"
                            aria-label="Facebook"
                        >
                            <FaFacebook /> Facebook
                        </a>
                    </div>
                    <GoogleMap
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.092538488062!2d115.7390882!3d-31.740675000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2bcd55cc1864e6b5%3A0x79eff58dd96a2396!2sGardenia%20CafeKitchen!5e0!3m2!1sen!2sus!4v1732020936791!5m2!1sen!2sus"
                    />
                </div>
                <div className="contact-right">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;

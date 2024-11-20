import React from 'react';
import ContactInfo from './ContactInfo';
import GoogleMap from './GoogleMap';
import ContactForm from './ContactForm';
import SocialMediaLinks from './SocialMediaLinks';
import CallToAction from './CallToAction';

const ContactUsPage = () => {
    return (
        <div className="contact-us-page">
            <CallToAction
                message="We'd love to hear from you! Reach out for any questions or feedback."
            />
            <div className="contact-info-section">
                <ContactInfo
                    address="Shop 12/1244 Marmion Ave, Currambine WA 6028, Australia"
                    phone="+61 8 9407 8749"
                    email="Gardeniacafe@myyahoo.com"
                    hours="Open Daily: 11:30 AM - 2:00 PM"
                />
                <GoogleMap
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.092538488062!2d115.7390882!3d-31.740675000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2bcd55cc1864e6b5%3A0x79eff58dd96a2396!2sGardenia%20CafeKitchen!5e0!3m2!1sen!2sus!4v1732020936791!5m2!1sen!2sus"
                />
            </div>
            <ContactForm />
            <SocialMediaLinks
                links={{
                    facebook: "https://www.facebook.com/profile.php?id=100094037439165",
                    // instagram: "https://instagram.com/gardeniacafekitchen",
                    // twitter: "https://twitter.com/gardeniacafe"
                }}
            />
        </div>
    );
};

export default ContactUsPage;

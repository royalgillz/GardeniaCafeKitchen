import ContactInfo from './ContactInfo';
import Map from './Map';
import ContactForm from './ContactForm';
import PageHero from '../../Components/ui/PageHero';
import { FaFacebook } from 'react-icons/fa';

const FAQ = [
    { q: 'Do I need to make a reservation?', a: 'No reservations needed. We are a walk-in cafe and welcome you anytime during our opening hours.' },
    { q: 'Is there parking nearby?', a: 'Yes, there is free parking available directly outside the cafe at the Currambine shopping precinct.' },
    { q: 'Do you cater for dietary requirements?', a: 'Absolutely. We offer vegetarian, vegan, and gluten-friendly options. Just ask our staff when you visit.' },
    { q: 'Are you open on Sundays?', a: 'We are currently open Monday to Saturday, 8:00 AM to 2:00 PM. We are closed on Sundays.' },
];

const ContactPage = () => (
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
                <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.092538488062!2d115.7390882!3d-31.740675000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2bcd55cc1864e6b5%3A0x79eff58dd96a2396!2sGardenia%20CafeKitchen!5e0!3m2!1sen!2sus!4v1732020936791!5m2!1sen!2sus" />
            </div>

            <div className="contact-right">
                <ContactForm />
            </div>
        </div>

        <section className="contact-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
                {FAQ.map(({ q, a }, i) => (
                    <div key={i} className="faq-item">
                        <h3>{q}</h3>
                        <p>{a}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
);

export default ContactPage;

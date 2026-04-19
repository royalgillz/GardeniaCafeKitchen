import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="contact-form">
            <h2>Send Us a Message</h2>
            {status === 'success' && (
                <p className="form-feedback form-feedback--success">
                    Thank you! Your message has been sent. We will get back to you soon.
                </p>
            )}
            {status === 'error' && (
                <p className="form-feedback form-feedback--error">
                    Something went wrong. Please try again or email us directly.
                </p>
            )}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting'}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting'}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting'}
                />
                <button type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

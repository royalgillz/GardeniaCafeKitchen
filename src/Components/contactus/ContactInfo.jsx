import React from 'react';

const ContactInfo = ({ address, phone, email }) => {
    return (
        <div className="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
        </div>
    );
};

export default ContactInfo;

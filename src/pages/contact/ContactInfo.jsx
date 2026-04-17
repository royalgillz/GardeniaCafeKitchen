import React from 'react';

const ContactInfo = ({ address, phone, email, hours }) => {
    return (
        <div className="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a></p>
            <p><strong>Opening Hours:</strong> {hours}</p>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Any Queries, Please email us at:</strong> <a href={`mailto:${email}`}>{email}</a></p>
        </div>
    );
};

export default ContactInfo;

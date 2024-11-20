import React from 'react';

const ContactInfo = ({ address, phone, email, hours }) => {
    return (
        <div className="contact-info">
            <h2>Contact Information</h2>
            {/* <p><strong>Phone:</strong> {phone}</p> */}
            <p><strong>Phone:</strong> <a href={`tel:${phone}`}>+61 8 9407 8749</a></p>
            <p><strong>Opening Hours:</strong> {hours}</p>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Any Queries, Please email us at:</strong> <a href={`mailto:${email}`}>{email}</a></p>
        </div>
    );
};

export default ContactInfo;

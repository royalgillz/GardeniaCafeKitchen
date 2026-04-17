import React from 'react';
import { FaClock } from 'react-icons/fa';
import Button from '../ui/Button';

const OpeningHours = ({ hours, specialDeal }) => {
    return (
        <section className="opening-hours-section">
            <div className="opening-hours-content">
                <div className="opening-hours-text">
                    <FaClock className="opening-hours-clock" aria-hidden="true" />
                    <h2>Opening Hours</h2>
                    <ul className="opening-hours-list">
                        {hours.map((hour, index) => (
                            <li key={index}>
                                <span className="opening-day">{hour.day}</span>
                                <span className="opening-time">{hour.time}</span>
                            </li>
                        ))}
                    </ul>
                    {specialDeal && (
                        <p className="special-deal">{specialDeal}</p>
                    )}
                </div>
                <div className="opening-hours-cta">
                    <h3>Ready to visit?</h3>
                    <p>We are conveniently located in Currambine, Western Australia. Walk-ins welcome.</p>
                    <Button to="/contact-us" variant="primary">Get Directions</Button>
                </div>
            </div>
        </section>
    );
};

export default OpeningHours;

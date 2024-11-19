import React from 'react';

const OpeningHours = ({ hours, specialDeal }) => {
    return (
        <div className="opening-hours">
            <h2 className="opening-hours-title">Opening Hours</h2>
            <ul className="opening-hours-list">
                {hours.map((hour, index) => (
                    <li key={index} className="opening-hours-item">
                        {hour.day}: {hour.time}
                    </li>
                ))}
            </ul>
            <p className="special-deal">{specialDeal}</p>
        </div>
    );
};

export default OpeningHours;

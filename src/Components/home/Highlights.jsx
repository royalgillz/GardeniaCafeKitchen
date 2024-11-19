import React from 'react';

const Highlights = ({ features }) => {
    return (
        <div className="highlights">
            <h2 className="highlights-title">Why Choose Us?</h2>
            <ul className="highlights-list">
                {features.map((feature, index) => (
                    <li key={index} className="highlight-item">{feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default Highlights;

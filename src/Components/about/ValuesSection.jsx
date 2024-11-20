import React from 'react';

const ValuesSection = ({ values }) => {
    return (
        <section className="values-section">
            <h2>Our Values</h2>
            <ul>
                {values.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </section>
    );
};

export default ValuesSection;

import React from 'react';
import { FaRecycle, FaUsers, FaAppleAlt, FaHandsHelping } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';

const VALUE_ICONS = [FaRecycle, FaUsers, FaAppleAlt, FaHandsHelping];

const ValuesSection = ({ values }) => {
    return (
        <section className="values-section">
            <SectionHeader
                title="Our Values"
                subtitle="The principles that guide everything we do."
            />
            <div className="values-grid">
                {values.map((value, index) => {
                    const Icon = VALUE_ICONS[index % VALUE_ICONS.length];
                    return (
                        <div key={index} className="value-card">
                            <span className="value-icon" aria-hidden="true"><Icon /></span>
                            <h3>{value.title}</h3>
                            <p>{value.body}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ValuesSection;

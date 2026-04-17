import React from 'react';
import { FaRecycle, FaUsers, FaAppleAlt, FaHandsHelping } from 'react-icons/fa';
import SectionHeader from '../../Components/ui/SectionHeader';

const VALUE_ICONS = [FaRecycle, FaUsers, FaAppleAlt, FaHandsHelping];

const Values = ({ values }) => (
    <section className="values-section">
        <SectionHeader title="Our Values" subtitle="The principles that guide everything we do." />
        <div className="values-grid">
            {values.map((value, i) => {
                const Icon = VALUE_ICONS[i % VALUE_ICONS.length];
                return (
                    <div key={i} className="value-card">
                        <span className="value-icon" aria-hidden="true"><Icon /></span>
                        <h3>{value.title}</h3>
                        <p>{value.body}</p>
                    </div>
                );
            })}
        </div>
    </section>
);

export default Values;

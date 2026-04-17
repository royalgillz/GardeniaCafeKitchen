import React from 'react';
import { FaLeaf, FaSeedling, FaCoffee, FaSun, FaHeart } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';

const ICONS = [FaLeaf, FaSeedling, FaCoffee, FaSun, FaHeart];

const Highlights = ({ features }) => {
    return (
        <section className="highlights">
            <SectionHeader
                title="Why Choose Us?"
                subtitle="Everything we do is rooted in quality, community, and care."
            />
            <ul className="highlights-list">
                {features.map((feature, index) => {
                    const Icon = ICONS[index % ICONS.length];
                    return (
                        <li key={index} className="highlight-card">
                            <span className="highlight-icon" aria-hidden="true">
                                <Icon />
                            </span>
                            <span className="highlight-text">{feature}</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Highlights;

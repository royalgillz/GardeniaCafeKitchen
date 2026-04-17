import React from 'react';
import SectionHeader from '../ui/SectionHeader';

const AboutIntro = ({ data }) => {
    return (
        <section className="about-intro">
            <SectionHeader title={data.title} />
            <p className="about-description">{data.description}</p>
            <div className="about-cards">
                <div className="about-card">
                    <h3>Our Vision</h3>
                    <p>{data.vision}</p>
                </div>
                <div className="about-card">
                    <h3>Our Mission</h3>
                    <p>{data.mission}</p>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;

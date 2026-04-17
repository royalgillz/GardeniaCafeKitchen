import React from 'react';
import SectionHeader from '../../Components/ui/SectionHeader';
import Button from '../../Components/ui/Button';

const Story = ({ data }) => (
    <section className="about-intro">
        <div className="about-story">
            <div className="about-story-text">
                <SectionHeader title={data.title} align="left" />
                <p className="about-description">{data.description}</p>
                <Button to="/menu" variant="secondary">Explore Our Menu</Button>
            </div>
            <div className="about-story-cards">
                <div className="about-card">
                    <h3>Our Vision</h3>
                    <p>{data.vision}</p>
                </div>
                <div className="about-card">
                    <h3>Our Mission</h3>
                    <p>{data.mission}</p>
                </div>
            </div>
        </div>
    </section>
);

export default Story;

import React from 'react';

const AboutIntro = ({ data }) => {
    return (
        <section className="about-intro">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <h2>{data.vision}</h2>
            <h3>{data.mission}</h3>
        </section>
    );
};

export default AboutIntro;

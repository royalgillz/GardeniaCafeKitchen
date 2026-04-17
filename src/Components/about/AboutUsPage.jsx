import React from 'react';
import AboutIntro from './AboutIntro';
import TeamSection from './TeamSection';
import ValuesSection from './ValuesSection';

const AboutUsPage = () => {
    const introData = {
        title: "Our Story",
        description:
            "Gardenia CafeKitchen started with a simple dream: to create a warm, inviting space where people can connect over great food. We serve delightful meals made from the freshest local ingredients, while fostering a real sense of community in Currambine.",
        vision: "To be a cornerstone of the community, offering not just meals, but truly memorable experiences.",
        mission: "To serve fresh, sustainable, and heartwarming food that brings people together.",
    };

    const teamData = [
        { name: "The Kitchen Team", role: "Chefs and Cooks", bio: "Our passionate kitchen crew arrives early every morning to prepare fresh ingredients and craft every dish with care and consistency." },
        { name: "Front of House", role: "Service Team", bio: "Warm smiles and attentive service are what make Gardenia feel like home. Our team is dedicated to making every visit special." },
    ];

    const valuesData = [
        { title: "Sustainability", body: "We are committed to eco-friendly practices, from locally-sourced ingredients to minimising waste, ensuring a positive impact with every dish we serve." },
        { title: "Community", body: "Our cafe is a hub for local gatherings. We actively engage in community events and initiatives, fostering a sense of belonging for all." },
        { title: "Freshness", body: "We believe in the power of fresh, locally-sourced ingredients. Each meal is crafted with care, ensuring the highest quality and taste." },
        { title: "Inclusivity", body: "Gardenia CafeKitchen is a place where everyone, no matter their background, can come together and enjoy a warm, welcoming atmosphere." },
    ];

    return (
        <div className="about-us-page">
            <div className="about-hero">
                <div className="about-hero-overlay">
                    <h1>About Us</h1>
                    <p>A little cafe with a big heart, right in the heart of Currambine.</p>
                </div>
            </div>
            <AboutIntro data={introData} />
            <ValuesSection values={valuesData} />
            <TeamSection team={teamData} />
        </div>
    );
};

export default AboutUsPage;

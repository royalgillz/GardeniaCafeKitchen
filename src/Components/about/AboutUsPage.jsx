import React from 'react';
import AboutIntro from './AboutIntro';
import TeamSection from './TeamSection';
import ValuesSection from './ValuesSection';

const AboutUsPage = () => {
    const introData = {
        title: "Welcome to Gardenia CafeKitchen",
        description:
            "Gardenia CafeKitchen started with a dream of creating a warm, inviting space where people can connect over great food. Our mission is to serve delightful meals made from the freshest ingredients, while fostering a sense of community.",
        vision: "Our Vision: To be a cornerstone of the community, offering not just meals, but memorable experiences.",
        mission: "Our Mission: To serve fresh, sustainable, and heartwarming food that brings people together."
    };

    const teamData = [
        { name: "John Doe", role: "Founder & Chef", bio: "John has over 20 years of culinary experience and a passion for bringing people together over food." },
        { name: "Jane Smith", role: "Co-Owner", bio: "Jane believes in sustainability and ensures all our ingredients are sourced ethically." }
    ];

    const valuesData = [
        "Sustainability - At Gardenia CafeKitchen, we are committed to eco-friendly practices, ensuring a positive impact on the environment with every dish we serve.",
        "Community - Our cafe is a hub for local gatherings. We actively engage in community events and initiatives, fostering a sense of belonging for all.",
        "Freshness - We believe in the power of fresh, locally-sourced ingredients. Each meal is crafted with care, ensuring the highest quality and taste.",
        "Inclusivity - Gardenia CafeKitchen is a place where everyone, no matter their background, can come together and enjoy a warm, welcoming atmosphere."
    ];


    return (
        <div className="about-us-page">
            <AboutIntro data={introData} />
            <TeamSection team={teamData} />
            <ValuesSection values={valuesData} />
        </div>
    );
};

export default AboutUsPage;

import React from 'react';
import Story from './Story';
import Values from './Values';
import Team from './Team';
import StatsStrip from '../../Components/ui/StatsStrip';
import { FaLeaf, FaUsers, FaSun, FaMapMarkerAlt } from 'react-icons/fa';

const ABOUT_STATS = [
    { icon: FaLeaf, value: '100%', label: 'Fresh Ingredients' },
    { icon: FaUsers, value: '', label: 'Community Hub' },
    { icon: FaSun, value: '6', label: 'Days a Week' },
    { icon: FaMapMarkerAlt, value: '', label: 'Currambine, WA' },
];

const storyData = {
    title: "Our Story",
    description: "Gardenia CafeKitchen was born from a simple belief: that great food and good company can transform an ordinary morning into something memorable. We opened our doors in Currambine with one goal in mind. To be the kind of place where locals feel at home, where families linger over breakfast, and where every dish is made with genuine care.",
    vision: "To be a cornerstone of the Currambine community, offering not just meals, but truly memorable experiences.",
    mission: "To serve fresh, sustainable, and heartwarming food that brings people together.",
};

const valuesData = [
    { title: "Sustainability", body: "We are committed to eco-friendly practices, from locally-sourced ingredients to minimising waste, ensuring a positive impact with every dish we serve." },
    { title: "Community", body: "Our cafe is a hub for local gatherings. We actively engage with the neighbourhood and foster a genuine sense of belonging for all who walk through our door." },
    { title: "Freshness", body: "We believe in the power of fresh, locally-sourced ingredients. Each meal is crafted with care to deliver the highest quality and flavour on every plate." },
    { title: "Inclusivity", body: "Gardenia CafeKitchen is a place where everyone is welcome. We celebrate diversity and ensure our menu caters for a wide range of dietary needs and preferences." },
];

const teamData = [
    { name: "The Kitchen Team", role: "Chefs and Cooks", bio: "Our passionate kitchen crew arrives early every morning to prepare fresh ingredients and craft every dish with care, precision, and consistency." },
    { name: "Front of House", role: "Service Team", bio: "Warm smiles and attentive service are what make Gardenia feel like home. Our team is dedicated to making every visit a genuinely special experience." },
];

const AboutPage = () => (
    <div className="about-us-page">
        <div className="about-hero">
            <div className="about-hero-overlay">
                <h1>About Us</h1>
                <p>A neighbourhood cafe with a big heart, right here in Currambine.</p>
            </div>
        </div>
        <StatsStrip stats={ABOUT_STATS} variant="light" />
        <Story data={storyData} />
        <Values values={valuesData} />
        <Team team={teamData} />
    </div>
);

export default AboutPage;

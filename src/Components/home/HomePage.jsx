import React from 'react';
import HeroSection from './HeroSection';
import Highlights from './Highlights';
import Carousel from './Carousel';
import Testimonials from './Testimonials';
import OpeningHours from './OpeningHours';

const HomePage = () => {
    return (
        <div className="home-page">
            <HeroSection
                tagline="Welcome to Gardenia CafeKitchen – Where Every Bite Tells a Story"
                image="/images/hero.jpg" // Replace with actual image path
            />
            <Highlights
                features={[
                    'Fresh, locally-sourced ingredients',
                    'Vegetarian and vegan-friendly options',
                    'Cozy ambiance for family and friends',
                    'All-day breakfast available',
                    'Special coffee blends and desserts',
                ]}
            />
            <Carousel
                dishes={[
                    { name: 'The Big Breakfast', description: 'A hearty mix of all your breakfast favorites.', image: '/images/big-breakfast.jpg' },
                    { name: 'Eggs Benedict', description: 'Perfectly poached eggs on toasted ciabatta.', image: '/images/eggs-benedict.jpg' },
                    { name: 'Steak Sandwich', description: 'Juicy steak with caramelized onions.', image: '/images/steak-sandwich.jpg' },
                ]}
            />
            {/* <Testimonials
                reviews={[
                    { name: 'John Doe', text: 'Best cafe in town! Love the ambiance and food.', rating: 5 },
                    { name: 'Jane Smith', text: 'Amazing breakfast options. Highly recommend!', rating: 4.5 },
                    { name: 'Sam Wilson', text: 'Great service and delicious coffee.', rating: 4.8 },
                ]}
            /> */}
            <OpeningHours
                hours={[
                    { day: 'Monday - Friday', time: '7:00 AM - 5:00 PM' },
                    { day: 'Saturday - Sunday', time: '8:00 AM - 4:00 PM' },
                ]}
                specialDeal="All Day Breakfast available!"
            />
        </div>
    );
};

export default HomePage;

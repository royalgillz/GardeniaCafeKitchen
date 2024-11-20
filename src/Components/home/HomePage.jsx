import React from 'react';
import HeroSection from './HeroSection';
import Highlights from './Highlights';
import Carousel from './Carousel';
// import Testimonials from './Testimonials';
import OpeningHours from './OpeningHours';
import bigbreakfastimage from '../../assets/the-big-breakfast.jpg';
import eggbenedictimage from '../../assets/egg-benedict.jpg';
import bruschettaimage from '../../assets/bruschetta.jpg';
import herosectionimage1 from '../../assets/cafe highlights photograph.png';

const HomePage = () => {
    return (
        <div className="home-page">
            <HeroSection
                tagline="Welcome to Gardenia CafeKitchen - Where Every Bite Tells a Story"
                image={herosectionimage1} // Replace with actual image path
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
                    { name: 'The Big Breakfast', description: 'A hearty mix of all your breakfast favorites.', image: bigbreakfastimage },
                    { name: 'Eggs Benedict', description: 'Perfectly poached eggs on toasted ciabatta.', image: eggbenedictimage },
                    { name: 'Bruschetta', description: 'Crispy toasted bread topped with a flavorful blend of fresh tomatoes, garlic, basil, and a drizzle of olive oil.', image: bruschettaimage },
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

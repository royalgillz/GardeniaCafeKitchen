import React from 'react';
import HeroSection from './HeroSection';
import Highlights from './Highlights';
import Carousel from './Carousel';
import Testimonials from './Testimonials';
import OpeningHours from './OpeningHours';
import bigbreakfastimage from '../../assets/the-big-breakfast.jpg';
import eggbenedictimage from '../../assets/egg-benedict.jpg';
import bruschettaimage from '../../assets/bruschetta.jpg';
import herosectionimage1 from '../../assets/cafe highlights photograph.png';

const HomePage = () => {
    return (
        <div className="home-page">
            <HeroSection
                tagline="Where Every Bite Tells a Story"
                image={herosectionimage1}
            />
            <Highlights
                features={[
                    'Fresh, locally-sourced ingredients',
                    'Vegetarian and vegan-friendly options',
                    'Cozy ambiance for family and friends',
                    'All-day breakfast available',
                    'Specialty coffee blends and desserts',
                ]}
            />
            <Carousel
                dishes={[
                    { name: 'The Big Breakfast', description: 'Scrambled eggs, bacon, sausage, hash brown, grilled tomatoes, mushrooms, and baked beans on toasted ciabatta.', image: bigbreakfastimage },
                    { name: 'Eggs Benedict', description: 'Perfectly poached eggs on toasted ciabatta with your choice of bacon, ham, or smoked salmon.', image: eggbenedictimage },
                    { name: 'Bruschetta', description: 'Crispy toasted bread topped with fresh tomatoes, garlic, basil, and a drizzle of olive oil, finished with a poached egg.', image: bruschettaimage },
                ]}
            />
            <Testimonials
                reviews={[
                    { name: 'Sarah M.', text: 'Best cafe in Currambine! The Big Breakfast is incredible and the coffee is always perfect. A real gem of a place.', rating: 5 },
                    { name: 'James T.', text: 'Amazing breakfast options and such a warm, friendly atmosphere. We come every Saturday morning without fail.', rating: 4.5 },
                    { name: 'Priya K.', text: 'Great vegetarian options and the staff always remember our orders. Feels like a home away from home.', rating: 5 },
                ]}
            />
            <OpeningHours
                hours={[
                    { day: 'Monday - Saturday', time: '8:00 AM - 2:00 PM' },
                ]}
                specialDeal="All Day Breakfast available!"
            />
        </div>
    );
};

export default HomePage;

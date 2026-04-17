import React from 'react';
import Hero from './Hero';
import Features from './Features';
import FeaturedDishes from './FeaturedDishes';
import Testimonials from './Testimonials';
import Visit from './Visit';
import StatsStrip from '../../Components/ui/StatsStrip';
import { FaLeaf, FaSun, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import bigbreakfastimage from '../../assets/the-big-breakfast.jpg';
import eggbenedictimage from '../../assets/egg-benedict.jpg';
import bruschettaimage from '../../assets/bruschetta.jpg';
import heroImage from '../../assets/cafe highlights photograph.png';

const HOME_STATS = [
    { icon: FaLeaf, label: 'Locally Sourced' },
    { icon: FaSun, label: 'All-Day Breakfast' },
    { icon: FaMapMarkerAlt, label: 'Currambine, WA' },
    { icon: FaUsers, label: 'Community Cafe' },
];

const HomePage = () => (
    <div className="home-page">
        <Hero
            tagline="Where Every Bite Tells a Story"
            image={heroImage}
        />
        <StatsStrip stats={HOME_STATS} variant="dark" />
        <Features
            features={[
                { icon: 'leaf', text: 'Fresh, locally-sourced ingredients' },
                { icon: 'seedling', text: 'Vegetarian and vegan-friendly options' },
                { icon: 'coffee', text: 'Specialty coffee blends and desserts' },
                { icon: 'sun', text: 'All-day breakfast, every weekday' },
                { icon: 'heart', text: 'Cozy ambiance for family and friends' },
            ]}
        />
        <FeaturedDishes
            dishes={[
                {
                    name: 'The Big Breakfast',
                    description: 'Scrambled eggs, bacon, sausage, hash brown, grilled tomatoes, mushrooms, and baked beans on toasted ciabatta.',
                    image: bigbreakfastimage,
                },
                {
                    name: 'Eggs Benedict',
                    description: 'Perfectly poached eggs on toasted ciabatta with your choice of bacon, ham, or smoked salmon.',
                    image: eggbenedictimage,
                },
                {
                    name: 'Bruschetta with Poached Egg',
                    description: 'Crispy toasted ciabatta topped with ripe tomatoes, fresh basil, garlic, and a perfectly poached egg.',
                    image: bruschettaimage,
                },
            ]}
        />
        <Testimonials
            reviews={[
                { name: 'Sarah M.', text: 'Best cafe in Currambine! The Big Breakfast is incredible and the coffee is always perfect. A real gem of a place.', rating: 5 },
                { name: 'James T.', text: 'Amazing breakfast options and such a warm, friendly atmosphere. We come every Saturday morning without fail.', rating: 4.5 },
                { name: 'Priya K.', text: 'Great vegetarian options and the staff always remember our orders. Feels like a home away from home.', rating: 5 },
            ]}
        />
        <Visit
            hours={[{ day: 'Monday - Saturday', time: '8:00 AM - 2:00 PM' }]}
            specialDeal="All-Day Breakfast available throughout our opening hours."
        />
    </div>
);

export default HomePage;

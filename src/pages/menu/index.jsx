import { useState } from 'react';
import CategorySection from './CategorySection';
import CategoryNav from './CategoryNav';
import PageHero from '../../Components/ui/PageHero';
import { breakfastMenu, lunchMenu, kidsMenu, freshSaladsMenu, extrasMenu, sideMenu } from '../../data/menu';

const CATEGORIES = [
    { id: 'breakfast', name: 'Breakfast', items: breakfastMenu },
    { id: 'lunch', name: 'Lunch', items: lunchMenu },
    { id: 'salads', name: 'Fresh Salads', items: freshSaladsMenu },
    { id: 'kids', name: "Kids' Menu", items: kidsMenu },
    { id: 'extras', name: 'Extras', items: extrasMenu },
    { id: 'sides', name: 'Sides', items: sideMenu },
];

const MenuPage = () => {
    const [query, setQuery] = useState('');

    const filtered = CATEGORIES.map((cat) => ({
        ...cat,
        items: cat.items.map((item) => {
            if (item.subItems) {
                const matchedSubs = item.subItems.filter((s) =>
                    s.name.toLowerCase().includes(query.toLowerCase())
                );
                if (matchedSubs.length > 0) return { ...item, subItems: matchedSubs };
            }
            if (item.name.toLowerCase().includes(query.toLowerCase())) return item;
            return null;
        }).filter(Boolean),
    }));

    return (
        <div className="menu-page">
            <PageHero
                title="Our Menu"
                subtitle="Fresh, locally-sourced food. All-day breakfast available Monday to Saturday."
            />
            <CategoryNav categories={CATEGORIES} query={query} setQuery={setQuery} />
            <div className="menu-categories">
                {filtered.map((cat) => (
                    <CategorySection key={cat.id} category={cat} />
                ))}
            </div>
        </div>
    );
};

export default MenuPage;

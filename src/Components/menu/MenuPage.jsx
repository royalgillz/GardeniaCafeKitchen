import React, { useState } from 'react';
import CategorySection from './CategorySection';
import CategoryNavigation from './CategoryNavigation';
import PageHero from '../ui/PageHero';
import { breakfastMenu, lunchMenu, kidsMenu, freshSaladsMenu, extrasMenu, sideMenu } from '../../assets/menuData';

const categories = [
    { id: 'breakfast', name: 'Breakfast', items: breakfastMenu },
    { id: 'lunch', name: 'Lunch', items: lunchMenu },
    { id: 'salads', name: 'Fresh Salads', items: freshSaladsMenu },
    { id: 'kids', name: "Kids' Menu", items: kidsMenu },
    { id: 'extras', name: 'Extras', items: extrasMenu },
    { id: 'sides', name: 'Sides', items: sideMenu },
];

const MenuPage = () => {
    const [filterText, setFilterText] = useState('');

    const filteredCategories = categories.map((category) => ({
        ...category,
        items: category.items
            .map((item) => {
                if (item.subItems) {
                    const filteredSubItems = item.subItems.filter((subItem) =>
                        subItem.name.toLowerCase().includes(filterText.toLowerCase())
                    );
                    if (filteredSubItems.length > 0) {
                        return { ...item, subItems: filteredSubItems };
                    }
                }
                if (item.name.toLowerCase().includes(filterText.toLowerCase())) {
                    return item;
                }
                return null;
            })
            .filter(Boolean),
    }));

    return (
        <div className="menu-page">
            <PageHero
                title="Our Menu"
                subtitle="Fresh ingredients, prepared with care. All-day breakfast available."
            />
            <CategoryNavigation
                categories={categories}
                filterText={filterText}
                setFilterText={setFilterText}
            />
            <div className="menu-categories">
                {filteredCategories.map((category) => (
                    <CategorySection key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
};

export default MenuPage;

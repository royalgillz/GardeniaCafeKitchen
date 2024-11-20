import React, { useState } from 'react';
import CategorySection from './CategorySection';
import FilterBar from './FilterBar';
import HighlightedPhoto from './HighlightedPhoto';
import CategoryNavigation from './CategoryNavigation';
import { breakfastMenu, lunchMenu, kidsMenu, freshSaladsMenu, extrasMenu, sideMenu } from '../../assets/menuData';

const MenuPage = () => {
    const [filterText, setFilterText] = useState('');
    const categories = [
        { id: 'breakfast', name: 'Breakfast Menu', items: breakfastMenu },
        { id: 'lunch', name: 'Lunch Menu', items: lunchMenu },
        // { id: 'eggs', name: 'Egg Benedict', items: eggBenedictMenu },
        { id: 'salads', name: 'Fresh Salads', items: freshSaladsMenu },
        { id: 'kids', name: 'Kids\' Menu', items: kidsMenu },
        { id: 'extras', name: 'Extras', items: extrasMenu },
        { id: '', name: 'Sides', items: sideMenu },
        // { id: 'sandwiches', name: 'Sandwiches & Wraps', items: sandwichesMenu },
    ];

    const filteredCategories = categories.map(category => ({
        ...category,
        items: category.items.filter(item =>
            item.name.toLowerCase().includes(filterText.toLowerCase())
        ),
    }));

    return (
        <div className="menu-page">
            <HighlightedPhoto />
            <CategoryNavigation categories={categories} />
            <FilterBar filterText={filterText} setFilterText={setFilterText} />
            <div className="menu-categories">
                {filteredCategories.map(category => (
                    <CategorySection key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
};

export default MenuPage;

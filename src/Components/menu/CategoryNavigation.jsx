import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import FilterBar from './FilterBar';

const CategoryNavigation = ({ categories, filterText, setFilterText }) => {
    const [offset, setOffset] = useState(-235); // Default offset for larger screens

    useEffect(() => {
        const updateOffset = () => {
            // Set different offsets based on screen width
            // setOffset(window.innerWidth <= 380 ? -287 : window.innerWidth <= 429 ? -269 : window.innerWidth <= 768 ? -241 : window.innerWidth <= 768 ? -269 : -239);
            // setOffset(window.innerWidth <= 429 ? -269 : window.innerWidth <= 768 ? -269 : window.innerWidth <= 768 ? -269 : -239);

            // cafekitchenlogo.png - green background removed
            setOffset(window.innerWidth <= 359 ? -287 : window.innerWidth <= 380 ? -259 : window.innerWidth <= 768 ? -241 : -239);
        };

        // Initial check
        updateOffset();

        // Add event listener to handle window resize
        window.addEventListener('resize', updateOffset);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateOffset);
        };
    }, []);

    return (
        <div className="category-navigation">
            <h3>Menu Categories</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link
                            to={category.id} // Target category ID
                            // smooth={true} // Enable smooth scrolling
                            offset={offset} // Dynamic offset
                        // duration={500} // Scrolling duration in ms
                        >
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* FilterBar added here */}
            <FilterBar filterText={filterText} setFilterText={setFilterText} />
        </div>
    );
};

export default CategoryNavigation;

import React from 'react';
import { Link } from 'react-scroll'; // Import the library

const CategoryNavigation = ({ categories }) => {
    return (
        <div className="category-navigation">
            <h3>Menu Categories</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link
                            to={category.id} // Target category ID
                            // smooth={true} // Enable smooth scrolling
                            offset={-235} // Offset equal to the height of the sticky nav
                        // duration={500} // Scrolling duration in ms
                        >
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryNavigation;

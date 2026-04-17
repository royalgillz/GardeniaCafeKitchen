import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import FilterBar from './FilterBar';

const CategoryNavigation = ({ categories, filterText, setFilterText }) => {
    const [offset, setOffset] = useState(-90);

    useEffect(() => {
        const updateOffset = () => {
            const header = document.querySelector('.header');
            const categoryNav = document.querySelector('.category-navigation');
            const headerHeight = header ? header.offsetHeight : 82;
            const navHeight = categoryNav ? categoryNav.offsetHeight : 0;
            setOffset(-(headerHeight + navHeight + 8));
        };

        updateOffset();
        window.addEventListener('resize', updateOffset);
        return () => window.removeEventListener('resize', updateOffset);
    }, []);

    return (
        <div className="category-navigation">
            <h3>Menu Categories</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link
                            to={category.id}
                            smooth={true}
                            offset={offset}
                            duration={400}
                        >
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <FilterBar filterText={filterText} setFilterText={setFilterText} />
        </div>
    );
};

export default CategoryNavigation;

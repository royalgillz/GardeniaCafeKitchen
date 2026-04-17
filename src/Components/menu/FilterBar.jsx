import React from 'react';
import { FaSearch } from 'react-icons/fa';

const FilterBar = ({ filterText, setFilterText }) => {
    return (
        <div className="filter-bar">
            <FaSearch className="filter-icon" aria-hidden="true" />
            <input
                type="search"
                placeholder="Search menu items..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                aria-label="Search menu items"
            />
        </div>
    );
};

export default FilterBar;

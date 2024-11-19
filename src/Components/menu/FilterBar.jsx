import React from 'react';

const FilterBar = ({ filterText, setFilterText }) => {
    return (
        <div className="filter-bar">
            <input
                type="text"
                placeholder="Search menu items..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />
        </div>
    );
};

export default FilterBar;

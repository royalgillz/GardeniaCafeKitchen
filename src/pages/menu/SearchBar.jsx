import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ query, setQuery }) => (
    <div className="filter-bar">
        <FaSearch className="filter-icon" aria-hidden="true" />
        <input
            type="search"
            placeholder="Search menu items..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search menu items"
        />
    </div>
);

export default SearchBar;

import { useState, useMemo } from 'react';
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import MenuSidebar from './MenuSidebar';
import PopularSection from './PopularSection';
import AllItems from './AllItems';
import MenuInfoPanel from './MenuInfoPanel';
import { breakfastMenu, lunchMenu, kidsMenu, freshSaladsMenu, extrasMenu, sideMenu } from '../../data/menu';

const CATEGORIES = [
    { id: 'breakfast', name: 'Breakfast',     icon: '🍳', items: breakfastMenu },
    { id: 'lunch',     name: 'Lunch',          icon: '🥗', items: lunchMenu },
    { id: 'salads',    name: 'Fresh Salads',   icon: '🥬', items: freshSaladsMenu },
    { id: 'kids',      name: "Kids' Menu",     icon: '⭐', items: kidsMenu },
    { id: 'extras',    name: 'Extras',         icon: '➕', items: extrasMenu },
    { id: 'sides',     name: 'Sides',          icon: '🍟', items: sideMenu },
];

const EMOJI_MAP = {
    'The Big Breakfast':          '🍳',
    'Eggs Benedict':              '🥚',
    'Bruschetta with Poached Egg':'🍅',
};

const MenuPage = () => {
    const [activeCat, setActiveCat] = useState('breakfast');
    const [query, setQuery]         = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const activeCategory = CATEGORIES.find((c) => c.id === activeCat);

    const popularItems = useMemo(
        () => activeCategory.items
            .filter((i) => i.popular)
            .map((i) => ({ ...i, emoji: EMOJI_MAP[i.name] || '🍽️' })),
        [activeCategory]
    );

    const filteredItems = useMemo(() => {
        if (!query) return activeCategory.items;
        const q = query.toLowerCase();
        return activeCategory.items.filter(
            (item) =>
                item.name.toLowerCase().includes(q) ||
                (item.description && item.description.toLowerCase().includes(q)) ||
                (item.subItems && item.subItems.some((s) => s.name.toLowerCase().includes(q)))
        );
    }, [activeCategory, query]);

    const handleSelect = (id) => {
        setActiveCat(id);
        setQuery('');
        setSidebarOpen(false);
    };

    return (
        <div className="menu-app">
            <MenuSidebar
                categories={CATEGORIES}
                activeCat={activeCat}
                onSelect={handleSelect}
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <div className="menu-main">
                {/* Sticky topbar */}
                <div className="menu-topbar">
                    <button
                        className="menu-topbar-toggle"
                        onClick={() => setSidebarOpen(true)}
                        aria-label="Open categories"
                    >
                        <FaBars /> <span>Categories</span>
                    </button>

                    <div className="menu-search-wrap">
                        <FaSearch className="menu-search-icon" aria-hidden="true" />
                        <input
                            type="text"
                            placeholder={`Search ${activeCategory.name}...`}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            aria-label="Search menu items"
                        />
                        {query && (
                            <button
                                className="menu-search-clear"
                                onClick={() => setQuery('')}
                                aria-label="Clear search"
                            >
                                <FaTimes />
                            </button>
                        )}
                    </div>
                </div>

                {/* Main body */}
                <div className="menu-body">
                    <div className="menu-content-area">
                        {/* Category chip row */}
                        <div className="menu-cat-chips" role="tablist" aria-label="Menu categories">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    role="tab"
                                    aria-selected={activeCat === cat.id}
                                    className={`menu-cat-chip${activeCat === cat.id ? ' active' : ''}`}
                                    onClick={() => handleSelect(cat.id)}
                                >
                                    <span className="menu-cat-chip-icon" aria-hidden="true">{cat.icon}</span>
                                    <span className="menu-cat-chip-name">{cat.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* Popular cards — only when no search active */}
                        {!query && <PopularSection items={popularItems} />}

                        {/* Full item list */}
                        <AllItems
                            category={activeCategory}
                            items={filteredItems}
                            query={query}
                        />
                    </div>

                    <MenuInfoPanel />
                </div>
            </div>
        </div>
    );
};

export default MenuPage;

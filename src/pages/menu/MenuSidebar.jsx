const MenuSidebar = ({ categories, activeCat, onSelect, isOpen, onClose }) => (
    <>
        {isOpen && <div className="menu-sidebar-overlay" onClick={onClose} aria-hidden="true" />}
        <aside className={`menu-sidebar${isOpen ? ' open' : ''}`}>
            <div className="menu-sidebar-top">
                <div className="menu-sidebar-brand">
                    <span className="menu-sidebar-leaf">🌿</span>
                    <div>
                        <div className="menu-sidebar-heading">Our Menu</div>
                        <div className="menu-sidebar-sub">Mon–Sat · 8AM–2PM</div>
                    </div>
                </div>
                <button className="menu-sidebar-close" onClick={onClose} aria-label="Close menu">✕</button>
            </div>

            <p className="menu-sidebar-label">Categories</p>
            <nav>
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        className={`menu-sidebar-item${activeCat === cat.id ? ' active' : ''}`}
                        onClick={() => onSelect(cat.id)}
                    >
                        <span className="menu-sidebar-item-icon">{cat.icon}</span>
                        <span className="menu-sidebar-item-name">{cat.name}</span>
                        <span className="menu-sidebar-item-count">{cat.items.length}</span>
                    </button>
                ))}
            </nav>

            <div className="menu-sidebar-footer">
                <div className="menu-sidebar-hours">
                    <span>🕐</span> Mon–Sat: 8AM–2PM
                </div>
            </div>
        </aside>
    </>
);

export default MenuSidebar;

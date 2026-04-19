import { FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';

const DIETARY = ['🌱 Vegetarian', '🌿 Vegan', 'GF Friendly', '🥩 Meat', '🐟 Seafood', '🥛 Dairy'];

const MenuInfoPanel = () => (
    <aside className="menu-info-panel">
        <div className="menu-panel-card">
            <h3>Cafe Info</h3>
            <div className="menu-panel-row">
                <FaMapMarkerAlt className="menu-panel-icon" />
                <div>
                    <strong>Shop 12/1244 Marmion Ave</strong><br />
                    Currambine WA 6028
                </div>
            </div>
            <div className="menu-panel-row">
                <FaClock className="menu-panel-icon" />
                <div>
                    <strong>Mon–Sat:</strong> 8:00 AM–2:00 PM<br />
                    Closed Sundays
                </div>
            </div>
            <div className="menu-panel-row">
                <FaPhone className="menu-panel-icon" />
                <a href="tel:+61894078749">+61 8 9407 8749</a>
            </div>
        </div>

        <div className="menu-panel-card">
            <h3>Dietary Options</h3>
            <p className="menu-panel-note">We cater to all needs. Just ask our staff.</p>
            <div className="menu-dietary-tags">
                {DIETARY.map((tag) => (
                    <span key={tag} className="menu-dietary-tag">{tag}</span>
                ))}
            </div>
        </div>

        <div className="menu-panel-card menu-panel-card--cta">
            <p>Walk-ins welcome. No reservations needed.</p>
            <a href="#/contact-us" className="menu-panel-link">Get Directions →</a>
        </div>
    </aside>
);

export default MenuInfoPanel;

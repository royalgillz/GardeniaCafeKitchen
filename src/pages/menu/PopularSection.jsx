const PopularSection = ({ items }) => {
    if (!items.length) return null;

    const getPrice = (item) => {
        if (item.subItems) {
            const min = Math.min(...item.subItems.map((s) => s.price));
            return `from $${min.toFixed(2)}`;
        }
        return `$${item.price.toFixed(2)}`;
    };

    return (
        <section className="menu-popular">
            <div className="menu-section-hd">
                <h2>Popular Dishes</h2>
                <p>Our most-loved plates from the kitchen</p>
            </div>
            <div className="menu-popular-grid">
                {items.map((item, i) => (
                    <div key={i} className="menu-popular-card">
                        <div className="menu-popular-card-img">
                            <span>{item.emoji}</span>
                        </div>
                        <div className="menu-popular-card-body">
                            <span className="menu-popular-badge">Popular</span>
                            <h3>{item.name}</h3>
                            {item.description && <p>{item.description}</p>}
                            <div className="menu-popular-price">{getPrice(item)}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularSection;

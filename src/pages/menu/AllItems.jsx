const AllItems = ({ category, items, query }) => {
    if (!items.length) {
        return (
            <div className="menu-empty">
                <span>🔍</span>
                <p>No items found{query ? ` for "${query}"` : ''}.</p>
            </div>
        );
    }

    return (
        <section className="menu-all-items">
            <div className="menu-section-hd">
                <h2>{category.name}</h2>
                <span className="menu-cat-count">{items.length} items</span>
            </div>
            <div className="menu-items-list">
                {items.map((item, i) => (
                    <div key={i} className={`menu-item-row${item.subItems ? ' menu-item-row--group' : ''}`}>
                        {item.subItems ? (
                            <>
                                <div className="menu-item-row-top">
                                    <div className="menu-item-row-info">
                                        <div className="menu-item-row-name-wrap">
                                            <h3>{item.name}</h3>
                                            {item.popular && <span className="menu-badge-popular">Popular</span>}
                                        </div>
                                        {item.description && <p>{item.description}</p>}
                                    </div>
                                </div>
                                <ul className="menu-sub-list">
                                    {item.subItems.map((sub, j) => (
                                        <li key={j} className="menu-sub-row">
                                            <div>
                                                <span className="menu-sub-name">{sub.name}</span>
                                                {sub.description && <span className="menu-sub-desc">{sub.description}</span>}
                                            </div>
                                            <span className="menu-item-price">${sub.price.toFixed(2)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <>
                                <div className="menu-item-row-info">
                                    <div className="menu-item-row-name-wrap">
                                        <h3>{item.name}</h3>
                                        {item.popular && <span className="menu-badge-popular">Popular</span>}
                                    </div>
                                    {item.description && <p>{item.description}</p>}
                                </div>
                                <span className="menu-item-price">${item.price.toFixed(2)}</span>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllItems;

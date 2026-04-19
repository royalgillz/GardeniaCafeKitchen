
const MenuItem = ({ item }) => {
    if (item.subItems) {
        return (
            <div className="menu-item menu-item--group">
                <div className="menu-item-header">
                    <div className="menu-item-title-row">
                        <h3>{item.name}</h3>
                        {item.popular && <span className="badge badge--popular">Popular</span>}
                    </div>
                    {item.description && <p className="menu-item-desc">{item.description}</p>}
                </div>
                <ul className="sub-items">
                    {item.subItems.map((sub) => (
                        <li key={sub.name} className="sub-item">
                            <div className="sub-item-info">
                                <span className="sub-item-name">{sub.name}</span>
                                {sub.description && <span className="sub-item-desc">{sub.description}</span>}
                            </div>
                            <span className="menu-price">${sub.price.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <div className="menu-item">
            <div className="menu-item-info">
                <div className="menu-item-title-row">
                    <h3>{item.name}</h3>
                    {item.popular && <span className="badge badge--popular">Popular</span>}
                </div>
                {item.description && <p className="menu-item-desc">{item.description}</p>}
            </div>
            <span className="menu-price">${item.price.toFixed(2)}</span>
        </div>
    );
};

export default MenuItem;

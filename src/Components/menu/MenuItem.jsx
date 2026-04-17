import React from 'react';

const MenuItem = ({ item }) => {
    if (item.subItems) {
        return (
            <div className="menu-item menu-item--group">
                <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    {item.description && <p className="menu-item-desc">{item.description}</p>}
                </div>
                <ul className="sub-items">
                    {item.subItems.map((subItem) => (
                        <li key={subItem.name} className="sub-item">
                            <div className="sub-item-info">
                                <span className="sub-item-name">{subItem.name}</span>
                                {subItem.description && (
                                    <span className="sub-item-desc">{subItem.description}</span>
                                )}
                            </div>
                            <span className="menu-price">${subItem.price.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <div className="menu-item">
            <div className="menu-item-info">
                <h3>{item.name}</h3>
                {item.description && <p className="menu-item-desc">{item.description}</p>}
            </div>
            <span className="menu-price">${item.price.toFixed(2)}</span>
        </div>
    );
};

export default MenuItem;

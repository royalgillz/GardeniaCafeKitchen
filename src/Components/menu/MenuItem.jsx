import React from 'react';

const MenuItem = ({ item }) => {
    return (
        <div className="menu-item">
            <div>
                <h3>{item.name}</h3>
                {item.description && <p>{item.description}</p>}
            </div>
            {!item.subItems && <span className="price">${item.price.toFixed(2)}</span>}
            {item.subItems && (
                <ul className="sub-items">
                    {item.subItems.map((subItem) => (
                        <li key={subItem.name} className="sub-item">
                            <span>{subItem.name}</span>
                            <span className="price">${subItem.price.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MenuItem;

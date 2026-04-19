import MenuItem from './MenuItem';

const CategorySection = ({ category }) => {
    return (
        <div id={category.id} className="category-section">
            <h2>{category.name}</h2>
            <div className="menu-items">
                {category.items.map((item) => (
                    <MenuItem key={item.name} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CategorySection;

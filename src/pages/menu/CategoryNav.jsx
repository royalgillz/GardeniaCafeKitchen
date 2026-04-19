import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import SearchBar from './SearchBar';

const CategoryNav = ({ categories, query, setQuery }) => {
    const [offset, setOffset] = useState(-90);

    useEffect(() => {
        const update = () => {
            const header = document.querySelector('.header');
            const nav = document.querySelector('.category-navigation');
            const headerH = header ? header.offsetHeight : 70;
            const navH = nav ? nav.offsetHeight : 0;
            setOffset(-(headerH + navH + 8));
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    return (
        <div className="category-navigation">
            <ul>
                {categories.map((cat) => (
                    <li key={cat.id}>
                        <Link to={cat.id} smooth offset={offset} duration={400}>
                            {cat.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <SearchBar query={query} setQuery={setQuery} />
        </div>
    );
};

export default CategoryNav;

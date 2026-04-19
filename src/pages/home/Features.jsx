import { FaLeaf, FaSeedling, FaCoffee, FaSun, FaHeart } from 'react-icons/fa';
import SectionHeader from '../../Components/ui/SectionHeader';

const ICON_MAP = {
    leaf: FaLeaf,
    seedling: FaSeedling,
    coffee: FaCoffee,
    sun: FaSun,
    heart: FaHeart,
};

const Features = ({ features }) => (
    <section className="highlights">
        <SectionHeader
            title="Why Choose Us?"
            subtitle="Everything we do is rooted in quality, community, and genuine care."
        />
        <ul className="highlights-list">
            {features.map(({ icon, text }, i) => {
                const Icon = ICON_MAP[icon] || FaHeart;
                return (
                    <li key={i} className="highlight-card">
                        <span className="highlight-icon" aria-hidden="true"><Icon /></span>
                        <span className="highlight-text">{text}</span>
                    </li>
                );
            })}
        </ul>
    </section>
);

export default Features;

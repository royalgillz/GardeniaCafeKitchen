import SectionHeader from '../../Components/ui/SectionHeader';
import Button from '../../Components/ui/Button';

const FeaturedDishes = ({ dishes }) => (
    <section className="featured-dishes">
        <SectionHeader
            title="Our Popular Dishes"
            subtitle="Fresh ingredients, prepared with care every morning."
        />
        <div className="dish-cards">
            {dishes.map((dish, i) => (
                <div key={i} className="dish-card">
                    <div className="dish-card-img">
                        <img src={dish.image} alt={dish.name} />
                    </div>
                    <div className="dish-card-body">
                        <h3>{dish.name}</h3>
                        <p>{dish.description}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="featured-cta">
            <Button to="/menu" variant="primary" size="lg">See Full Menu</Button>
        </div>
    </section>
);

export default FeaturedDishes;

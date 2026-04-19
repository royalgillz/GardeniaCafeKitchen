import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from 'react-icons/fa';
import SectionHeader from '../../Components/ui/SectionHeader';

const StarRating = ({ rating }) => (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((n) => {
            if (rating >= n) return <FaStar key={n} />;
            if (rating >= n - 0.5) return <FaStarHalfAlt key={n} />;
            return <FaRegStar key={n} />;
        })}
    </div>
);

const Testimonials = ({ reviews }) => (
    <section className="testimonials">
        <SectionHeader
            title="What Our Guests Say"
            subtitle="A warm welcome, every single time."
        />
        <div className="testimonials-grid">
            {reviews.map((review, i) => (
                <div key={i} className="testimonial-card">
                    <FaQuoteLeft className="testimonial-quote-icon" aria-hidden="true" />
                    <p className="testimonial-text">{review.text}</p>
                    <StarRating rating={review.rating} />
                    <p className="testimonial-name">{review.name}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Testimonials;

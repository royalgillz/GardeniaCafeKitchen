import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';

const StarRating = ({ rating }) => {
    return (
        <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((n) => {
                if (rating >= n) return <FaStar key={n} />;
                if (rating >= n - 0.5) return <FaStarHalfAlt key={n} />;
                return <FaRegStar key={n} />;
            })}
        </div>
    );
};

const Testimonials = ({ reviews }) => {
    return (
        <section className="testimonials">
            <SectionHeader
                title="What Our Guests Say"
                subtitle="Real reviews from our wonderful community."
            />
            <div className="testimonials-grid">
                {reviews.map((review, index) => (
                    <div key={index} className="testimonial-card">
                        <FaQuoteLeft className="testimonial-quote-icon" aria-hidden="true" />
                        <p className="testimonial-text">{review.text}</p>
                        <StarRating rating={review.rating} />
                        <p className="testimonial-name">{review.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;

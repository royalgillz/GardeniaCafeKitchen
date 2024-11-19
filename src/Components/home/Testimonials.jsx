import React from 'react';

const Testimonials = ({ reviews }) => {
    return (
        <div className="testimonials">
            <h2 className="testimonials-title">What Our Customers Say</h2>
            <div className="testimonials-container">
                {reviews.map((review, index) => (
                    <div key={index} className="testimonial-item">
                        <p className="testimonial-text">"{review.text}"</p>
                        <p className="testimonial-name">- {review.name}</p>
                        <p className="testimonial-rating">Rating: {review.rating}/5</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;

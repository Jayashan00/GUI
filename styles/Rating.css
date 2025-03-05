import React, { useState } from 'react';
import '../styles/Rating.css';

const Rating = ({ onRate }) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onRate({ rating, review });
        setRating(0);
        setReview('');
    };

    return (
        <div className="rating">
            <h3>Rate this Service</h3>
            <form onSubmit={handleSubmit}>
                <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={star <= rating ? 'star-filled' : 'star-empty'}
                            onClick={() => setRating(star)}
                        >
                            ⭐
                        </span>
                    ))}
                </div>
                <textarea
                    placeholder="Write a review..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Rating;
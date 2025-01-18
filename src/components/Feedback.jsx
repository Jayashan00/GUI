import React from 'react';
import '../styles/Feedback.css';
import feedbackBg from '../assets/feedback-bg.jpg'; // Import image

const Feedback = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${feedbackBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
            }}
        >
            <h1>Feedback</h1>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Feedback" rows="5" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Feedback;

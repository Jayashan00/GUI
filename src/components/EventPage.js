import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EventPage.css';

// Import local images
import weddingImage from '../assets/wedding1.jpg';
import funeralImage from '../assets/funeral1.jpg';
import getTogetherImage from '../assets/get_together.jpg';
import agmImage from '../assets/agms1.jpg';

const categoryImages = {
    Wedding: weddingImage,
    Funeral: funeralImage,
    GetTogether: getTogetherImage,
    AGM: agmImage,
};

const EventsPage = () => {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/api/events')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setEvents(data))
            .catch((error) => console.error('Error fetching events:', error));
    }, []);

    const handleEventClick = (id) => {
        navigate(`/event/${id}`);
    };

    const filteredEvents = events.filter((event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="events-page">
            <div className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to Our Events</h1>
                    <p>Discover the most memorable experiences curated just for you.</p>
                </div>
            </div>

            <div className="search-bar">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="events-container">
                {filteredEvents.map((event) => (
                    <div key={event.id} className="event-card">
                        <span className="event-badge">{event.category}</span>
                        <img
                            src={categoryImages[event.category] || 'https://via.placeholder.com/300'}
                            alt={event.title}
                            className="event-image"
                        />
                        <h2 className="event-title">{event.title}</h2>
                        <p className="event-description">{event.description}</p>
                        <button
                            onClick={() => handleEventClick(event.id)}
                            className="event-btn"
                        >
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsPage;

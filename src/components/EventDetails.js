import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/EventDetails.css';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/event/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setEvent(data))
            .catch((error) => console.error('Error fetching event details:', error));
    }, [id]);

    if (!event) return <div>Loading...</div>;

    return (
        <div className="event-details">
            <h1>{event.title}</h1>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Guests:</strong> {event.num_guest}</p>
        </div>
    );
};

export default EventDetails;

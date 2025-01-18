import React from 'react';
import '../styles/EventCard.css';

const EventCard = ({ event }) => (
  <div className="event-card">
    <img src={event.img} alt={event.title} />
    <div className="event-details">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <button>Explore</button>
    </div>
  </div>
);

export default EventCard;

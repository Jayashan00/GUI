import React from 'react';
import '../styles/EventList.css';
import EventCard from './EventCard';
import WeddingImage from '../assets/Wedding.jpg';
import FuneralImage from '../assets/Funeral.jpg';
import GetTogetherImage from '../assets/Get-Together.jpg';
import AGMImage from '../assets/AGM.jpg';

const events = [
  {
    id: 1,
    title: 'Weddings',
    description: 'Plan the perfect wedding with venues, cakes, and more.',
    img: WeddingImage,
  },
  {
    id: 2,
    title: 'Funerals',
    description: 'Organize respectful funeral services with ease.',
    img: FuneralImage,
  },
  {
    id: 3,
    title: 'Get-Togethers',
    description: 'Manage parties and reunions with simplicity.',
    img: GetTogetherImage,
  },
  {
    id: 4,
    title: 'Annual General Meetings',
    description: 'Organize professional corporate meetings efficiently.',
    img: AGMImage,
  },
];

const EventList = () => (
  <section className="event-list">
    <h2>Explore Events</h2>
    <div className="event-cards">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  </section>
);

export default EventList;

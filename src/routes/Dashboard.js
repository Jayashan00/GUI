// src/routes/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar'; // Import Sidebar
import Header from '../components/Header'; // Import Header
import '../styles/Dashboard.css'; // Import styles

// Sample Recent Events Data
const recentEvents = [
    {
        id: 1,
        title: 'Corporate Meeting',
        date: 'Jan 10, 2025',
        time: '10:00 AM - 12:00 PM',
        venue: 'Grand Conference Hall, Colombo',
        image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?w=300&h=200&fit=crop',


    },
    {
        id: 2,
        title: 'Wedding Ceremony',
        date: 'Jan 8, 2025',
        time: '5:00 PM - 10:00 PM',
        venue: 'Sunset Hall, Kandy',
        image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?w=300&h=200&fit=crop',
        
    },
    {
        id: 3,
        title: 'College Get-Together',
        date: 'Jan 5, 2025',
        time: '3:00 PM - 7:00 PM',
        venue: 'Cafe 90, Matale',
        image: 'https://images.pexels.com/photos/8199708/pexels-photo-8199708.jpeg?w=300&h=200&fit=crop',

    },
];

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar /> {/* Sidebar */}
            <div className="dashboard-content">
                <div className="dashboard-header">
                    <Header /> {/* Header */}
                </div>
                <div className="dashboard-main-content">
                    <h1>Welcome to Your Dashboard</h1>
                    <p>Manage your events, attendees, feedback, and settings here.</p>

                    {/* Recent Events Section */}
                    <div className="recent-events">
                        <h2>Recent Events</h2>
                        <div className="events-grid">
                            {recentEvents.map((event) => (
                                <div key={event.id} className="event-card">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="event-image"
                                    />
                                    <div className="event-details">
                                        <h3>{event.title}</h3>
                                        <p>
                                            <strong>Date:</strong> {event.date}
                                        </p>
                                        <p>
                                            <strong>Time:</strong> {event.time}
                                        </p>
                                        <p>
                                            <strong>Venue:</strong> {event.venue}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // For routing
import '../styles/Sidebar.css';           // Sidebar styling

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>EventEase</h2>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/attendees">Attendees</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;

// src/components/Header.jsx
import React from 'react';
import '../styles/Header.css';  // Header styling

const Header = () => {
    return (
        <nav className="header">
            <div className="logo">EventEase</div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/eventPage">Events</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                
            </ul>
        </nav>
    );
};

export default Header;

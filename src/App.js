import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import EventList from './components/EventList';
import EventPage from './components/EventPage';  // EventPage Component
import Dashboard from './routes/Dashboard';
import Footer from './components/Footer'; 
import EventDetails from './components/EventDetails'; 
import Attendees from './components/Attendees';
import Feedback from './components/Feedback';
import Settings from './components/Settings';
import './styles/App.css';

const App = () => (
    <Router>
        <Routes>
            {/* Home and Authentication Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Events Pages */}
            <Route path="/events" element={<EventList />} />
             <Route path="/event/:id" element={<EventDetails />} />



            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/eventPage" element={<EventPage />} />
            <Route path="/attendees" element={<Attendees />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
    </Router>
);

export default App;

import React from 'react';
import Header from '../components/Header';
import EventList from '../components/EventList';
import '../styles/HomePage.css';
import BannerImage from '../assets/banner.jpg';


const HomePage = () => (
    <>
        <Header />
        <section className="banner-section">
            <img src={BannerImage} alt="Homepage Banner" className="banner-image" />
        </section>
        <EventList />
        
    </>
);

export default HomePage;

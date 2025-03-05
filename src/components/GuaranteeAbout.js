import React, { useRef } from 'react';
import '../styles/GuaranteeAbout.css';
import wedding1 from '../assets/wedding1.jpg';
import funeral1 from '../assets/funeral1.jpg';
import getTogether from '../assets/get_together.jpg';
import agms1 from '../assets/agms1.jpg';

const GuaranteeAbout = () => {
    const bottomSectionRef = useRef(null); // Reference to the bottom section

    const scrollToBottom = () => {
        bottomSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="guarantee-about-page"> {/* Unique class name */}
            {/* Hero Section */}
            <div className="ga-hero-section" style={{ backgroundImage: `url(${wedding1})` }}>
                <div className="ga-hero-content">
                    <h1>Welcome to EventEase</h1>
                    <p>Your trusted partner in creating unforgettable events.</p>
                    <button className="ga-cta-button" onClick={scrollToBottom}>
                        Learn More
                    </button>
                </div>
            </div>

            {/* Guarantee Section */}
            <div className="ga-section ga-guarantee-section">
                <h2>Our Guarantee</h2>
                <p>
                    At EventEase, we guarantee the highest level of professionalism, creativity, and attention to detail. 
                    Whether it's a wedding, funeral, get-together, or AGM, we ensure your event is seamless and memorable.
                </p>
            </div>

            {/* About Us Section */}
            <div className="ga-section ga-about-section">
                <h2>About Us</h2>
                <p>
                    EventEase is a premier event management company dedicated to making your special occasions truly special. 
                    With years of experience, our team of experts will handle every detail, so you can focus on enjoying your event.
                </p>
            </div>

            {/* Events Section */}
            <div className="ga-section ga-events-section" ref={bottomSectionRef}> {/* Scroll target */}
                <h2>Our Events</h2>
                <div className="ga-event-grid">
                    <div className="ga-event-card" style={{ backgroundImage: `url(${wedding1})` }}>
                        <div className="ga-event-content">
                            <h3>Weddings</h3>
                            <p>Create the wedding of your dreams with our expert planning and coordination.</p>
                        </div>
                    </div>
                    <div className="ga-event-card" style={{ backgroundImage: `url(${funeral1})` }}>
                        <div className="ga-event-content">
                            <h3>Funerals</h3>
                            <p>Honor your loved ones with a dignified and well-organized funeral service.</p>
                        </div>
                    </div>
                    <div className="ga-event-card" style={{ backgroundImage: `url(${getTogether})` }}>
                        <div className="ga-event-content">
                            <h3>Get-Togethers</h3>
                            <p>From family reunions to corporate retreats, we make every gathering special.</p>
                        </div>
                    </div>
                    <div className="ga-event-card" style={{ backgroundImage: `url(${agms1})` }}>
                        <div className="ga-event-content">
                            <h3>AGMs</h3>
                            <p>Professional and seamless Annual General Meetings tailored to your needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuaranteeAbout;

import React from 'react';
import ServiceCard from './ServiceCard';
import '../styles/ServiceList.css';

const ServiceList = ({ services, onAddToCart }) => {
    return (
        <div className="service-list">
            <h2>Recommended Services</h2>
            <div className="services-grid">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} onAddToCart={onAddToCart} />
                ))}
            </div>
        </div>
    );
};

export default ServiceList;
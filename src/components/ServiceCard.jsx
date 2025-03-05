import React from 'react';
import '../styles/ServiceCard.css';

const ServiceCard = ({ service, onAddToCart }) => {
    const { id, name, image, rating, price, description } = service;

    return (
        <div className="service-card">
            <img src={image} alt={name} className="service-image" />
            <div className="service-details">
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="service-rating">
                    <span>⭐ {rating}</span>
                </div>
                <div className="service-price">
                    <span>${price}</span>
                </div>
                <button onClick={() => onAddToCart(service)} className="add-to-cart-btn">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
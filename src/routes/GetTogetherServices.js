import React, { useState } from 'react';
import ServiceList from '../components/ServiceList';
import Cart from '../components/Cart';
import '../styles/GetTogetherServices.css';

const GetTogetherServices = () => {
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const getTogetherServices = {
        all: [
            {
                id: 1,
                name: 'Party Venue',
                image: 'https://images.pexels.com/photos/9703892/pexels-photo-9703892.jpeg', // Photo by Jonathan Borba
                rating: 4.7,
                price: 1200,
                description: 'Perfect venue for your get-together party.',
                category: 'partyVenues',
            },
            {
                id: 2,
                name: 'Catering Services',
                image: 'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg', // Photo by Zak Chapman
                rating: 4.6,
                price: 400,
                description: 'Delicious food and beverages for your event.',
                category: 'catering',
            },
            {
                id: 3,
                name: 'Outdoor Party Venue',
                image: 'https://images.pexels.com/photos/12031245/pexels-photo-12031245.jpeg', // Photo by Jonathan Borba
                rating: 4.8,
                price: 1500,
                description: 'Beautiful outdoor venue for parties.',
                category: 'partyVenues',
            },
            {
                id: 4,
                name: 'Basic Catering',
                image: 'https://images.pexels.com/photos/30881299/pexels-photo-30881299.jpeg', // Photo by Kal 347
                rating: 4.5,
                price: 300,
                description: 'Simple and affordable catering.',
                category: 'catering',
            },
        ],
        partyVenues: [
            {
                id: 5,
                name: 'Garden Party Venue',
                image: 'https://images.pexels.com/photos/9703892/pexels-photo-9703892.jpeg', // Photo by Jonathan Borba
                rating: 4.8,
                price: 1500,
                description: 'Beautiful garden venue for parties.',
                category: 'partyVenues',
            },
            {
                id: 6,
                name: 'Elegant Boardroom',
                image: 'https://images.pexels.com/photos/2976970/pexels-photo-2976970.jpeg', // Photo by Matheus Natan
                rating: 4.7,
                price: 1300,
                description: 'Perfect for small gatherings.',
                category: 'partyVenues',
            },
            {
                id: 7,
                name: 'Beachside Venue',
                image: 'https://images.pexels.com/photos/13760395/pexels-photo-13760395.jpeg', // Photo by Quang Nguyen Vinh
                rating: 4.7,
                price: 2000,
                description: 'Romantic beachside venue for parties.',
                category: 'partyVenues',
            },
            {
                id: 8,
                name: 'Luxury Banquet Hall',
                image: 'https://images.pexels.com/photos/14620600/pexels-photo-14620600.jpeg', // Photo by Alan Ávila
                rating: 4.9,
                price: 2500,
                description: 'Luxurious venue for grand parties.',
                category: 'partyVenues',
            },
        ],
        catering: [
            {
                id: 9,
                name: 'Buffet Catering',
                image: 'https://images.pexels.com/photos/30811300/pexels-photo-30811300.jpeg', // Photo by Zak Chapman
                rating: 4.7,
                price: 600,
                description: 'Delicious buffet meals for your event.',
                category: 'catering',
            },
            {
                id: 10,
                name: 'Gourmet Catering',
                image: 'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg', // Photo by Zak Chapman
                rating: 4.6,
                price: 500,
                description: 'Affordable gourmet catering.',
                category: 'catering',
            },
            {
                id: 11,
                name: 'Vegan Catering',
                image: 'https://images.pexels.com/photos/23025182/pexels-photo-23025182.jpeg', // Photo by Ali Dashti
                rating: 4.6,
                price: 700,
                description: 'Healthy vegan options for your event.',
                category: 'catering',
            },
            {
                id: 12,
                name: 'Dessert Catering',
                image: 'https://images.pexels.com/photos/30925504/pexels-photo-30925504.jpeg', // Photo by Electra Studio
                rating: 4.8,
                price: 400,
                description: 'Sweet treats for your guests.',
                category: 'catering',
            },
        ],
    };

    const filteredServices = selectedCategory === 'all' ? getTogetherServices.all : getTogetherServices[selectedCategory];

    const handleAddToCart = (service) => {
        setCart([...cart, service]);
    };

    const handleRemoveFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <div className="get-together-services">
            <h1>Get-Together Services</h1>
            <div className="category-tabs">
                <button
                    className={selectedCategory === 'all' ? 'active' : ''}
                    onClick={() => setSelectedCategory('all')}
                >
                    All
                </button>
                <button
                    className={selectedCategory === 'partyVenues' ? 'active' : ''}
                    onClick={() => setSelectedCategory('partyVenues')}
                >
                    Party Venues
                </button>
                <button
                    className={selectedCategory === 'catering' ? 'active' : ''}
                    onClick={() => setSelectedCategory('catering')}
                >
                    Catering
                </button>
            </div>
            <div className="content">
                <div className="service-list">
                    <h2>Recommended Services</h2>
                    <ServiceList services={filteredServices} onAddToCart={handleAddToCart} />
                </div>
                <div className="cart">
                    <h2>Your Cart</h2>
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default GetTogetherServices;
import React, { useState } from 'react';
import ServiceList from '../components/ServiceList';
import Cart from '../components/Cart';
import '../styles/AGMServices.css';

const AGMServices = () => {
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const agmServices = {
        all: [
            {
                id: 1,
                name: 'Conference Hall',
                image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
                rating: 4.8,
                price: 1500,
                description: 'Spacious and well-equipped conference hall.',
                category: 'conferenceHalls',
            },
            {
                id: 2,
                name: 'Catering Services',
                image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                rating: 4.7,
                price: 500,
                description: 'Professional catering for your event.',
                category: 'catering',
            },
            {
                id: 3,
                name: 'Outdoor Conference Venue',
                image: 'https://images.pexels.com/photos/30897180/pexels-photo-30897180.jpeg', // Photo by Leonardo Aquino
                rating: 4.7,
                price: 2000,
                description: 'Beautiful outdoor venue for AGMs.',
                category: 'conferenceHalls',
            },
            {
                id: 4,
                name: 'Basic Catering',
                image: 'https://images.pexels.com/photos/30881299/pexels-photo-30881299.jpeg', // Photo by Kal 347
                rating: 4.5,
                price: 400,
                description: 'Simple and affordable catering.',
                category: 'catering',
            },
        ],
        conferenceHalls: [
            {
                id: 5,
                name: 'Grand Conference Hall',
                image: 'https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg',
                rating: 4.9,
                price: 2000,
                description: 'Luxurious and spacious conference hall.',
                category: 'conferenceHalls',
            },
            {
                id: 6,
                name: 'Elegant Boardroom',
                image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
                rating: 4.8,
                price: 1800,
                description: 'Perfect for small AGMs.',
                category: 'conferenceHalls',
            },
            {
                id: 7,
                name: 'Modern Conference Center',
                image: 'https://images.pexels.com/photos/2976970/pexels-photo-2976970.jpeg', // Photo by Matheus Natan
                rating: 4.7,
                price: 2200,
                description: 'State-of-the-art conference facilities.',
                category: 'conferenceHalls',
            },
            {
                id: 8,
                name: 'Executive Meeting Room',
                image: 'https://images.pexels.com/photos/7648510/pexels-photo-7648510.jpeg', // Photo by RDNE Stock project
                rating: 4.8,
                price: 1900,
                description: 'Ideal for executive meetings.',
                category: 'conferenceHalls',
            },
        ],
        catering: [
            {
                id: 9,
                name: 'Gourmet Catering',
                image: 'https://images.pexels.com/photos/3217157/pexels-photo-3217157.jpeg',
                rating: 4.7,
                price: 600,
                description: 'Delicious gourmet meals for your event.',
                category: 'catering',
            },
            {
                id: 10,
                name: 'Buffet Catering',
                image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                rating: 4.6,
                price: 500,
                description: 'Affordable buffet catering.',
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

    const filteredServices = selectedCategory === 'all' ? agmServices.all : agmServices[selectedCategory];

    const handleAddToCart = (service) => {
        setCart([...cart, service]);
    };

    const handleRemoveFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <div className="agm-services">
            <h1>AGM Services</h1>
            <div className="category-tabs">
                <button
                    className={selectedCategory === 'all' ? 'active' : ''}
                    onClick={() => setSelectedCategory('all')}
                >
                    All
                </button>
                <button
                    className={selectedCategory === 'conferenceHalls' ? 'active' : ''}
                    onClick={() => setSelectedCategory('conferenceHalls')}
                >
                    Conference Halls
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

export default AGMServices;
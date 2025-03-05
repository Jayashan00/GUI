import React, { useState } from 'react';
import ServiceList from '../components/ServiceList';
import Cart from '../components/Cart';
import '../styles/FuneralServices.css';

const FuneralServices = () => {
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const funeralServices = {
        all: [
            {
                id: 1,
                name: 'Funeral Hall',
                image: 'https://images.pexels.com/photos/7317679/pexels-photo-7317679.jpeg', // Photo by Pavel Danilyuk
                rating: 4.7,
                price: 1000,
                description: 'Elegant and serene venue for funeral services.',
                category: 'funeralHalls',
            },
            {
                id: 2,
                name: 'Premium Coffin',
                image: 'https://images.pexels.com/photos/10484356/pexels-photo-10484356.jpeg', // Photo by cottonbro studio
                rating: 4.5,
                price: 800,
                description: 'High-quality coffin for a dignified farewell.',
                category: 'coffins',
            },
            {
                id: 3,
                name: 'Outdoor Funeral Venue',
                image: 'https://images.pexels.com/photos/10485414/pexels-photo-10485414.jpeg', // Photo by cottonbro studio
                rating: 4.6,
                price: 1500,
                description: 'Beautiful outdoor setting for funeral services.',
                category: 'funeralHalls',
            },
            {
                id: 4,
                name: 'Basic Coffin',
                image: 'https://images.pexels.com/photos/7317666/pexels-photo-7317666.jpeg', // Photo by Pavel Danilyuk
                rating: 4.4,
                price: 600,
                description: 'Simple and affordable coffin.',
                category: 'coffins',
            },
        ],
        funeralHalls: [
            {
                id: 5,
                name: 'Serenity Hall',
                image: 'https://images.pexels.com/photos/30811344/pexels-photo-30811344.jpeg', // Photo by TBD Traveller
                rating: 4.8,
                price: 1200,
                description: 'Peaceful and elegant funeral hall.',
                category: 'funeralHalls',
            },
            {
                id: 6,
                name: 'Tranquility Hall',
                image: 'https://images.pexels.com/photos/30815990/pexels-photo-30815990.jpeg', // Photo by mesut istenci
                rating: 4.7,
                price: 1100,
                description: 'A serene venue for funeral services.',
                category: 'funeralHalls',
            },
            {
                id: 7,
                name: 'Garden Funeral Venue',
                image: 'https://images.pexels.com/photos/6841289/pexels-photo-6841289.jpeg', // Photo by RDNE Stock project
                rating: 4.6,
                price: 1300,
                description: 'Beautiful garden setting for funeral services.',
                category: 'funeralHalls',
            },
            {
                id: 8,
                name: 'Chapel Funeral Hall',
                image: 'https://images.pexels.com/photos/15820576/pexels-photo-15820576.jpeg', // Photo by Utopía Records
                rating: 4.7,
                price: 1400,
                description: 'A chapel-style venue for funeral services.',
                category: 'funeralHalls',
            },
        ],
        coffins: [
            {
                id: 9,
                name: 'Classic Wood Coffin',
                image: 'https://images.pexels.com/photos/7317666/pexels-photo-7317666.jpeg', // Photo by Pavel Danilyuk
                rating: 4.6,
                price: 900,
                description: 'Traditional wooden coffin.',
                category: 'coffins',
            },
            {
                id: 10,
                name: 'Elegant Metal Coffin',
                image: 'https://images.pexels.com/photos/10484356/pexels-photo-10484356.jpeg', // Photo by cottonbro studio
                rating: 4.5,
                price: 850,
                description: 'Durable and elegant metal coffin.',
                category: 'coffins',
            },
            {
                id: 11,
                name: 'Luxury Velvet Coffin',
                image: 'https://images.pexels.com/photos/10485642/pexels-photo-10485642.jpeg', // Photo by cottonbro studio
                rating: 4.7,
                price: 1000,
                description: 'Luxurious velvet-lined coffin.',
                category: 'coffins',
            },
            {
                id: 12,
                name: 'Eco-Friendly Coffin',
                image: 'https://images.pexels.com/photos/7317668/pexels-photo-7317668.jpeg', // Photo by Pavel Danilyuk
                rating: 4.6,
                price: 950,
                description: 'Environmentally friendly coffin.',
                category: 'coffins',
            },
        ],
    };

    const filteredServices = selectedCategory === 'all' ? funeralServices.all : funeralServices[selectedCategory];

    const handleAddToCart = (service) => {
        setCart([...cart, service]);
    };

    const handleRemoveFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <div className="funeral-services">
            <h1>Funeral Services</h1>
            <div className="category-tabs">
                <button
                    className={selectedCategory === 'all' ? 'active' : ''}
                    onClick={() => setSelectedCategory('all')}
                >
                    All
                </button>
                <button
                    className={selectedCategory === 'funeralHalls' ? 'active' : ''}
                    onClick={() => setSelectedCategory('funeralHalls')}
                >
                    Funeral Halls
                </button>
                <button
                    className={selectedCategory === 'coffins' ? 'active' : ''}
                    onClick={() => setSelectedCategory('coffins')}
                >
                    Coffins
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

export default FuneralServices;
import React, { useState } from 'react';
import ServiceList from '../components/ServiceList';
import Cart from '../components/Cart';
import '../styles/WeddingServices.css';

const WeddingServices = () => {
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const weddingServices = {
        all: [
            {
                id: 1,
                name: 'Wedding Photographer',
                image: 'https://images.pexels.com/photos/1214566/pexels-photo-1214566.jpeg', // Photo by Hassan OUAJBIR
                rating: 4.8,
                price: 500,
                description: 'Professional wedding photography services.',
                category: 'photographers',
            },
            {
                id: 2,
                name: 'Luxury Wedding Hall',
                image: 'https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg', // Photo by Pixabay
                rating: 4.9,
                price: 2000,
                description: 'Elegant venue for your special day.',
                category: 'weddingHalls',
            },
            {
                id: 3,
                name: 'Wedding Videographer',
                image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg', // Photo by cottonbro studio
                rating: 4.7,
                price: 700,
                description: 'Capture your wedding memories in motion.',
                category: 'photographers',
            },
            {
                id: 4,
                name: 'Outdoor Wedding Venue',
                image: 'https://images.pexels.com/photos/12031245/pexels-photo-12031245.jpeg', // Photo by Jonathan Borba
                rating: 4.8,
                price: 1500,
                description: 'Beautiful outdoor setting for your wedding.',
                category: 'weddingHalls',
            },
        ],
        photographers: [
            {
                id: 5,
                name: 'Top Photographer 1',
                image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg', // Photo by Andre Furtado
                rating: 4.9,
                price: 600,
                description: 'Experienced wedding photographer.',
                category: 'photographers',
            },
            {
                id: 6,
                name: 'Top Photographer 2',
                image: 'https://images.pexels.com/photos/1540977/pexels-photo-1540977.jpeg', // Photo by Suliman Sallehi
                rating: 4.8,
                price: 550,
                description: 'Creative and professional.',
                category: 'photographers',
            },
            {
                id: 7,
                name: 'Candid Photographer',
                image: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg', // Photo by Josh Hild
                rating: 4.7,
                price: 650,
                description: 'Specializes in candid wedding photography.',
                category: 'photographers',
            },
            {
                id: 8,
                name: 'Traditional Photographer',
                image: 'https://images.pexels.com/photos/108148/pexels-photo-108148.jpeg', // Photo by Kaique Rocha
                rating: 4.6,
                price: 500,
                description: 'Classic and timeless wedding photography.',
                category: 'photographers',
            },
        ],
        weddingHalls: [
            {
                id: 9,
                name: 'Grand Wedding Hall',
                image: 'https://images.pexels.com/photos/11981162/pexels-photo-11981162.jpeg', // Photo by Антон Залевський
                rating: 4.9,
                price: 2500,
                description: 'Spacious and luxurious venue.',
                category: 'weddingHalls',
                location: { lat: 37.7749, lng: -122.4194 }, 
            },
            {
                id: 10,
                name: 'Royal Banquet Hall',
                image: 'https://images.pexels.com/photos/30311728/pexels-photo-30311728.jpeg', // Photo by Huy Nguyễn
                rating: 4.8,
                price: 2200,
                description: 'Perfect for large weddings.',
                category: 'weddingHalls',
                location: { lat: 34.0522, lng: -118.2437 }, 

            },
            {
                id: 11,
                name: 'Beachside Venue',
                image: 'https://images.pexels.com/photos/29703684/pexels-photo-29703684.jpeg', // Photo by Valerie
                rating: 4.7,
                price: 3000,
                description: 'Romantic beachside wedding venue.',
                category: 'weddingHalls',
            },
            {
                id: 12,
                name: 'Garden Wedding Venue',
                image: 'https://images.pexels.com/photos/4717526/pexels-photo-4717526.jpeg', // Photo by Denys Gromov
                rating: 4.8,
                price: 1800,
                description: 'Beautiful garden setting for your wedding.',
                category: 'weddingHalls',
            },
        ],
    };

    const filteredServices = selectedCategory === 'all' ? weddingServices.all : weddingServices[selectedCategory];

    const handleAddToCart = (service) => {
        setCart([...cart, service]);
    };

    const handleRemoveFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <div className="wedding-services">
            <h1>Wedding Services</h1>
            <div className="category-tabs">
                <button
                    className={selectedCategory === 'all' ? 'active' : ''}
                    onClick={() => setSelectedCategory('all')}
                >
                    All
                </button>
                <button
                    className={selectedCategory === 'photographers' ? 'active' : ''}
                    onClick={() => setSelectedCategory('photographers')}
                >
                    Photographers
                </button>
                <button
                    className={selectedCategory === 'weddingHalls' ? 'active' : ''}
                    onClick={() => setSelectedCategory('weddingHalls')}
                >
                    Wedding Halls
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

export default WeddingServices;
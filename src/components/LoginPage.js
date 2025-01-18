import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

import background from '../assets/background.jpg';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        
        // Validation or API call for login
        if (email && password) {
            // Redirect to the homepage after successful login
            navigate('/');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="login-page" style={{ backgroundImage: `url(${background})` }}>
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="button-container">
                        <button type="submit" className="login-button">Login</button>
                        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

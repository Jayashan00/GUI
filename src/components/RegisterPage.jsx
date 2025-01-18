import React from 'react';
import '../styles/RegisterPage.css';

const Register = () => {
    return (
        <div className="register-page">
            <div className="register-container">
                <h1>Register</h1>
                <form>
                    <input type="text" className="full-name" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;

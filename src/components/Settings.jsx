import React from 'react';
import '../styles/Settings.css';

const Settings = () => {
    return (
        <div className="settings-container">
            <h1>Settings</h1>
            <div className="settings-group">
                <label>Profile Picture</label>
                <img
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg" // Updated image source
                    alt="Profile"
                    style={{
                        display: 'block',
                        margin: '10px auto',
                        borderRadius: '50%',
                        width: '60px', // Set fixed width
                        height: '60px', // Set fixed height
                        objectFit: 'cover', // Ensure image covers the circle without distortion
                    
                    }}
                />
                <button>Change Picture</button>
            </div>
            <div className="settings-group">
                <label>Username</label>
                <input type="text" placeholder="Enter your username" />
            </div>
            <div className="settings-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
            </div>
            <div className="settings-group">
                <button>Save Changes</button>
            </div>
        </div>
    );
};

export default Settings;

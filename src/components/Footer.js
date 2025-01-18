import React from 'react';
import '../styles/Footer.css'; // Import a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} EventEase. All rights reserved.</p>
        <p>Powered by EventEase</p>
      </div>
    </footer>
  );
};

export default Footer;

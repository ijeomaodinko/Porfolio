// Footer.js
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/path/to/your/logo.png" alt="Your Logo" />
          <span>Your Name</span>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contacts">Stacks</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
      <div className="footer-contact">
        <p>Email: yourname@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        {/* Add any other contact information you want to display */}
      </div>
      <div className="footer-social">
        {/* Add social media icons or links here */}
        <a href="https://www.linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/twitter-icon.png" alt="Twitter" />
        </a>
        {/* Add more social media icons as needed */}
      </div>
    </footer>
  );
};

export default Footer;

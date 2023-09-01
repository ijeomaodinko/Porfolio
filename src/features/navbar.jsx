import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/your/logo.png" alt="Your Logo" />
        <span>Your Name</span>
      </div>
      <div className="navbar-items">
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contacts" smooth={true} duration={500}>Contacts</Link>
      </div>
    </nav>
  );
};

export default Navbar;

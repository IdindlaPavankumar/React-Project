import React, { useState } from 'react';
import logo from "../../src/assets/img/logo.png"
import '../../src/style/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href='#Home' onClick={() => setIsOpen(false)}>Home</a>
          <a href="#doctors" onClick={() => setIsOpen(false)}>Doctors</a>
          <a href="#appointment" onClick={() => setIsOpen(false)}>Book Appointment</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <Link to="/login">
            <button className="btn btn-primary login-btn">Login</button>
          </Link>
        </div>

      </div>
    </nav >
  );
};

export default Navbar;
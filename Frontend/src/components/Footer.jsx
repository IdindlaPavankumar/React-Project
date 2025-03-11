import React from 'react';
import '../../src/style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">Medi Sync</div>
        <p>Your trusted healthcare partner for a healthier life.</p>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#doctors">Doctors</a>
          <a href="#appointment">Book Appointment</a>
          <a href="#contact">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="social-links">
          <a href="#" className="social-icon">f</a>
          <a href="#" className="social-icon">t</a>
          <a href="#" className="social-icon">in</a>
          <a href="#" className="social-icon">ig</a>
        </div>
        <p className="copyright">© 2025 Medi Sync. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
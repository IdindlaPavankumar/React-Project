import React from 'react';
import '../../src/style/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Healthcare at Your Fingertips</h1>
          <p>Medi Sync connects you with top healthcare professionals. Book appointments, consult with specialists, and manage your health journey seamlessly.</p>
          <a href="#appointment" className="btn btn-accent">Book Appointment</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
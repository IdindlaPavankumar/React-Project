import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Doctors from './Doctors';
import Appointment from './Appointment';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  return (
    <div className="home-container" id='Home'>
      <Navbar/>
      <Hero />
      <Features />
      <Doctors />
      <Appointment/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;
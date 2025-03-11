import React, { useState } from 'react';
import '../../src/style/Contact.css';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Here you would typically send the data to your backend
    alert('Message sent! We will get back to you soon.');
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="contact-detail">
              <span className="contact-icon">📍</span>
              <p>123 Medical Center Drive, Healthcare City, State 12345</p>
            </div>
            <div className="contact-detail">
              <span className="contact-icon">📞</span>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="contact-detail">
              <span className="contact-icon">✉️</span>
              <p>contact@medisync.com</p>
            </div>
            <div className="contact-detail">
              <span className="contact-icon">⏱️</span>
              <p>Monday - Friday: 8am - 8pm<br />Saturday: 9am - 5pm<br />Sunday: Closed</p>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={contactForm.name} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={contactForm.email} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                value={contactForm.subject} 
                onChange={handleChange} 
              />
              <textarea 
                name="message" 
                placeholder="Your Message" 
                value={contactForm.message} 
                onChange={handleChange} 
                required
              ></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState } from 'react';
import '../../src/style/Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    doctor: '',
    time: '',
    reason: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Appointment request submitted! We will contact you shortly to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      doctor: '',
      time: '',
      reason: ''
    });
  };

  return (
    <section id="appointment" className="appointment section">
      <div className="container">
        <h2 className="section-title">Book Your Appointment</h2>
        <div className="appointment-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  value={formData.date} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="doctor">Select Doctor</label>
                <select 
                  id="doctor" 
                  name="doctor" 
                  value={formData.doctor} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Choose a doctor</option>
                  <option value="dr-sarah">Dr. Sarah Johnson (Cardiologist)</option>
                  <option value="dr-michael">Dr. Michael Chen (Neurologist)</option>
                  <option value="dr-emily">Dr. Emily Rodriguez (Pediatrician)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="time">Preferred Time</label>
                <select 
                  id="time" 
                  name="time" 
                  value={formData.time} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Select a time slot</option>
                  <option value="9-10">9:00 AM - 10:00 AM</option>
                  <option value="10-11">10:00 AM - 11:00 AM</option>
                  <option value="11-12">11:00 AM - 12:00 PM</option>
                  <option value="2-3">2:00 PM - 3:00 PM</option>
                  <option value="3-4">3:00 PM - 4:00 PM</option>
                  <option value="4-5">4:00 PM - 5:00 PM</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="reason">Reason for Appointment</label>
              <textarea 
                id="reason" 
                name="reason" 
                rows="4" 
                value={formData.reason} 
                onChange={handleChange} 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-accent">Confirm Appointment</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
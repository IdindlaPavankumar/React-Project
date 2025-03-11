import React from 'react';
import '../../src/style/Features.css';

const Features = () => {
  const features = [
    {
      icon: "⏱️",
      title: "Quick Appointments",
      description: "Book appointments instantly with your preferred specialists without long waiting times."
    },
    {
      icon: "👨‍⚕️",
      title: "Expert Doctors",
      description: "Connect with certified and experienced healthcare professionals across all specialties."
    },
    {
      icon: "📱",
      title: "Digital Health Records",
      description: "Access your medical history, prescriptions, and test results anytime, anywhere."
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Our dedicated team is available round the clock to assist you with any queries."
    },
  ];

  return (
    <section className="features section">
      <div className="container">
        <h2 className="section-title">Why Choose Medi Sync?</h2>
        <div className="grid grid-4">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

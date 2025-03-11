import React from 'react';
import '../../src/style/Doctors.css';
import doctor1 from '../../src/assets/img/doctor1.png';
import doctor2 from '../../src/assets/img/doctor2.png';
import doctor3 from '../../src/assets/img/doctor3.png';

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      description: "15+ years of experience specializing in cardiovascular diseases and preventive care.health issues",
      image: doctor1
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      description: "Expert in diagnosing and treating complex neurological disorders with a patient-centric approach.",
      image: doctor2
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      description: "Dedicated to providing compassionate care for children from infancy through adolescence.",
      image: doctor3
    }
  ];

  return (
    <section id="doctors" className="doctors section">
      <div className="container">
        <h2 className="section-title">Our Top Doctors</h2>
        <div className="grid grid-3">
          {doctors.map(doctor => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-img-container">
                <img src={doctor.image} alt={doctor.name} className="doctor-img" />
              </div>
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>
                <p>{doctor.description}</p>
                <a href="#appointment" className="btn btn-primary book-btn">Book Appointment</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;

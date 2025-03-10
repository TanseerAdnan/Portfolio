import React from 'react';
import './Services.css';
import { FaWordpress, FaCode, FaCamera, FaAndroid, FaReact, FaPython } from 'react-icons/fa'; // Import FontAwesome icons

const services = [
  { title: "Android Development", description: "Currently working as an Java and Kotlin Android Developer.", icon: <FaAndroid /> },
  { title: "Mern Stack Development", description: "Know how to develop web app using MERN Stack.", icon: <FaReact /> },
  { title: "Python", description: "Providing my services as a Free-Lanver at Fiverr.", icon: <FaPython /> }
];

const Services = () => {
  return (
    <section className="services">
      <h2>What I'm Doing</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

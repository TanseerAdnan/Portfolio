import React from 'react';
import Header from './Header';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si'; // Fiverr icon from a different library
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-container">
      <Header />
      <div className="contact-content">
        <h2>Contact Me</h2>
        <hr className="separatorContact" />

        {/* GitHub box */}
        <a href="https://github.com/TanseerAdnan" target="_blank" rel="noopener noreferrer" className="icon-link">
          <div className="icon-box2">
            <div className="icon-row">
              <FaGithub className="contact-icon" size={40} />
              <h3 className="icon-title">TanseerAdnan</h3>
            </div>
          </div>
        </a>

        {/* Gmail box */}
        <a href="hashiradnan55@example.com" className="icon-link">
          <div className="icon-box2">
            <div className="icon-row">
              <FaEnvelope className="contact-icon" size={40} />
              <h3 className="icon-title">Tanseer Adnan</h3>
            </div>
          </div>
        </a>

        {/* LinkedIn box */}
        <a href="https://www.linkedin.com/in/tanseer-adnan-67bb081ba/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <div className="icon-box2">
            <div className="icon-row">
              <FaLinkedin className="contact-icon" size={40} />
              <h3 className="icon-title">Tanseer Adnan</h3>
            </div>
          </div>
        </a>

        {/* Fiverr box */}
        <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <div className="icon-box2">
            <div className="icon-row">
              <SiFiverr className="contact-icon" size={40} />
              <h3 className="icon-title">Fiverr</h3>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;

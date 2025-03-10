import React from 'react';
import './Sidebar.css';
import avatarImage from '../images/has.jpg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src={avatarImage} alt="Profile" />
        <h3>Tanseer Adnan Aamer</h3>
        <span className="web-developer">Software Engineer</span>
        <hr className="separator" />
      </div>
      <ul className="contact-info">
        <li>
          <div className="icon-box">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="text-container">
            <span className="contact-label">EMAIL</span>
            <span className="contact-details">hashiradnan55@gmail.com</span>
          </div>
        </li>
        <li>
          <div className="icon-box">
            <i className="fas fa-phone"></i>
          </div>
          <div className="text-container">
            <span className="contact-label">PHONE</span>
            <span className="contact-details">+03313326000</span>
          </div>
        </li>
        <li>
          <div className="icon-box">
            <i className="fas fa-birthday-cake"></i>
          </div>
          <div className="text-container">
            <span className="contact-label">BIRTHDAY</span>
            <span className="contact-details">October 20, 2001</span>
          </div>
        </li>
        <li>
          <div className="icon-box">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="text-container">
            <span className="contact-label">LOCATION</span>
            <span className="contact-details">Karachi, Pakistan</span>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

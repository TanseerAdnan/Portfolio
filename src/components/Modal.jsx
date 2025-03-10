import React from 'react';
import './Modal.css';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, title, description, techStack, link }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    // Prevent closing when clicking inside the modal content
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={handleOverlayClick}>
        <FaTimes className="modal-close-icon" onClick={onClose} />
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>
        <h3 className="modal-techstack-heading">Tech Stack</h3>
        <ul className="modal-techstack-list">
          {techStack.map((tech, index) => (
            <li key={index} className="modal-techstack-item">{tech}</li>
          ))}
        </ul>
        <a href={link} className="modal-link-button" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Modal;

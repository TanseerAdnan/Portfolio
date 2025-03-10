import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, tagline, image, onDetailsClick }) => {
  return (
    <div className="project-card">
      {/* Overlay with text */}
      <div className="project-overlay">
        <p></p> {/* Add custom overlay text */}
      </div>
      
      {/* Card Content */}
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-tagline">{tagline}</p>
        <button className="details-button" onClick={onDetailsClick}>
          Get Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

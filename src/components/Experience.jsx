import React from 'react';
import Header from './Header'; // Import the Header component
import './Experience.css'; // Create a separate CSS for Experience styles
import { FaBriefcase } from 'react-icons/fa'; // Importing an icon from react-icons

const Experience = () => {
  return (
    <section className="experience-container" id="experience">
      <Header />
      
      <div className="experience-content">
        <div className="experience-header">
          {/* Add an icon before the 'Experience' text */}
          <FaBriefcase className="experience-icon" />
          <h2>Experience</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h3>Access Group - Android Developer</h3>
              <span className="experience-duration">july 2024 — Active</span>
              <p>I work on mobile and POS applications for banks and petroleum brands using Java and Kotlin, focusing on app development and transaction processes.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h3>Fiverr - FREELANCING</h3>
              <span className="experience-duration">2021 — 2023</span>
              <p>Collaborated with diverse clients to understand their requirements and successfully delivered high-quality 2D
              text-based projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

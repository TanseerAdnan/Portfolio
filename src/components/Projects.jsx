import React from 'react';
import { FaCode, FaPython, FaReact } from 'react-icons/fa'; // Importing icons from react-icons
import { GiSmartphone } from 'react-icons/gi'; // Importing mobile icon from react-icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import Header from './Header'; // Import the Header component
import './Projects.css'; // Create a separate CSS for Projects styles

const Projects = () => {
  const navigate = useNavigate(); // Initialize useNavigate for routing

  return (
    <section className="projects-container" id="projects">
      <Header />
      
      <div className="projects-content">
        

        <h2 className="projects-heading">PROJECTS</h2>
        <hr className="separatorProjects" /> {/* First horizontal line */}
        <div className="projects-grid">
          <div className="project-box" onClick={() => navigate('/web')}>
            <FaReact className="project-icon" size={50} /> {/* Web Development icon */}
            <h3>Web Development</h3>
          </div>

          <div className="project-box" onClick={() => navigate('/android')}>
            <GiSmartphone className="project-icon" size={50} /> {/* Mobile Apps icon */}
            <h3>Mobile Apps</h3>
          </div>

          <div className="project-box" onClick={() => navigate('/python')}>
            <FaPython className="project-icon" size={50} /> {/* Python icon */}
            <h3>Python</h3>
          </div>
        </div>
        
        <hr className="separatorProjects2" /> {/* Second horizontal line */}
        <hr className="separatorProjects3" /> {/* Third horizontal line */}
      </div>
    </section>
  );
};

export default Projects;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import ProjectCard from './ProjectCard'; // Reusable ProjectCard component
import Modal from './Modal'; // Import the Modal component
import './Python.css'; // Importing Python styles
import pythonImage1 from '../images/chat2.png'; // Adjust the path to your images
import pythonImage2 from '../images/fyp2.png'; // Adjust the path to your images

const Python = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null); // Track the current project for modal

  const handleDetailsClick = (project) => {
    setCurrentProject(project); // Set the current project to show in the modal
    setIsModalOpen(true); // Open the modal on button click
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setCurrentProject(null); // Reset the current project
  };

  const pythonProjects = [
    {
      title: 'E.D.I.T.H Chatbot',
      tagline: 'AI based chatbot that will facilitate you in multiple languages.',
      image: pythonImage1, // Use the imported image
      modalContent: {
        title: 'E.D.I.T.H CHATBOT - Front End and AI based',
        description: 'Engineered a customer-centric chatbot that facilitates and guides users through the restaurant website, offering personalized assistance and information.Implemented multilingual support, enabling the chatbot to comprehend and respond in both English and Roman (Urdu), enhancing the user experience for a diverse customer base.Successfully integrated Vosk API for voice recognition, enabling users to interact with the chatbothrough voice commands, expanding accessibility and providing an innovative alternative to tradititext-based input.',
        techStack: ["Flask", "Pytorch", "NLTK", "Neural Network", "Js"],
        link: "https://github.com/TanseerAdnan/Chatbot/tree/master"
      }
    },
    {
      title: 'BehavioGuard',
      tagline: 'Fortifying Access with Behavioral Insights.',
      image: pythonImage2, // Use the imported image
      modalContent: {
        title: 'BehavioGuard - Desktop App Based on AI and Security',
        description: 'BehavioGuard leverages behavioral biometrics, continuously analyzing users unique keyboard and mouse patterns to authenticate them in real-time. By integrating AI technologies such as Random Forest Classifier, our system learns and adapts to each user’s behavior, making it extremely difficult for unauthorized individuals to gain access.',
        techStack: ["Python", "Tauri", "React", "NodeJS", "ExpressJS", "Random Forest Classifier", "Flask", "SQLite", "Firewall"],
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7233436576049987584/"
      }
    }
  ];

  return (
    <div className="python-container">
      <button onClick={() => navigate('/projects')} className="back-button2">
        <FaArrowLeft className="back-icon" />
      </button>

      <h1 className="python-heading">Python Projects</h1>

      <div className="project-cards">
        {pythonProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            tagline={project.tagline} // Include tagline
            image={project.image} // Use the imported image
            onDetailsClick={() => handleDetailsClick(project)} // Pass the project to the click handler
          />
        ))}
      </div>

      {/* Modal for project details */}
      {currentProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={currentProject.modalContent.title}
          description={currentProject.modalContent.description}
          techStack={currentProject.modalContent.techStack}
          link={currentProject.modalContent.link}
          apkLink={currentProject.modalContent.apkLink || ""} 
        />
      )}
      
    </div>
  );
};

export default Python;

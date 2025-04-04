import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import Modal from './Modal'; // Import the Modal component
import './Web.css';
import quizGameImage from '../images/qu.png';

const Web = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailsClick = () => {
    setIsModalOpen(true); // Open the modal on button click
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const techStack = ["Node.js", " Express.js", "Tailwind CSS", "MongoDB", "Vite"];
  const projectLink = "https://github.com/TanseerAdnan/QuizApp-Mern"; // Replace with your project link
  const apkDownloadLink = "https://quiz-game-pl.netlify.app/";
  return (
    <div className="web-container">
      <button onClick={() => navigate('/projects')} className="back-button">
        <FaArrowLeft className="back-icon" />
      </button>
      <h1 className="web-heading">Web Development Projects</h1>

      <ProjectCard
        title="Quiz-Game"
        tagline="Test your programming language knowledge here"
        image={quizGameImage} // Path to your image
        onDetailsClick={handleDetailsClick}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Quiz Game - Front End and Back End Development"
        description="Developed a feature-rich web application offering interactive quizzes and real-time score trackingfor programming enthusiasts, utilizing React for the frontend and Node.js with Express for the
                    backend.Ensured an optimal user experience across devices by implementing a responsive design approach,
                    adapting the user interface seamlessly from large desktop screens to mobile devices."
        techStack={techStack}
        projectLink={projectLink}
        apkLink={apkDownloadLink}
      />
    </div>
  );
};

export default Web;

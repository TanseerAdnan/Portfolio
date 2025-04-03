import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import Modal from './Modal'; // Import the Modal component
import './Android.css';
import androidProjectImage from '../images/whatsalert2.png'; // Replace with your actual image

const Android = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailsClick = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  const techStack = ["Java", "Room Database"];
  const projectLink = "https://github.com/TanseerAdnan/Whatsalert"; 
  const apkDownloadLink = "/Whatsalert-1.0-250403-release.apk"; // File should be inside public/

  return (
    <div className="android-container">
      <button onClick={() => navigate('/projects')} className="back-button">
        <FaArrowLeft className="back-icon" />
      </button>
      <h1 className="android-heading">Android Projects</h1>

      <ProjectCard
        title="WhatsAlert"
        tagline="Never forget, always connected!"
        image={androidProjectImage} 
        onDetailsClick={handleDetailsClick}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="WhatsAlert - WhatsApp Reminder App"
        description="Developed an Android application that allows users to set reminders and automatically navigate to WhatsApp 
                     with the pre-saved message. The app integrates with SQLite for local storage and follows best 
                     industry practices."
        techStack={techStack}
        projectLink={projectLink}
        apkLink={apkDownloadLink} // Pass APK link here
      />
    </div>
  );
};

export default Android;

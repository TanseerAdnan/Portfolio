import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Android.css'

const Android = () => {
  const navigate = useNavigate();

  return (
    <div className="android-container">
      <button onClick={() => navigate('/projects')} className="back-button3">
        <FaArrowLeft className="back-icon"/>
      
      </button>
      <h1 className="android-heading">Android Projects</h1>
    
    </div>
  );
};

export default Android;

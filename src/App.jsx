// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Services from './components/Services';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import router components
import Experience from './components/Experience'; // Import the Experience component
import Projects from './components/Projects';     // Import the Projects component
import Contact from './components/Contact';   
import Web from './components/Web'; // Web component
import Python from './components/Python'; // Python component
import Android from './components/Android'; // Android component

const App = () => {
  return (
      <Router>
      <div className="app">
        
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/web" element={<Web />} />   {/* Web Development route */}
              <Route path="/python" element={<Python />} /> {/* Python route */}
              <Route path="/android" element={<Android />} /> {/* Android route */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

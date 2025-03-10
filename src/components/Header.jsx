import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
        <li><Link to="/">About</Link></li>
        
          <li>
            <a href="/Tanseer_resume.pdf" download="Tanseer_resume.pdf">
              Resume
            </a>
          </li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

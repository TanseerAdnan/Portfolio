import React from 'react';
import Header from './Header';
import Services from './Services';  // Import the Services component
import './About.css';

const About = () => {
  return (
    <section className="about-container" id="about">
      <Header />
      
      <div className="about-content">
        <h2>About Me</h2>
        <hr className="separatorAbout" />
        <p>
        I hold a Bachelor’s degree in Computer Science and have a strong foundation in software development. Over the years, I have worked as a freelancer. Currently, I specialize as an Android developer, crafting intuitive and efficient mobile applications. My journey has equipped me with versatile skills, allowing me to continuously evolve and embrace new challenges in the tech landscape.
        </p>
        <p>
        Motivated Software Engineering student with expertise in Python and MERN-Stack technologies.Passionate about
        staying abreast of the latest technologies to contribute effectively to innovative projects.
        </p>
      </div>
      
      <Services />  {/* Including the Services component here */}
      
    </section>
  );
};

export default About;

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-me-title">About Me</h2>
      <p className="about-me-text">Hi, I'm Brugera Herrero, a Data Analyst and Software Developer based in Berlin, Germany. My journey has been shaped by a background in web development, data analysis, and a deep interest in problem-solving through technology.</p>
      <p className="about-me-text">I recently completed a Data Analytics training, where I sharpened my skills in Python, Pandas, machine learning, and statistical analysis. These skills enable me to extract insights from data, build predictive models, and support data-driven decision-making.</p>
      <p className="about-me-text">Prior to my data-focused path, I worked as a Software Developer, specializing in building web applications with JavaScript, React, and Angular. My degree in Visual Arts and Design also gave me a unique perspective on the importance of user experience and design in software development.</p>
      <p className="about-me-text">After a break to focus on family, I'm now looking forward to bringing my analytical and development skills to new opportunities.</p>
      <p className="about-me-text">Outside of work, I've always been passionate about photography, which started as my profession and has since become a personal hobby, especially in the analog space. I'm also into bouldering, enjoy watching movies, and I'm an avid bookworm. Nature is a big part of my life, providing a source of inspiration and balance.</p>
      <p className="about-me-text">Let's connect!</p>
    {/* Buttons for GitHub and LinkedIn */}
    <div className="button-container">
      <a href="https://github.com/bruhu" className="social-button github" target="_blank" rel="noopener noreferrer">
        <GitHubIcon /> GitHub
      </a>
      <a href="https://linkedin.com/in/brugera" className="social-button linkedin" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon /> LinkedIn
      </a>
    </div>
  </div>
);
};

export default About;

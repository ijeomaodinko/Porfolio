import React from 'react';
import './about.css';
import {   DiGithubBadge, DiHtml5, DiJavascript1, DiNodejsSmall,
DiPostgresql, DiReact, DiRuby, DiRor, DiMongodb, DiCss3, DiMysql } from "react-icons/di";
import ijeoma from '../assets/images/ijeoma.png';


const technologies = [
  { name: 'HTML', image: <DiHtml5  style={{ color: 'orange', fontSize: '3rem' }}  /> },
  { name: 'CSS', image: <DiCss3 style={{ color: 'blue', fontSize: '3rem' }} /> },
  { name: 'JavaScript', image: <DiJavascript1 style={{ color: 'yellow', fontSize: '3rem' }} /> },
  { name: 'React.js', image: <DiReact style={{ color: 'green', fontSize: '3rem' }} /> },
];

const backend = [
  { name: 'Ruby', image:  <DiRuby style={{ color: 'red', fontSize: '3rem' }} /> },
  { name: 'Ruby on Rails', image: <DiRor style={{ color: 'purple', fontSize: '3rem' }} /> },
  { name: 'Node.js', image: <DiNodejsSmall style={{ color: 'orange', fontSize: '3rem' }}  /> },
];

const tools = [
  { name: 'PostgreSQL', image: <DiPostgresql  style={{ color: 'blue', fontSize: '3rem' }} /> },
  { name: 'MySQL', image: <DiMysql  style={{ color: 'green', fontSize: '3rem' }} /> },
  { name: 'MongoDB', image: <DiMongodb style={{ color: 'lime', fontSize: '3rem' }} /> },
  { name: 'GitHub', image: <DiGithubBadge style={{ color: 'black', fontSize: '3rem' }} /> },
];


const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
          I am a seasoned full stack developer with a dedicated focus on crafting exceptional web solutions. My expertise lies in a versatile range of technologies, including HTML, CSS, React, Ruby on Rails, and a strong command of JavaScript. Currently, I am actively augmenting my proficiency in Node.js to further enrich my skill set.

My fervor lies in curating responsive designs that seamlessly transcend diverse platforms and devices. Whether adopting a mobile-first or desktop-first approach, I am driven to ensure optimal visual and functional experiences.

          </p>
          <p className="about-experience">
The following is an overview of the cutting-edge technologies I have recently engaged with, complemented by a selection of my proficient skills:
            <ul>
              <li>HTML, CSS, React, Ruby on Rails</li>
              <li>JavaScript, Node.js (in progress)</li>
              <li>Database management with MongoDB, PostgreSQL</li>
              <li>API integration and third-party services</li>
            </ul>
          <p >My commitment to innovation and my drive to master new tools and frameworks fuel my journey as a dynamic full stack developer.</p>
          </p>
          <div className="about-resume">
        <a href= "https://drive.google.com/file/d/1p0MsdE1aLPb6er4fy-3XeW23N5FVcGK3/view?usp=sharing"  target="_blank" rel="noopener noreferrer" className="resume-link">
          Get My Resume
        </a>
      </div>
        </div>
        <div className="about-image">
          <img src={ijeoma} alt="Developer" />
        </div>
      </div>
      <div className="about-stacks" id="stack">
        <div className="stacks-header">
          <h3>My Technology Stacks</h3>
        </div>
        <div className="stacks-content">
          <div className="stacks-group">
            <div className="stacks-category">
              <h4>Frontend</h4>
              <ul>
              {technologies.map((tech, index) => (
                  <li key={index} >
                  {tech.image}
                  {tech.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="stacks-category">
              <h4>Backend</h4>
              <ul>
              {backend.map((tech, index) => (
                  <li key={index}>
                  {tech.image}
                  {tech.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="stacks-category">
              <h4>Tools</h4>
              <ul>
              {tools.map((tech, index) => (
                  <li key={index} >
                  {tech.image}
                  {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

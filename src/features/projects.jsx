import React from 'react';
import './projects.css';
import { useState } from 'react';
import ProjectModal from './projectModal';
import ProjectCarousel from './projectCarousel';
import ecommerce from '../assets/images/e-commerce-img.png';
import blog from '../assets/images/blog-img.png';
import crypto from '../assets/images/crypto.jpg';
import math from '../assets/images/math.jpg';
import ecommercem from '../assets/images/ecommerce.png';
import bookstore from '../assets/images/bookstore.png';



const projects = [
  { title: 'E-Commerce App', image: ecommerce, link: 'https://easybazaar-app.netlify.app/', 
   description: 'This app significantly transforms the way buyers and manufacturers interact by providing a seamless and efficient link between them. This app streamlines the supply chain process, it facilitates the exchange of a wide range of products, enabling businesses to operate more effectively.',
   tech: ['React', 'Redux', 'Rails', 'Postgres', 'JWT', 'Heroku', 'Netlify'], img: ecommercem, live: 'https://easybazaar-app.netlify.app/', source: '	https://github.com/ijeomaodinko/e-commerce.git'},
  { title: 'Blog App', image: blog, link: '/project2' },
  { title: 'Crypto', image: crypto, link: '/project3' },
  { title: 'Math Magician', image: math, link: '/project4' },
  // Add more projects
];

const moreProjects = [
  { title: 'Book Store', description: 'This project is for online users who want to store an ebook with the details of the books.',
   tech: ['React', 'Redux', 'CSS', 'Netlify'], live: 'https://bookstoreonlineport.netlify.app/', source: 'https://github.com/ijeomaodinko/React-Project', image: bookstore },
  { title: 'More Project 2', description: 'Description 2', tech: ['Tech 2'], link: '/more-project2', image: 'project2.jpg' },
  { title: 'More Project 3', description: 'Description 3', tech: ['Tech 3'], link: '/more-project3', image: 'project3.jpg' },
  // Add more "More Projects" here
];


const Project = () => {
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <section className="project" id="projects">
      <div className="recent-projects">
        <div className="recent-header">
          <h2>Recent Projects</h2>
        </div>
        <div className="recent-list">
          {projects.slice(0, 4).map((project, index) => (
            <div key={index} href={project.link} className="project-card" onClick={() => openModal(project)}>
              <p className="project-title">{project.title}</p>
              <img src={project.image} alt={project.title} className='project-image' />
            </div>
          ))}
        </div>
      </div>
      {modalProject && (
        <ProjectModal project={modalProject} onClose={closeModal} />
      )}
      <div className="all-projects">
        <div className="all-header">
          <h2>More Projects</h2>
        </div>
        <div className="all-list">
        <ProjectCarousel projects={moreProjects} />
        </div>
      </div>
    </section>
  );
};

export default Project;

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
import eraimag from '../assets/images/eraimag.png';
import portfoloi from '../assets/images/portfoloi.png';
import blogi from '../assets/images/blog.png';
import erypto from '../assets/images/erypto.png';
import mathi from '../assets/images/math.png';
import spacetravelershub from '../assets/images/spacetravelershub.png';
import awesomebooksi from '../assets/images/awesomebooksi.png';




const projects = [
  { title: 'E-Commerce App', image: ecommerce, link: 'https://easybazaar-app.netlify.app/', 
   description: 'This app significantly transforms the way buyers and manufacturers interact by providing a seamless and efficient link between them. This app streamlines the supply chain process, it facilitates the exchange of a wide range of products, enabling businesses to operate more effectively.',
   tech: ['React', 'Redux', 'Rails', 'PostgreSQL', 'JWT', 'Heroku', 'Netlify'], img: ecommercem, live: 'https://easybazaar-app.netlify.app/', source: '	https://github.com/ijeomaodinko/e-commerce.git'},
  { title: 'Blog App', image: blog, description: 'The Blog app is a classic example of a blog website. The project is a fully functional website that will show the list of posts and empower readers to interact with them by adding comments and likes.',
  tech: ['Rails', 'PostgreSQL', 'JWT', 'Heroku'], img: blogi, live: 'https://lit-shelf-59709-f2936b83e1e2.herokuapp.com/users/sign_in', source: 'https://github.com/ijeomaodinko/blog-app.git' },
  { title: 'Crypto', image: crypto,  description: 'This project gives information about cryptocurrencies. The information was fetched from the API.',
  tech: ['React', 'Redux', 'HTML5',  'CSS3', 'Netlify'], img: erypto, live: 'https://erypto.netlify.app/', source: 'https://github.com/ijeomaodinko/React-Project' },
  { title: 'Math Magician', image: math, description: 'The Math Magicians Calculator is a simple calculator that enables you to perform simple calculations. It is built with react and has a Single Page Application that shows information like quotes.',
  tech: ['React', 'HTML5',  'CSS3', 'Netlify'], img: mathi, live: 'https://math-magician-quotes.netlify.app/#/Calculator', source: 'https://github.com/ijeomaodinko/Math-magicians' },
  // Add more projects
];

const moreProjects = [
  { title: 'Book Store', description: 'This project is for online users who want to store an ebook with the details of the books.',
   tech: ['React', 'Redux', 'CSS', 'Netlify'], live: 'https://bookstoreonlineport.netlify.app/', source: 'https://github.com/ijeomaodinko/React-Project', image: bookstore },
  { title: 'Era Program', description: 'This "Era-Program" is a website for training on software development which was put up as advertisement and awareness to the public.', 
  tech: ['HTML5', 'CSS', 'JavaScript'], live: 'https://ijeomaodinko.github.io/Era-Program/',  source: 'https://github.com/ijeomaodinko/Era-Program', image: eraimag  },
  { title: 'Portfolio', description: 'This "Portifolio-Page" is a listing of my portifolio. It has different activities and it description.', tech: ['HTML5', 'CSS3', 'JavaScript'], live: 'https://ijeomaodinko.github.io/Portfolio-Page/',  source: 'https://github.com/ijeomaodinko/Portfolio-Page', image: portfoloi },
 
  { title: 'Space Traveler', description: 'The real live data from the SpaceX API was used to build a web for company that provides commercial and scientific space travel services. The application allow users to book rockets, dragons and join selected space missions.',
   tech: ['React', 'Redux', 'CSS', 'Netlify'], live: 'https://space-travellers-hubi.netlify.app/', source: 'https://github.com/ijeomaodinko/Space-Travelers-Hub', image: spacetravelershub },
  { title: 'Era Program', description: 'This "Era-Program" is a website for training on software development which was put up as advertisement and awareness to the public.', 
  tech: ['HTML5', 'CSS', 'JavaScript'], live: 'https://ijeomaodinko.github.io/Era-Program/',  source: 'https://github.com/ijeomaodinko/Era-Program', image: eraimag  },
  { title: 'Awesome Books', description: 'This "Awesome books" is a simple website that displays a list of books and allows add and remove books from that list. By building this application, I manage data using JavaScript. The website is more interactive. I also use a medium-fidelity wireframe to build the UI.',
   tech: ['HTML5', 'CSS3', 'JavaScript'], live: 'https://awesomebooksi.netlify.app',  source: 'https://github.com/ijeomaodinko/Awesome-book', image: awesomebooksi },
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

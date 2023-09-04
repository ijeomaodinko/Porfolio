import React, { useState } from 'react';
import './projectCarousel.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="more-projects-carousel">
      <button className="arrow left-arrow" onClick={prevSlide}>
        &#60;
      </button>
      <div className="carousel-content">
        <div className="carousel-item active">
          <div className="project-details">
          <div className='project-a-img'>
            <img src={currentProject.image} alt={currentProject.title} />
          </div>
            <div className="project-info">
              <h3>{currentProject.title}</h3>
              <p>{currentProject.description}</p>
              <div className='modal-tech'>
                {currentProject.tech && currentProject.tech.map((tech, index) => (
                  <div className="project-tech" key={index}>
                    <p className='project-techi'>{tech}</p>
                  </div>
                ))}
              </div>
              
              <div className='btn-addtech'> 
          <div  className='btn-add-itech'>
           <a href={currentProject.live} target="_blank" rel="noreferrer" >
        <p>Live <span><FaGithub  style={{color: '#ffffff',  marginLeft: 12}} /></span></p>
        </a></div>
        <button className='btn-add-itech'> <a href={currentProject.source} target="_blank"
        rel="noreferrer" ><p>Source <span> <FaExternalLinkAlt style={{color: '#ffffff', marginLeft: 12}} /></span> </p></a> </button>
        </div>

            </div>
          </div>
        </div>
      </div>
      <button className="arrow right-arrow" onClick={nextSlide}>
        &#62;
      </button>
      <div className="pagination">
        {projects.map((project, index) => (
          <div
          key={index}
          className={`pagination-dot ${currentIndex === index ? 'active' : ''}`}
          onClick={() => setCurrentIndex(index)}
          ></div>
          ))}
      </div>
          </div>
  );
};

export default ProjectCarousel;

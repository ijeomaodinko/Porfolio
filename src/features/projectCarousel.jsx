import React, { useState } from 'react';
import './projectCarousel.css'; // Import your CSS file for styling

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
            <img src={`/project-images/${currentProject.image}`} alt={currentProject.title} />
            <div className="project-info">
              <h3>{currentProject.title}</h3>
              <p>{currentProject.description}</p>
              <p>{currentProject.tech}</p>
              <a href={currentProject.link}>Learn More</a>
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

// ProjectModal.js
import React from 'react';
import './projectModal.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="project-modal">
      <div className="modal-content">
         <button onClick={onClose}  className='modalclose'>Close</button> 
        <h2>{project.title}</h2>
        <div className='projectmodal'>
        <div className='project-modalimg'><img src= {project.img} alt="" className='modalimg' /></div>
        <div className='modalexp'>
        <p>{project.description}</p>
        <div className='modal-tech'>
        {project.tech && project.tech.map((tech, index) => (
       <div className="project-tech" key={index}>
      <p>{tech}</p>
       </div>
        ))}
        </div>
       <div className='btn-add'> 
       <div  className='btn-add-i'>
        <a href={project.live} target="_blank" rel="noreferrer" >
        <p>Live <span><FaGithub  style={{color: '#ffffff',  marginLeft: 12}} /></span></p>
        </a></div>
        <button className='btn-add-i'> <a href={project.source} target="_blank"
        rel="noreferrer" ><p>Source <span> <FaExternalLinkAlt style={{color: '#ffffff', marginLeft: 12}} /></span> </p></a> </button>
        </div> 
        </div>
        </div>
    </div>
    </div>
  );
};

export default ProjectModal;

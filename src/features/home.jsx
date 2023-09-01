import React from 'react';
import './home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1 className="home-title">Ijeoma Odinko</h1>
        <h2 className="home-subtitle">I'm a Full Stack Software Developer.</h2>
        <p className="home-description">
        Welcome to my portfolio! I am a dedicated Full Stack Engineer with a passion for crafting digital products and enriching user experiences. Proficient in developing, designing, and implementing web applications, I merge technology with creativity to build innovative solutions.
        </p>
        <a href="#projects" className="home-btn">View Projects</a>
      </div>
    </section>
  );
};

export default Home;

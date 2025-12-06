import React from 'react';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hola, soy <span className="highlight">{personalInfo.name}</span>
          </h1>
          <h2 className="hero-subtitle">{personalInfo.title}</h2>
          <p className="hero-description">{personalInfo.bio}</p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{personalInfo.publicRepos}</span>
              <span className="stat-label">Repositorios</span>
            </div>
            <div className="stat">
              <span className="stat-number">{personalInfo.followers}</span>
              <span className="stat-label">Seguidores</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Ver GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img 
            src={personalInfo.avatar} 
            alt={personalInfo.name}
            className="avatar"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

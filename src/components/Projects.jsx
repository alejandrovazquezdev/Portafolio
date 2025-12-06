import React, { useState } from 'react';
import { featuredProjects } from '../data/portfolio';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const languages = ['all', ...new Set(featuredProjects.map(p => p.language).filter(Boolean))];
  
  const filteredProjects = filter === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(p => p.language === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2>
        <p className="section-subtitle">
          Una selección de mis proyectos más relevantes en GitHub
        </p>

        {/* Filtros */}
        <div className="project-filters">
          {languages.map(lang => (
            <button
              key={lang}
              className={`filter-btn ${filter === lang ? 'active' : ''}`}
              onClick={() => setFilter(lang)}
            >
              {lang === 'all' ? 'Todos' : lang}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                {project.language && (
                  <span className="project-language">{project.language}</span>
                )}
              </div>
              
              <p className="project-description">{project.description}</p>
              
              {project.topics && project.topics.length > 0 && (
                <div className="project-topics">
                  {project.topics.map((topic, index) => (
                    <span key={index} className="topic-tag">#{topic}</span>
                  ))}
                </div>
              )}

              <div className="project-footer">
                <div className="project-stats">
                  <span title="Stars">⭐ {project.stars}</span>
                  <span title="Forks">🔱 {project.forks}</span>
                </div>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Ver Proyecto →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more">
          <a 
            href="https://github.com/alejandrovazquezdev?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Ver Todos los Repositorios en GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React, { useState } from 'react';
import { featuredProjects } from '../data/portfolio';
import { Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? featuredProjects : featuredProjects.filter(p => p.featured);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 className="section-title">Proyectos Seleccionados</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Una colección de proyectos que demuestran mi experiencia en desarrollo backend, arquitectura de sistemas y aplicaciones multiplataforma.
          </p>
        </div>
        
        <div className="grid grid-2">
          {displayedProjects.map((project) => (
            <div 
              key={project.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start', 
                  marginBottom: '1.5rem' 
                }}>
                  <div className="mono" style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--text-accent)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '100px'
                  }}>
                    {project.tech[0]}
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
                  {project.name}
                </h3>

                <p style={{ 
                  color: 'var(--text-secondary)', 
                  marginBottom: '2rem',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}>
                  {project.description}
                </p>
              </div>

              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.75rem',
                marginTop: 'auto'
              }}>
                {project.tech.slice(1).map((tech, i) => (
                  <span key={i} className="mono" style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--text-secondary)' 
                  }}>
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="btn btn-secondary"
            style={{ 
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {showAll ? 'Mostrar Menos' : `Ver Todos los Proyectos (${featuredProjects.length})`}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

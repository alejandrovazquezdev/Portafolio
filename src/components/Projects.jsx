import React from 'react';
import { featuredProjects } from '../data/portfolio';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title"><span className="mono text-accent">02.</span> Proyectos Destacados</h2>
        
        <div className="grid grid-2">
          {featuredProjects.map((project) => (
            <div 
              key={project.id}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <Folder size={40} className="text-accent" />
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                  {project.name}
                </a>
              </h3>

              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: '2rem', 
                flex: 1,
                fontSize: '0.95rem'
              }}>
                {project.description}
              </p>

              <ul className="mono" style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '1rem', 
                fontSize: '0.8rem',
                color: 'var(--text-secondary)'
              }}>
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { Github, Linkedin, ArrowDown, Trophy } from 'lucide-react';
import { personalInfo, currentActivity } from '../data/portfolio';

const Hero = () => {
  return (
    <section className="section" style={{ 
      minHeight: '90vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      paddingTop: 'var(--header-height)' 
    }}>
      <div className="container">
        {/* Hackathon Badge */}
        <a 
          href={currentActivity.url} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            padding: '0.75rem 1.25rem', 
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)', 
            borderRadius: '100px',
            border: '1px solid rgba(236, 72, 153, 0.3)',
            marginBottom: '2rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          className="hackathon-badge"
        >
          <Trophy size={18} style={{ color: '#ec4899' }} />
          <div>
            <span className="mono" style={{ 
              fontSize: '0.85rem', 
              color: 'var(--text-primary)',
              fontWeight: 600,
              display: 'block'
            }}>
              {currentActivity.badge} {currentActivity.title}
            </span>
            <span className="mono" style={{ 
              fontSize: '0.7rem', 
              color: 'var(--text-secondary)'
            }}>
              {currentActivity.status} • {currentActivity.platform}
            </span>
          </div>
        </a>

        <h1 className="display-text" style={{ marginBottom: '1.5rem', maxWidth: '900px' }}>
          Ingeniería de software <br />
          <span style={{ color: 'var(--text-secondary)' }}>con enfoque en escalabilidad.</span>
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-secondary)', 
          maxWidth: '600px', 
          marginBottom: '3rem',
          lineHeight: 1.6
        }}>
          Soy {personalInfo.name}. Especialista en backend y arquitectura de sistemas. 
          Transformo problemas complejos en código limpio y eficiente.
        </p>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="#projects" className="btn btn-primary">
            Ver Trabajo
          </a>
          
          <div style={{ width: '1px', height: '24px', background: 'var(--border-color)', margin: '0 0.5rem' }}></div>
          
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem', color: 'var(--text-secondary)' }} className="hover:text-white">
            <Github size={24} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem', color: 'var(--text-secondary)' }} className="hover:text-white">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

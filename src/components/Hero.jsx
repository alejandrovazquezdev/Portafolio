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
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr auto', 
          gap: '3rem', 
          alignItems: 'center',
          marginBottom: '3rem'
        }}>
          <div>
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
              {personalInfo.name} <br />
              <span style={{ color: 'var(--text-secondary)' }}>DevOps, automatización y sistemas.</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-secondary)', 
              maxWidth: '600px', 
              marginBottom: '3rem',
              lineHeight: 1.6
            }}>
              Ingeniero en Sistemas Computacionales apasionado por DevOps, automatización y entusiasta de los sistemas operativos. 
              Transformo procesos complejos en soluciones automatizadas y eficientes.
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

          {/* Profile Image */}
          <div style={{ 
            position: 'relative',
            width: '280px',
            height: '280px',
            flexShrink: 0
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid var(--text-accent)',
              boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
              position: 'relative'
            }}>
              <img 
                src="/profile.jpeg" 
                alt={personalInfo.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            {/* Glow effect */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              right: '-10px',
              bottom: '-10px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
              zIndex: -1,
              animation: 'pulse 3s ease-in-out infinite'
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

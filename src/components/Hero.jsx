import React from 'react';
import { Github, Linkedin, ArrowDown, Trophy } from 'lucide-react';
import { personalInfo, currentActivity } from '../data/portfolio';

const Hero = () => {
  return (
    <section className="section" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
      <div className="container">
        <div className="hero-grid hero-grid-lg" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <a 
              href={currentActivity.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-kicker hackathon-badge"
            >
              <Trophy size={18} style={{ color: '#ec4899' }} />
              <div>
                <span className="mono" style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600, display: 'block' }}>
                  {currentActivity.badge} {currentActivity.title}
                </span>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  {currentActivity.status} • {currentActivity.platform}
                </span>
              </div>
            </a>

            <div style={{ display: 'grid', gap: '1rem' }}>
              <h1 className="display-text" style={{ maxWidth: '900px' }}>
                {personalInfo.name}
                <br />
                <span style={{ color: 'var(--text-secondary)' }}>DevOps, automatización y sistemas.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '640px' }}>
                Ingeniero en Sistemas Computacionales apasionado por DevOps, automatización y entusiasta de los sistemas operativos. Transformo procesos complejos en soluciones automatizadas y eficientes.
              </p>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span className="shine" aria-hidden />
                Ver Trabajo
              </a>
              <a href="#contact" className="btn btn-ghost">
                Conversemos
              </a>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ padding: '0.6rem', color: 'var(--text-secondary)' }}>
                  <Github size={22} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ padding: '0.6rem', color: 'var(--text-secondary)' }}>
                  <Linkedin size={22} />
                </a>
              </div>
            </div>

            <div className="hero-meta">
              <div className="glass" style={{ display: 'grid', gap: '0.35rem' }}>
                <p className="mono text-accent">Actividad actual</p>
                <p style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{currentActivity.title}</p>
                <p className="text-secondary">{currentActivity.status} • {currentActivity.platform}</p>
                <div className="sparkline" />
              </div>
              <div className="glass" style={{ display: 'grid', gap: '0.35rem' }}>
                <p className="mono text-accent">Ubicación</p>
                <p style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{personalInfo.location}</p>
                <p className="text-secondary">Disponible para remoto e híbrido</p>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '260px', height: '260px', display: 'grid', placeItems: 'center', marginTop: '0.5rem' }}>
              <div style={{
                position: 'absolute',
                inset: '-12%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59,130,246,0.2), transparent 60%)',
                filter: 'blur(8px)',
                animation: 'pulse 4.5s ease-in-out infinite'
              }} />
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '32px',
                padding: '0.75rem',
                background: 'linear-gradient(145deg, rgba(59,130,246,0.18), rgba(124,58,237,0.16))',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 25px 80px rgba(0,0,0,0.35)',
                display: 'grid',
                placeItems: 'center'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 0 40px rgba(59, 130, 246, 0.28)'
                }}>
                  <img 
                    src="/profile.jpeg" 
                    alt={personalInfo.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

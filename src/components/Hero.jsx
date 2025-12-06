import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 'var(--header-height)' }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <p className="mono text-accent" style={{ marginBottom: '1.5rem' }}>Hola, mi nombre es</p>
          
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
            fontWeight: 800, 
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            marginBottom: '1rem'
          }}>
            {personalInfo.name}.
          </h1>
          
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: 700, 
            color: 'var(--text-secondary)',
            lineHeight: 1.1,
            marginBottom: '2rem'
          }}>
            Construyo soluciones backend escalables.
          </h2>
          
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--text-secondary)', 
            maxWidth: '600px', 
            marginBottom: '3rem',
            lineHeight: 1.8
          }}>
            {personalInfo.bio}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">
              Ver Proyectos <ArrowRight size={18} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Github size={18} /> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

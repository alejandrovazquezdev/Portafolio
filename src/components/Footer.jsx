import React from 'react';
import { personalInfo } from '../data/portfolio';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '2rem 0', 
      textAlign: 'center', 
      fontSize: '0.9rem',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">
            <Github size={20} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">
            <Linkedin size={20} />
          </a>
        </div>
        <p className="mono">
          Diseñado & Construido por {personalInfo.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

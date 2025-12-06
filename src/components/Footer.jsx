import React from 'react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>{personalInfo.name}</h3>
            <p>{personalInfo.title}</p>
          </div>

          <div className="footer-links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              Email
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {personalInfo.name}. Todos los derechos reservados.</p>
          <p>Hecho con React + Vite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-brand">
          <h2>{personalInfo.name.split(' ')[0]}</h2>
        </div>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('about')}>Sobre Mí</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Habilidades</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Proyectos</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

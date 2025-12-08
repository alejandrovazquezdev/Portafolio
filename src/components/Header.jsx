import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experiencia', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo-mark">
          <span className="text-accent">&lt;AV</span>/&gt;
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="mono">
              <span className="text-accent">#</span>{link.name}
            </a>
          ))}
          <span className="pill mono">Disponible • Remoto</span>
        </nav>

        <button 
          className="mobile-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-panel">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-accent">#</span> {link.name}
            </a>
          ))}
          <span className="pill mono">Disponible • Remoto</span>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

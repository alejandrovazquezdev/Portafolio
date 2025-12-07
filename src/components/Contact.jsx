import React from 'react';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ textAlign: 'center', paddingBottom: '8rem' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <p className="mono text-accent" style={{ marginBottom: '1rem' }}>03. ¿Qué sigue?</p>
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Contáctame</h2>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '1.1rem', 
          marginBottom: '2rem',
          lineHeight: 1.8
        }}>
          Actualmente estoy abierto a nuevas oportunidades. Ya sea que tengas una pregunta o simplemente quieras saludar, haré todo lo posible por responderte.
        </p>
        
        <a 
          href={`mailto:${personalInfo.email}`}
          style={{ 
            color: 'var(--text-accent)',
            fontSize: '1.25rem',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
          className="hover:text-white"
        >
          alejandroisaacvazquezlopez@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;

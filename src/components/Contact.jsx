import React from 'react';
import { personalInfo } from '../data/portfolio';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ textAlign: 'center', paddingBottom: '8rem' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <p className="mono text-accent" style={{ marginBottom: '1rem' }}>03. ¿Qué sigue?</p>
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Contáctame</h2>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '1.1rem', 
          marginBottom: '3rem',
          lineHeight: 1.8
        }}>
          Actualmente estoy abierto a nuevas oportunidades. Ya sea que tengas una pregunta o simplemente quieras saludar, haré todo lo posible por responderte.
        </p>
        
        <a href={`mailto:${personalInfo.email}`} className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
          <Mail size={20} /> Enviar Correo
        </a>
      </div>
    </section>
  );
};

export default Contact;

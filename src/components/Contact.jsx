import React from 'react';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ textAlign: 'center', paddingBottom: '8rem' }}>
      <div className="container" style={{ maxWidth: '720px' }}>
        <div className="contact-card">
          <p className="mono text-accent" style={{ marginBottom: '0.5rem' }}>03. ¿Qué sigue?</p>
          <h2 style={{ fontSize: '2.6rem', marginBottom: '1rem' }}>Construyamos algo increíble</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Actualmente estoy abierto a nuevas oportunidades. Ya sea que tengas una pregunta o simplemente quieras saludar, haré todo lo posible por responderte.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
              <span className="shine" aria-hidden />
              Escríbeme
            </a>
            <span className="pill mono">Respuesta en &lt;24h</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

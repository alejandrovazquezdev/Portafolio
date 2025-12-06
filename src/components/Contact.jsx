import React from 'react';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  {personalInfo.linkedin.replace('https://', '')}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🐙</div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  @alejandrovazquezdev
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Ubicación</h3>
                <p>{personalInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <div className="cta-card">
              <h3>¿Interesado en colaborar?</h3>
              <p>
                Siempre estoy abierto a discutir nuevos proyectos, 
                ideas creativas o oportunidades para ser parte de tus visiones.
              </p>
              <a 
                href={`mailto:${personalInfo.email}?subject=Oportunidad de Colaboración`}
                className="btn btn-primary"
              >
                Enviar Mensaje
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

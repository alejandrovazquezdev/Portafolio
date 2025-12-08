import React from 'react';
import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Stack Tecnológico</h2>
        
        <div className="grid grid-3">
          {skills.map((skillGroup, index) => (
            <div key={index} className="card skill-card" style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  {skillGroup.category}
                </h3>
                <span className="project-pill">Core</span>
              </div>
              <div className="sparkline" aria-hidden />
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="text-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ width: '8px', height: '8px', background: 'var(--text-accent)', borderRadius: '50%' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

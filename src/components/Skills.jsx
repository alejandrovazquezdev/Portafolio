import React from 'react';
import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Stack Tecnológico</h2>
        
        <div className="grid grid-3">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 style={{ 
                fontSize: '1.1rem', 
                marginBottom: '1.5rem', 
                color: 'var(--text-primary)',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '0.5rem',
                display: 'inline-block'
              }}>
                {skillGroup.category}
              </h3>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {skillGroup.items.map((item, i) => (
                  <li key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem',
                    color: 'var(--text-secondary)',
                    fontSize: '1rem'
                  }}>
                    <span style={{ 
                      width: '4px', 
                      height: '4px', 
                      background: 'var(--text-accent)', 
                      borderRadius: '50%' 
                    }}></span>
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

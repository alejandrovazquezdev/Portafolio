import React from 'react';
import { skills } from '../data/portfolio';
import { Terminal, Database, Layout } from 'lucide-react';

const Skills = () => {
  const getIcon = (category) => {
    if (category.includes('Backend')) return <Terminal size={24} className="text-accent" />;
    if (category.includes('Database')) return <Database size={24} className="text-accent" />;
    return <Layout size={24} className="text-accent" />;
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title"><span className="mono text-accent">01.</span> Habilidades Técnicas</h2>
        
        <div className="grid grid-3">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                padding: '2rem', 
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                transition: 'transform 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ marginBottom: '1.5rem' }}>
                {getIcon(skillGroup.category)}
              </div>
              
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>{skillGroup.category}</h3>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="mono" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <span className="text-accent">▹</span> {item}
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

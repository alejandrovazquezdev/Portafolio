import React from 'react';
import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Habilidades Técnicas</h2>
        
        <div className="skills-grid">
          {/* Lenguajes de Programación */}
          <div className="skill-category">
            <h3 className="category-title">Lenguajes</h3>
            <div className="skill-items">
              {skills.languages.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="skill-category">
            <h3 className="category-title">Frameworks</h3>
            <div className="skill-tags">
              {skills.frameworks.map((framework, index) => (
                <span key={index} className="skill-tag">
                  {framework.name}
                  <small> ({framework.category})</small>
                </span>
              ))}
            </div>
          </div>

          {/* Bases de Datos */}
          <div className="skill-category">
            <h3 className="category-title">Bases de Datos</h3>
            <div className="skill-tags">
              {skills.databases.map((db, index) => (
                <span key={index} className="skill-tag">
                  {db.icon} {db.name}
                </span>
              ))}
            </div>
          </div>

          {/* Herramientas */}
          <div className="skill-category">
            <h3 className="category-title">Herramientas</h3>
            <div className="skill-tags">
              {skills.tools.map((tool, index) => (
                <span key={index} className="skill-tag">
                  {tool.icon} {tool.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

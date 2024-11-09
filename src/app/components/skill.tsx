'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './skills.css';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 70 },
  { name: 'TypeScript', level: 85 },
  { name: 'Next.js', level: 70 },
  { name: 'Tailwind CSS', level: 80 },
];

export const Skills = () => {
  return (
    <div className="skills-section" id="Skills">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        <div className="skill-list">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${skill.level}% `}}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
  </div>
);
};

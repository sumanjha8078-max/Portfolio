import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Next.js", "Framer Motion", "Express.js"]
  },
  {
    title: "Databases & DevOps",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Docker"]
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "PyCharm", "Jupyter Notebook", "CLion", "Claude Code"]
  },
  {
    title: "Core Competencies",
    skills: ["Data Structures and Algorithms", "OOP", "DBMS", "OS", "Computer Networks"]
  }
];

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 flex flex-col h-full transition-smooth"
          >
            <motion.h3 whileHover={{ x: 5 }} className="text-xl font-semibold text-primary-500 mb-4">{category.title}</motion.h3>
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill, sIndex) => (
                <motion.span 
                  key={sIndex}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="px-3 py-1 bg-bg-glass border border-border-glass rounded-full text-sm text-text-muted hover:bg-primary-500/20 hover:text-text-main hover:border-primary-500/30 transition-smooth cursor-default inline-block"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;

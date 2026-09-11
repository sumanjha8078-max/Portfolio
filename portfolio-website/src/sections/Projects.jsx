import React from 'react';
import Section from '../components/Section';
import { ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Greedy Cart | E-Commerce Frontend",
    tech: ["React", "Next.js", "CSS Modules", "Framer Motion"],
    link: "https://greedycart.vercel.app/",
    description: [
      "Engineered an accessible slide-out cart drawer with focus trapping, achieving a 100/100 Lighthouse Accessibility score.",
      "Optimized visual feedback loops using Framer Motion for variant swaps and state transitions, maintaining a 60fps frame rate.",
      "Structured layout grids using CSS Grid and Flexbox, decreasing Cumulative Layout Shift (CLS) to 0.01."
    ]
  },
  {
    title: "SnipLink | URL Shortener",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    link: "https://appsnipl.vercel.app/",
    description: [
      "Designed a URL shortener featuring a React frontend and a Node.js/Express RESTful API.",
      "Used MongoDB Atlas for data persistence.",
      "Introduced URL generation and link resolution algorithms using nanoid and shortid, reducing user redirection latency to under 50ms."
    ]
  }
];

const Projects = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150, scale: 0.85 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.3, ease: "easeOut", delay: 0 } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.2 }}
            className="glass-card group overflow-hidden flex flex-col h-full transition-smooth"
          >
            <div className="p-8 flex flex-col h-full relative z-10">
              <div className="flex justify-between items-center mb-6">
                <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="p-3 bg-primary-500/20 text-primary-400 rounded-lg">
                  <Code size={24} />
                </motion.div>
                <div className="flex gap-4">
                  {project.link && (
                    <motion.a whileHover={{ scale: 1.2, y: -3 }} href={project.link} target="_blank" rel="noreferrer" className="text-text-dim hover:text-primary-400 transition-colors">
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>
              
              <motion.h3 whileHover={{ x: 5 }} className="text-2xl font-bold text-text-main mb-2 group-hover:text-primary-300 transition-colors">
                {project.title}
              </motion.h3>
              
              <div className="mt-4 flex-grow text-text-muted space-y-2">
                {project.description.map((desc, i) => (
                  <p key={i} className="text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-primary-500 mt-0.5 opacity-50">▹</span> {desc}
                  </p>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-8 pt-4 border-t border-border-glass">
                {project.tech.map((tech, i) => (
                  <motion.span whileHover={{ scale: 1.1, y: -2 }} key={i} className="text-xs font-mono text-primary-300 inline-block cursor-default">
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Hover Background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

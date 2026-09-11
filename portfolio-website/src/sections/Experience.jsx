import React from 'react';
import Section from '../components/Section';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0 } }
          }}
          className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center"
        >
          
          {/* Left side: Pure Floating Clipart Logo */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            whileHover={{ 
              y: -10, 
              scale: 1.05, 
              transition: { duration: 0.2, ease: "easeOut" } 
            }} 
            className="w-full md:w-1/3 flex justify-center drop-shadow-xl hover:drop-shadow-2xl transition-smooth"
          >
            <img 
              src="/clipart.png" 
              alt="Clipart Logo" 
              className="w-full max-w-[220px] object-contain" 
            />
          </motion.div>
          
          {/* Right side: Experience Details inside Glass Card */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 150 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            whileHover={{ 
              y: -5, 
              transition: { duration: 0.2, ease: "easeOut" } 
            }}
            className="w-full md:w-2/3 glass-card p-8 lg:p-10 relative overflow-hidden group transition-smooth hover:shadow-xl hover:bg-glass-hover"
          >
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-colors pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col justify-center">
              <motion.h3 whileHover={{ x: 5 }} className="text-2xl md:text-3xl font-bold text-text-main mb-2">Joint Secretary</motion.h3>
              <motion.h4 whileHover={{ x: 5 }} className="text-lg md:text-xl text-primary-500 font-medium mb-8">ACM Students' Chapter, BIT Mesra</motion.h4>
              
              <ul className="space-y-5 text-text-muted">
                <motion.li whileHover={{ x: 10 }} className="flex items-start gap-4">
                  <span className="text-primary-500 mt-1.5 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">Led 4 post-contest discussions to analyze problem-solving approaches, optimize solutions, and enhance competitive programming skills among participants.</span>
                </motion.li>
                <motion.li whileHover={{ x: 10 }} className="flex items-start gap-4">
                  <span className="text-primary-500 mt-1.5 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">Drove a DSA and Competitive Programming workshop with 100+ student participants, focusing on core concepts, strategies, and coding practices.</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Experience;

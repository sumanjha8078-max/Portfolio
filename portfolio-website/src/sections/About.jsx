import React from 'react';
import Section from '../components/Section';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col gap-16 max-w-6xl mx-auto">
        
        {/* Row 1: Profile Image & Introduction */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-stretch">
          
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full sm:w-2/3 md:w-2/5 flex justify-center"
          >
            <div className="w-full max-w-sm aspect-square relative group">
              <div className="absolute inset-0 bg-primary-500 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20"></div>
              <img 
                src="/profile.jpeg" 
                alt="Krishna Chandra Jha" 
                className="w-full h-full object-cover rounded-3xl relative z-10 border border-border-glass shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(var(--color-primary-500),0.3)]" 
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full md:w-3/5 text-text-muted space-y-5 leading-relaxed text-lg flex flex-col justify-center"
          >
            <motion.p whileHover={{ x: 5 }} className="transition-transform duration-200">
              Hello! My name is Krishna Chandra Jha. My interest in technology started back when I was exploring how things work under the hood, which eventually led me to the world of software development and competitive programming.
            </motion.p>
            <motion.p whileHover={{ x: 5 }} className="transition-transform duration-200">
              I am currently pursuing my Bachelor of Technology in Mechanical Engineering at <span className="text-primary-500 font-medium">BIT Mesra</span>, maintaining a GPA of <span className="text-text-main font-semibold">8.10/10</span>. Even with a mechanical background, my true passion lies heavily in coding, solving complex algorithms, and crafting beautiful web applications.
            </motion.p>
            <motion.p whileHover={{ x: 5 }} className="transition-transform duration-200">
              Whether it's building full-stack applications with React or optimizing problem-solving approaches for a Codeforces contest, I'm always eager to learn, build, and push my boundaries.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Row 2: Education Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full"
        >
          <motion.div whileHover={{ y: -5 }} className="glass-card p-8 md:p-10 transition-smooth hover:shadow-[0_0_40px_var(--color-primary-500)] hover:border-primary-500/50">
            <h3 className="text-2xl font-bold text-text-main mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary-500 w-8 h-8" />
              Education Background
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              
              {/* College */}
              <motion.div 
                whileHover={{ x: 10 }}
                className="relative pl-6 border-l-2 border-primary-500/40 transition-transform duration-200"
              >
                <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[9px] top-1 shadow-[0_0_15px_var(--color-primary-500)]"></div>
                <h4 className="text-xl font-bold text-text-main leading-snug mb-1">Birla Institute of Technology, Mesra</h4>
                <p className="text-primary-500 font-medium mb-3">B.Tech in Mechanical Engineering</p>
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="bg-primary-500/10 text-primary-500 px-3 py-1 rounded-full">Aug 2024 - Present</span>
                  <span className="text-text-muted">GPA: <span className="text-text-main font-bold">8.10</span></span>
                </div>
              </motion.div>
              
              {/* High School */}
              <motion.div 
                whileHover={{ x: 10 }}
                className="relative pl-6 border-l-2 border-slate-500/30 transition-transform duration-200"
              >
                <div className="absolute w-4 h-4 bg-slate-400 rounded-full -left-[9px] top-1"></div>
                <h4 className="text-xl font-bold text-text-main leading-snug mb-1">Angels High School (CBSE)</h4>
                <p className="text-text-dim font-medium mb-3">Class 12 (PCM)</p>
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="bg-white/5 text-text-dim px-3 py-1 rounded-full">Apr 2021 - Mar 2023</span>
                  <span className="text-text-muted">Score: <span className="text-text-main font-bold">90.2%</span></span>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;

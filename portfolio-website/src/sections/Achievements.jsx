import React from 'react';
import Section from '../components/Section';
import { Trophy, Star, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const achievements = [
  "AIR 13 in Getting Started With Competitive Programming course by NPTEL, among 6,137 participants.",
  "Achieved Global rank 257 in Codeforces Round 1074, among 43,319 participants worldwide. (January 2026)",
  "Achieved Global rank 803 in LeetCode Weekly Contest 498, among 35,621 participants worldwide. (April 2026)",
  "Ranked 1st in IETE Students' Chapter BIT Mesra Recruitment Test among 109 participants. (January 2025)",
  "Runner Up in Code Verse TECH-A-THON 4.0 competing against ~100 participants. (August 2025)",
  "Achieved a Knight rating (1987) on LeetCode and a Specialist rating (1475) on Codeforces.",
  "Solved 2,000+ algorithmic problems across different platforms like Codeforces, LeetCode, and CodeChef."
];

const profiles = [
  { name: "Codeforces", link: "https://codeforces.com/profile/cyris" },
  { name: "LeetCode", link: "https://leetcode.com/u/Cyris_codes/" },
  { name: "Codolio", link: "https://codolio.com/profile/Chaotic_Cyris07" },
  { name: "GitHub", link: "https://github.com/sumanjha8078-max" }
];

const Achievements = () => {
  return (
    <Section id="achievements" title="Achievements & Coding Profiles">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Achievements List */}
        <div className="flex-1 space-y-4">
          {achievements.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
              className="flex items-start gap-4 glass p-4 rounded-xl hover:bg-glass-hover transition-smooth"
            >
              <div className="mt-1 text-yellow-500">
                <Star size={20} className="fill-yellow-500/20" />
              </div>
              <p className="text-text-muted leading-relaxed">
                {/* Highlight numbers and specific terms */}
                {item.split(/(AIR \d+|Global rank \d+|1st|Runner Up|Knight|Specialist|2,000\+)/g).map((part, i) => 
                  /(AIR \d+|Global rank \d+|1st|Runner Up|Knight|Specialist|2,000\+)/.test(part) ? 
                  <span key={i} className="font-bold text-text-main">{part}</span> : 
                  <span key={i}>{part}</span>
                )}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Coding Profiles */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:w-1/3"
        >
          <div className="glass-card p-8 sticky top-32 transition-smooth">
            <motion.h3 whileHover={{ x: 5 }} className="text-2xl font-bold text-text-main mb-6 flex items-center gap-3">
              <Trophy className="text-primary-400" />
              Profiles
            </motion.h3>
            
            <div className="space-y-4">
              {profiles.map((profile, index) => (
                <motion.a 
                  key={index} 
                  href={profile.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.2, ease: "easeOut" } }}
                  className="flex items-center justify-between p-4 glass rounded-xl hover:shadow-lg hover:shadow-primary-500/20 transition-smooth group"
                >
                  <div className="flex items-center gap-3 text-text-muted group-hover:text-text-main">
                    <Code2 size={20} className="text-primary-400" />
                    <span className="font-medium">{profile.name}</span>
                  </div>
                  <span className="text-primary-400 group-hover:translate-x-2 transition-transform">→</span>
                </motion.a>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-border-glass text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full glass mb-4">
                <span className="text-3xl font-bold text-text-main">2k+</span>
              </div>
              <p className="text-text-dim font-medium">Problems Solved</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Achievements;

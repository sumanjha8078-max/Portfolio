import React from 'react';
import Section from '../components/Section';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-8 pb-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-text-dim"
        >
          I'm currently open to new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
        </motion.p>
        
        <motion.a 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:sumanjha8078@gmail.com"
          className="px-8 py-4 glass-card bg-primary-500/10 hover:bg-primary-500/20 text-text-main font-medium text-lg flex items-center gap-3 group"
        >
          <Mail className="group-hover:animate-bounce text-primary-400" />
          Say Hello
        </motion.a>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-12">
          <motion.a 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2, ease: "easeOut" } }} 
            href="https://www.linkedin.com/in/krishna-chandra-jha-959368289/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-glass-hover transition-smooth">
            <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="p-3 bg-[#0077b5]/20 text-[#0077b5] rounded-xl">
              <FaLinkedin size={24} />
            </motion.div>
            <div className="text-left">
              <h4 className="text-text-main font-medium">LinkedIn</h4>
              <p className="text-sm text-text-dim">Connect with me</p>
            </div>
          </motion.a>
          
          <motion.a 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2, ease: "easeOut" } }} 
            href="https://linktr.ee/krishnachandrajha098" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-glass-hover transition-smooth">
            <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="p-3 bg-green-500/20 text-green-500 rounded-xl">
              <MapPin size={24} />
            </motion.div>
            <div className="text-left">
              <h4 className="text-text-main font-medium">Linktree</h4>
              <p className="text-sm text-text-dim">All my links</p>
            </div>
          </motion.a>
          
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2, ease: "easeOut" } }} 
            className="flex items-center gap-4 p-4 glass rounded-2xl">
            <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="p-3 bg-fuchsia-500/20 text-fuchsia-400 rounded-xl">
              <MapPin size={24} />
            </motion.div>
            <div className="text-left">
              <h4 className="text-text-main font-medium">Location</h4>
              <p className="text-sm text-text-dim">Ranchi, Jharkhand</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2, ease: "easeOut" } }} 
            className="flex items-center gap-4 p-4 glass rounded-2xl">
            <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
              <Phone size={24} />
            </motion.div>
            <div className="text-left">
              <h4 className="text-text-main font-medium">Phone</h4>
              <p className="text-sm text-text-dim">+91-9031548798</p>
            </div>
          </motion.div>
        </div>
        
        <footer className="w-full pt-20 pb-8 text-text-dim text-sm">
          <p>Designed & Built with React, Tailwind & Framer Motion</p>
          <p className="mt-2">© {new Date().getFullYear()} Krishna Chandra Jha</p>
        </footer>
      </div>
    </Section>
  );
};

export default Contact;

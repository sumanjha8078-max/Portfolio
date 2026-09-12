import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const titles = [
  "Krishna Chandra Jha.",
  "Competitive Programmer.",
  "Web Developer."
];

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    // Delay typing until the welcome overlay doors have opened (auth 1500ms + door half-open ~700ms = 2200ms)
    const delayTimer = setTimeout(() => {
      setStartTyping(true);
    }, 2200);
    return () => clearTimeout(delayTimer);
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    let ticker = setTimeout(() => {
      let i = loopNum % titles.length;
      let fullText = titles[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setTypingSpeed(2000); // Wait before deleting
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Wait before typing next
      }
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed, startTyping]);

  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center pt-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
        <div className="w-full lg:w-1/2 space-y-6 z-10 min-h-[250px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary-500 font-mono mb-2">Hi, my name is</p>
            <div className="h-12 sm:h-14 md:h-16 lg:h-20 flex items-center w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-text-main tracking-tight leading-tight whitespace-nowrap">
                {text}
                <span className="animate-pulse text-primary-500">|</span>
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-text-dim mt-2">
              I build things for the web.
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-text-dim max-w-xl leading-relaxed"
          >
            Software Engineer bridging the gap between elegant algorithms and exceptional web experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 pt-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              href="#projects" 
              className="px-6 py-3 rounded-xl bg-primary-500 hover:opacity-90 text-white font-medium transition-colors flex items-center gap-2 group shadow-lg shadow-primary-500/20"
            >
              Check out my work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <div className="flex items-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }} 
                transition={{ duration: 0.2, ease: "easeOut" }}
                href="https://github.com/sumanjha8078-max" target="_blank" rel="noreferrer" className="p-2 text-text-dim hover:text-text-main transition-colors"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }} 
                transition={{ duration: 0.2, ease: "easeOut" }}
                href="https://www.linkedin.com/in/krishna-chandra-jha-959368289/" target="_blank" rel="noreferrer" className="p-2 text-text-dim hover:text-text-main transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }} 
                transition={{ duration: 0.2, ease: "easeOut" }}
                href="mailto:sumanjha8078@gmail.com" className="p-2 text-text-dim hover:text-text-main transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Glass Prism Shape */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-1/2 relative hidden md:flex justify-center items-center h-[400px]"
        >
          <div className="absolute w-72 h-72 bg-primary-500/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute w-64 h-64 bg-primary-300/20 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/2"></div>
          
          {/* Glass floating elements */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="glass w-64 h-64 rounded-3xl absolute transform rotate-12 flex items-center justify-center p-8"
          >
            <div className="w-full h-full border border-border-glass rounded-xl bg-gradient-to-br from-bg-glass to-transparent flex flex-col justify-between p-6">
               <div className="w-12 h-12 rounded-full bg-primary-500/50 mb-4 blur-sm"></div>
               <div className="h-4 bg-text-main/20 rounded-full w-3/4 mb-2"></div>
               <div className="h-4 bg-text-main/20 rounded-full w-1/2"></div>
            </div>
          </motion.div>
          <motion.div 
            animate={{ y: [15, -15, 15], rotate: [10, -5, 10] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="glass w-48 h-48 rounded-full absolute -bottom-10 -left-10 bg-gradient-to-tr from-primary-500/20 to-primary-300/20"
          ></motion.div>
          <motion.div 
            animate={{ y: [-20, 20, -20], x: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="glass w-24 h-24 rounded-xl absolute top-10 right-10 rotate-45"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

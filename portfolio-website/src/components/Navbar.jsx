import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSelector from './ThemeSelector';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = [...navLinks.map(link => link.href.substring(1)), 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled ? 'glass' : 'bg-transparent'
        }`}>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#home" 
            className="text-xl font-bold tracking-tighter text-text-main cursor-pointer"
          >
            KCJ<span className="text-primary-500">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary-500/20 text-primary-500' 
                      : 'text-text-muted hover:text-text-main hover:bg-bg-glass'
                  }`}
                >
                  {link.name}
                </motion.a>
              );
            })}
            
            <div className="h-6 w-px bg-glass-hover mx-2"></div>
            
            <ThemeSelector />
            
            <a 
              href="#contact" 
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ml-2 border cursor-pointer ${
                activeSection === 'contact'
                  ? 'bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/50'
                  : 'bg-primary-500/90 text-white border-primary-500 hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-500/50'
              }`}
            >
              Contact Me
            </a>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeSelector />
            <button 
              className="text-text-muted hover:text-text-main cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-2 p-4 glass rounded-2xl md:hidden flex flex-col gap-2"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`text-base font-medium p-3 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-primary-500/20 text-primary-500' 
                      : 'text-text-muted hover:text-text-main hover:bg-bg-glass'
                  }`}
                >
                  {link.name}
                </motion.a>
              );
            })}
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium p-3 rounded-xl transition-all text-center border mt-2 cursor-pointer ${
                activeSection === 'contact'
                  ? 'bg-primary-500 text-white border-primary-500'
                  : 'bg-primary-500/90 text-white border-primary-500 hover:bg-primary-500'
              }`}
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

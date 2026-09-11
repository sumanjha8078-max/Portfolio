import React, { useState, useEffect, useRef } from 'react';
import { Palette, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const themes = [
  { id: 'default', name: 'Core Blue', color: '#6366f1' },
  { id: 'cyberpunk', name: 'Cyberpunk', color: '#d946ef' },
  { id: 'emerald', name: 'Emerald', color: '#10b981' },
  { id: 'sunset', name: 'Sunset', color: '#f97316' },
  { id: 'space', name: 'Deep Space', color: '#8b5cf6' },
  { id: 'monochrome', name: 'Monochrome', color: '#a1a1aa' },
  { id: 'crimson', name: 'Crimson', color: '#f43f5e' },
  { id: 'aurora', name: 'Aurora', color: '#14b8a6' },
  { id: 'gold', name: 'Gold', color: '#f59e0b' },
  { id: 'matrix', name: 'Matrix', color: '#22c55e' },
  { id: 'ocean', name: 'Ocean', color: '#06b6d4' }
];

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('crimson');
  const [currentMode, setCurrentMode] = useState('light');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'crimson';
    const savedMode = localStorage.getItem('portfolio-mode') || 'light';
    setCurrentTheme(savedTheme);
    setCurrentMode(savedMode);
    document.documentElement.setAttribute('data-color', savedTheme);
    document.documentElement.setAttribute('data-mode', savedMode);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeTheme = (themeId) => {
    setCurrentTheme(themeId);
    localStorage.setItem('portfolio-theme', themeId);
    document.documentElement.setAttribute('data-color', themeId);
  };

  const changeMode = (mode) => {
    setCurrentMode(mode);
    localStorage.setItem('portfolio-mode', mode);
    document.documentElement.setAttribute('data-mode', mode);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-text-muted hover:text-text-main hover:bg-glass-hover rounded-full transition-colors cursor-pointer"
      >
        <Palette size={18} className="text-primary-400" />
        <span className="hidden lg:block">Themes</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-4 w-72 p-3 glass rounded-2xl border border-border-glass shadow-2xl flex flex-col gap-3 z-50 origin-top-right"
          >
            {/* Mode Switcher */}
            <div className="flex bg-bg-glass p-1 rounded-xl border border-border-glass">
              <button 
                onClick={() => changeMode('dark')}
                className={`flex-1 flex items-center justify-center gap-2 py-1.5 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  currentMode === 'dark' ? 'bg-bg-glass text-text-main shadow' : 'text-text-muted hover:text-text-main'
                }`}
              >
                <Moon size={14} /> Dark
              </button>
              <button 
                onClick={() => changeMode('light')}
                className={`flex-1 flex items-center justify-center gap-2 py-1.5 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  currentMode === 'light' ? 'bg-bg-glass text-text-main shadow' : 'text-text-muted hover:text-text-main'
                }`}
              >
                <Sun size={14} /> Light
              </button>
            </div>

            <div className="px-1 text-xs font-semibold text-text-dim uppercase tracking-wider mb-1">
              Select Color
            </div>
            
            <div className="grid grid-cols-2 gap-1 overflow-y-auto max-h-64 pr-1 custom-scrollbar">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => changeTheme(theme.id)}
                  className={`flex items-center gap-2 w-full px-2 py-2 text-left text-sm rounded-xl transition-all cursor-pointer ${
                    currentTheme === theme.id ? 'bg-primary-500/20 text-text-main' : 'text-text-muted hover:bg-glass-hover'
                  }`}
                >
                  <span 
                    className="w-3 h-3 rounded-full flex-shrink-0 shadow-sm border border-border-glass"
                    style={{ backgroundColor: theme.color }}
                  ></span>
                  <span className="truncate">{theme.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;

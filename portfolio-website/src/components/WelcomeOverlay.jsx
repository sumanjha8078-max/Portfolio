import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Orbit, CheckCircle2 } from 'lucide-react';

const WelcomeOverlay = ({ onComplete }) => {
  const [accessGranted, setAccessGranted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate an authentication/loading delay before opening the airlock
    const timer = setTimeout(() => {
      setAccessGranted(true);
    }, 1500);

    // Call onComplete after the doors finish sliding away
    const completionTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete(), 500); // Small delay to let React unmount cleanly
    }, 3200);

    return () => {
      clearTimeout(timer);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col pointer-events-none overflow-hidden text-text-main"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        {/* Top Door */}
        <motion.div
          className="relative w-full h-1/2 bg-bg-main border-b-[1px] border-primary-500/30 flex items-end justify-center overflow-hidden shadow-2xl z-10"
          initial={{ y: 0 }}
          animate={{ y: accessGranted ? '-100%' : 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
        >
          {/* Subtle horizontal grid lines on the door */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_bottom,transparent_49%,currentColor_50%,transparent_51%)] bg-[length:100%_40px] text-text-main" />
          
          {/* Top half of the center lock ring */}
          <div className="absolute -bottom-[1px] w-64 h-32 border-[1px] border-b-0 border-primary-500/50 rounded-t-full bg-bg-main/90 backdrop-blur-md flex items-end justify-center pb-2 z-20">
            <motion.div
              animate={{ rotate: 180 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-[20px] text-primary-500/40"
            >
              <Orbit size={180} strokeWidth={0.5} />
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Door */}
        <motion.div
          className="relative w-full h-1/2 bg-bg-main border-t-[1px] border-primary-500/30 flex items-start justify-center overflow-hidden shadow-2xl z-10"
          initial={{ y: 0 }}
          animate={{ y: accessGranted ? '100%' : 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
        >
          {/* Subtle horizontal grid lines on the door */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_bottom,transparent_49%,currentColor_50%,transparent_51%)] bg-[length:100%_40px] text-text-main" />
          
          {/* Bottom half of the center lock ring */}
          <div className="absolute -top-[1px] w-64 h-32 border-[1px] border-t-0 border-primary-500/50 rounded-b-full bg-bg-main/90 backdrop-blur-md flex items-start justify-center pt-2 z-20">
             <motion.div
              animate={{ rotate: -180 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[20px] text-primary-500/40"
            >
              <Orbit size={180} strokeWidth={0.5} />
            </motion.div>
          </div>
        </motion.div>

        {/* Center UI (Status Text) */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: accessGranted ? 0 : 1, scale: accessGranted ? 1.1 : 1 }}
             transition={{ duration: 0.5 }}
             className="flex flex-col items-center gap-4 text-center px-4"
          >
            <div className="text-primary-500 font-mono tracking-[0.2em] text-xs md:text-sm uppercase">
              Welcome to
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-text-main tracking-widest">
              CYRIS'S GALAXY
            </h1>
            
            <div className="mt-6 h-8 flex items-center justify-center">
              {!accessGranted ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: [0, 1, 0] }} 
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-primary-400 font-mono text-xs md:text-sm uppercase tracking-widest"
                >
                  Authenticating...
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-emerald-500 font-mono text-xs md:text-sm uppercase tracking-widest"
                >
                  <CheckCircle2 size={16} /> Access Granted
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeOverlay;

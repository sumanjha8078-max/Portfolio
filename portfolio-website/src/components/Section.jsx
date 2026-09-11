import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-text-main flex items-center gap-4"
        >
          <span className="h-[2px] w-12 bg-primary-500 rounded-full inline-block"></span>
          {title}
        </motion.h2>
      )}
      <div className="mt-12">
        {children}
      </div>
    </section>
  );
};

export default Section;

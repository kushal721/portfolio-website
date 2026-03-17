import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const jokes = portfolioData.personal.taglines.map(tagline => tagline.text);

const SystemInsights: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % jokes.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ 
      minHeight: '32px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      marginBottom: 'var(--spacing-xl)',
      padding: '0 var(--spacing-md)'
    }}>
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mono-text"
          style={{ 
            fontSize: 'clamp(9px, 2.5vw, 10px)', 
            color: 'var(--text-secondary)', 
            letterSpacing: '0.05em',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.5
          }}
        >
          <span style={{ color: 'var(--nepal-blue)', fontWeight: 800 }}>{portfolioData.personal.taglines[index % portfolioData.personal.taglines.length]?.category || "[SYSTEM_INSIGHT]"}:</span> {jokes[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default SystemInsights;

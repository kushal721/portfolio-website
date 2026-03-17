import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

interface ServicesProps {
  onViewClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onViewClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="light-box-3d group"
      style={{ 
        padding: '24px',
        width: '100%',
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}
      onClick={onViewClick}
    >
      {/* Decorative Diagnostic Bar */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '2px', 
        background: 'linear-gradient(90deg, transparent, var(--accent-blue), transparent)',
        opacity: 0.5
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <span className="mono-text" style={{ color: 'var(--accent-blue)', fontWeight: 800, fontSize: '10px', letterSpacing: '2px' }}>
          {portfolioData.sections.services.headerTag}
        </span>
        <div style={{ display: 'flex', gap: '2px' }}>
          {[1, 2, 3].map(i => (
            <motion.div 
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              style={{ width: '3px', height: '3px', background: 'var(--accent-blue)', borderRadius: '50%' }}
            />
          ))}
        </div>
      </div>

      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: 800,
        lineHeight: 1.1,
        color: 'var(--text-main)',
        marginBottom: '12px'
      }}>
        {portfolioData.sections.services.title}
      </h2>

      <p style={{ 
        fontSize: '13px', 
        color: 'var(--text-muted)', 
        lineHeight: 1.6,
        marginBottom: '20px',
        flex: 1
      }}>
        {portfolioData.sections.services.subtitle}
      </p>
      
      {/* Visual Status Bar */}
      <div style={{ 
        width: '100%', 
        height: '4px', 
        background: 'rgba(255,255,255,0.05)', 
        borderRadius: '2px',
        marginBottom: '16px',
        overflow: 'hidden'
      }}>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '65%' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ height: '100%', background: 'var(--accent-blue)', boxShadow: '0 0 10px var(--accent-blue)' }}
        />
      </div>

      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'var(--text-main)',
        fontWeight: 800,
        fontSize: '9px',
        opacity: 0.8
      }} className="mono-text">
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ArrowRight size={12} className="hover-highlight" /> {portfolioData.sections.services.cta}
        </span>
        <span style={{ opacity: 0.4 }}>SEC_AUTH_01</span>
      </div>
    </motion.div>
  );
};

export default Services;

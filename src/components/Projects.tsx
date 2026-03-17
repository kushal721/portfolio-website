import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

interface ProjectsProps {
  onViewClick: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewClick }) => {
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
      {/* Decorative Side Accents */}
      <div style={{ 
        position: 'absolute', 
        left: 0, 
        top: '20%', 
        bottom: '20%', 
        width: '1px', 
        background: 'linear-gradient(to bottom, transparent, var(--accent-blue), transparent)',
        opacity: 0.3
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <span className="mono-text" style={{ color: 'var(--accent-blue)', fontWeight: 800, fontSize: '10px', letterSpacing: '2px' }}>
          {portfolioData.sections.projects.headerTag}
        </span>
        <div style={{ 
          fontSize: '8px', 
          color: 'var(--accent-blue)', 
          opacity: 0.6,
          padding: '2px 6px',
          border: '1px solid currentColor',
          borderRadius: '4px'
        }} className="mono-text">
          V.02_STABLE
        </div>
      </div>

      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: 800,
        lineHeight: 1.1,
        color: 'var(--text-main)',
        marginBottom: '12px'
      }}>
        {portfolioData.sections.projects.title}
      </h2>

      <p style={{ 
        fontSize: '13px', 
        color: 'var(--text-muted)', 
        lineHeight: 1.6,
        marginBottom: '20px',
        flex: 1
      }}>
        {portfolioData.sections.projects.subtitle}
      </p>
      
      {/* Node Grid Visualization */}
      <div style={{ 
        display: 'flex', 
        gap: '4px', 
        marginBottom: '20px',
        opacity: 0.4 
      }}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} style={{ 
            width: '15%', 
            height: '2px', 
            background: i <= 4 ? 'var(--accent-blue)' : 'rgba(255,255,255,0.1)',
            borderRadius: '1px'
          }} />
        ))}
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
          <ArrowRight size={12} className="hover-highlight" /> {portfolioData.sections.projects.cta}
        </span>
        <span style={{ opacity: 0.4 }}>ARCH_NODE_07</span>
      </div>
    </motion.div>
  );
};
export default Projects;

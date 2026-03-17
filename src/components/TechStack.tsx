import React from 'react';
import { motion } from 'framer-motion';
import { 
  Flame, Layers, Brain, Eye, Cpu, Terminal, Zap, 
  Database, Cloud, GitBranch, BarChart3, Code2,
  Server, Github, Laptop, Share2, Hexagon, 
  Infinity as InfinityIcon, Monitor,
  Waves, Settings, BoxSelect, Rocket, Globe,
  Activity as ActivityIconAlias
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import portfolioDataRaw from '../data/portfolio.json';

const portfolioData = portfolioDataRaw as any;

// Helper to map icon names to components
const getIcon = (name: string) => {
  const icons: Record<string, LucideIcon> = {
    Brain, Flame, Waves, Code2, Globe, Server, Zap, BoxSelect, Cloud, BarChart3, 
    GitBranch, Laptop, Rocket, Monitor, Terminal, Layers, Cpu, Activity: ActivityIconAlias, 
    Share2, Database, Eye, Infinity: InfinityIcon, Settings, Github, Hexagon
  };
  return icons[name] || Code2;
};

// Flatten all categories for the marquee
export const techItems = portfolioData.sections.techStack.categories.flatMap((cat: any) => 
  cat.items.map((item: any) => ({
    ...item,
    Icon: getIcon(item.icon)
  }))
);

interface TechStackProps {
  onViewFull: () => void;
}

const TechStack: React.FC<TechStackProps> = ({ onViewFull }) => {
  const duplicatedTechs = [...techItems, ...techItems];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: 'var(--spacing-md)' }}>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: 'var(--spacing-lg) 0 0 0' }}>
        <div 
          style={{ 
            width: '100%', 
            maxWidth: '1300px',
            overflow: 'hidden', 
            background: 'var(--glass-bg)', 
            backdropFilter: 'var(--glass-blur)',
            WebkitBackdropFilter: 'var(--glass-blur)',
            border: '1px solid var(--border-line)', 
            borderRadius: '100px', 
            padding: '8px 0', 
            position: 'relative',
            zIndex: 20,
            boxShadow: 'var(--glass-shadow)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85% , transparent)'
          }}
        >
          <div style={{ position: 'relative', display: 'flex', width: '100%' }}>
            <motion.div 
              style={{ 
                display: 'flex', 
                whiteSpace: 'nowrap',
                gap: '40px',
                alignItems: 'center',
                padding: '0 40px'
              }}
              animate={{ x: [0, "-50%"] }}
              transition={{ 
                x: {
                  duration: 60, 
                  repeat: Infinity, 
                  ease: "linear" 
                }
              }}
            >
              {duplicatedTechs.map((tech, index) => (
                <motion.div 
                  key={tech.name + index} 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: '8px',
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                    padding: '12px 16px',
                    borderRadius: '100px',
                    transition: 'all 0.4s var(--ease-premium)',
                    position: 'relative'
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    background: 'rgba(255, 255, 255, 0.8)',
                    zIndex: 100,
                    boxShadow: `0 0 20px ${tech.color}22`
                  }}
                >
                  <motion.div 
                    animate={{ 
                      filter: [`drop-shadow(0 0 2px ${tech.color}00)`, `drop-shadow(0 0 8px ${tech.color}44)`, `drop-shadow(0 0 2px ${tech.color}00)`] 
                    }}
                    transition={{ 
                      duration: 3 + Math.random() * 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: tech.color,
                    }}
                  >
                    <tech.Icon size={16} strokeWidth={2.5} />
                  </motion.div>
                  <span 
                    className="mono-text" 
                    style={{ 
                      fontSize: '8px', 
                      fontWeight: 800, 
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'var(--text-main)'
                    }}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <button 
        onClick={onViewFull}
        className="mono-text"
        style={{
          background: 'rgba(0, 56, 147, 0.05)',
          border: '1px solid var(--nepal-blue)',
          padding: '12px 32px',
          borderRadius: '100px',
          fontSize: '10px',
          fontWeight: 800,
          color: 'var(--nepal-blue)',
          cursor: 'pointer',
          transition: 'all 0.4s var(--ease-premium)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginTop: '0px',
          zIndex: 30,
          boxShadow: '0 4px 12px rgba(0, 56, 147, 0.1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--nepal-blue)';
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 56, 147, 0.2)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0, 56, 147, 0.05)';
          e.currentTarget.style.color = 'var(--nepal-blue)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 56, 147, 0.1)';
          e.currentTarget.style.transform = 'translateY(0px)';
        }}
      >
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor', boxShadow: '0 0 8px currentColor' }}></div>
        {portfolioData.sections.techStack?.cta || "FETCH_FULL_STACK_DIAGNOSTICS"}
      </button>
    </div>
  );
};

export default TechStack;

import React from 'react';
import { motion } from 'framer-motion';
import { 
  X, Brain, Flame, Waves, Code2, Globe, Server, Zap, BoxSelect, Cloud, BarChart3, 
  GitBranch, Laptop, Rocket, Monitor, Terminal, Layers, Cpu, Activity, 
  Share2, Database, Eye, Infinity as InfinityIcon, Settings, Github, Hexagon
} from 'lucide-react';
import portfolioDataRaw from '../data/portfolio.json';

const portfolioData = portfolioDataRaw as any;

interface TechStackModalProps {
  onClose: () => void;
}

const getIcon = (name: string) => {
  const icons: Record<string, any> = {
    Brain, Flame, Waves, Code2, Globe, Server, Zap, BoxSelect, Cloud, BarChart3, 
    GitBranch, Laptop, Rocket, Monitor, Terminal, Layers, Cpu, Activity, 
    Share2, Database, Eye, Infinity: InfinityIcon, Settings, Github, Hexagon
  };
  return icons[name] || Code2;
};

const TechStackModal: React.FC<TechStackModalProps> = ({ onClose }) => {
  const categories = portfolioData.sections.techStack.categories;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        style={{
          width: '95%',
          maxWidth: '900px',
          maxHeight: '90vh',
          background: 'var(--bg-primary)',
          border: '1px solid var(--border-line)',
          borderRadius: '32px',
          boxShadow: 'var(--glass-shadow)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          margin: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="glass-flare"></div>

        {/* Header */}
        <div style={{
          padding: '24px 32px',
          borderBottom: '1px solid var(--border-line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(255,255,255,0.02)',
          zIndex: 10
        }}>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)' }}>Full Tech Stack</h2>
            <p className="mono-text" style={{ fontSize: '9px', marginTop: '4px', opacity: 0.6 }}>SYSTEM_DIAGNOSTICS // CATEGORIZED_INVENTORY</p>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-main)'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content - Categorized sections */}
        <div style={{ padding: '32px', overflowY: 'auto', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {categories.map((cat: any, catIdx: number) => (
              <motion.div 
                key={cat.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: catIdx * 0.1 }}
                style={{ width: '100%' }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  marginBottom: '16px',
                  paddingBottom: '8px',
                  borderBottom: '1px solid var(--border-line)'
                }}>
                  <div style={{ width: '4px', height: '16px', background: 'var(--nepal-blue)', borderRadius: '2px' }}></div>
                  <h3 className="mono-text" style={{ fontSize: '12px', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '0.1em' }}>
                    {cat.title}
                  </h3>
                  <span style={{ fontSize: '9px', opacity: 0.4, fontWeight: 600 }}>[{cat.items.length} DEVICES]</span>
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', 
                  gap: '12px' 
                }}>
                  {cat.items.map((item: any, itemIdx: number) => {
                    const Icon = getIcon(item.icon);
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (catIdx * 0.1) + (itemIdx * 0.02) }}
                        style={{
                          padding: '12px',
                          borderRadius: '16px',
                          border: '1px solid var(--border-line)',
                          background: 'rgba(0,0,0,0.01)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                          textAlign: 'center',
                          transition: 'all 0.3s var(--ease-premium)'
                        }}
                        whileHover={{ 
                          translateY: -4, 
                          background: 'rgba(255, 255, 255, 0.03)', 
                          boxShadow: `0 8px 30px ${item.color}22`,
                          borderColor: item.color 
                        }}
                      >
                        <div style={{ 
                          color: item.color,
                          background: 'var(--glass-bg)',
                          padding: '8px',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Icon size={18} strokeWidth={2.5} />
                        </div>
                        <span className="mono-text" style={{ fontSize: '8px', fontWeight: 800 }}>{item.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: '16px 32px', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border-line)', textAlign: 'center' }}>
          <p className="mono-text" style={{ fontSize: '8px', opacity: 0.5 }}>SYSTEM_STATUS: OPTIMAL // ALL_MODULES_FUNCTIONAL</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TechStackModal;

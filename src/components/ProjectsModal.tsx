import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Brain, Cpu, Database, Activity, MessageSquare, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

interface Project {
  title: string;
  description: string;
  tag: string;
  icon: string;
  color: string;
  architecture: string;
}

const getIcon = (name: string) => {
  const icons: Record<string, any> = { Brain, Cpu, Database, Activity, MessageSquare, Zap };
  return icons[name] || Cpu;
};

interface ProjectsModalProps {
  onClose: () => void;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = getIcon(project.icon);

  return (
    <motion.div
      layout
      className="light-box-3d"
      style={{ minHeight: isExpanded ? 'auto' : '320px', width: '100%', height: '100%' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div style={{ color: project.color, marginBottom: '16px', opacity: 0.9, flexShrink: 0 }}><Icon size={24} /></div>
        <span className="mono-text" style={{ color: project.color, fontWeight: 800, marginBottom: '8px' }}>
          [{project.tag}]
        </span>
        <h3 style={{ fontSize: '20px', marginBottom: '8px', letterSpacing: '-0.03em', color: 'var(--text-main)', lineHeight: 1.2 }}>{project.title}</h3>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, maxWidth: '280px', margin: '0 auto' }}>
          {project.description}
        </p>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            style={{ marginTop: '16px', borderTop: '1px solid var(--border-line)', paddingTop: '16px', width: '100%' }}
          >
            <h4 className="mono-text" style={{ color: project.color, marginBottom: '8px', fontWeight: 800, fontSize: '9px' }}>// ARCHITECTURAL_SCHEMA</h4>
            <p style={{ fontSize: '12px', lineHeight: 1.5, color: 'var(--text-main)', opacity: 0.9, textAlign: 'center' }}>{project.architecture}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ 
          marginTop: 'auto', 
          paddingTop: '16px',
          fontSize: '10px', 
          fontWeight: 800, 
          color: project.color, 
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}
      >
        {isExpanded ? <>Conceal_Node <ChevronUp size={12} /></> : <>Explore_Architecture <ChevronDown size={12} /></>}
      </motion.div>
    </motion.div>
  );
};

const ProjectsModal: React.FC<ProjectsModalProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        style={{
          width: '95%',
          maxWidth: '1000px',
          maxHeight: '85vh',
          background: 'var(--bg-primary)',
          border: '1px solid var(--border-line)',
          borderRadius: '24px',
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

        {/* Stationary Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-line)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-main)',
            zIndex: 100,
            transition: 'all 0.3s ease',
            boxShadow: 'var(--shadow-3d)'
          }}
        >
          <X size={18} />
        </button>

        {/* Scrollable Content */}
        <div style={{ 
          padding: '24px',
          paddingTop: '60px',
          overflowY: 'auto',
          flex: 1
        }}>
          <div style={{ marginBottom: '32px', textAlign: 'center' }}>
            <span className="mono-text" style={{ color: 'var(--nepal-blue)', fontWeight: 700, fontSize: '10px' }}>
              &gt; INNOVATION_INDEX_PORT: 80
            </span>
            <h2 style={{ fontSize: '32px', color: 'var(--text-main)', marginTop: '8px' }}>{portfolioData.sections.projects.title}</h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', 
            gap: '16px',
            width: '100%',
            alignItems: 'start',
            justifyContent: 'center'
          }}>
            {portfolioData.sections.projects.items.map((project: any) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsModal;

import React from 'react';
import { motion } from 'framer-motion';
import { X, Brain, Code, Terminal, Globe, Cpu, Smartphone } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

interface Service {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

const getIcon = (name: string) => {
  const icons: Record<string, any> = { Brain, Code, Terminal, Globe, Cpu, Smartphone };
  return icons[name] || Code;
};

interface ServicesModalProps {
  onClose: () => void;
}

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="light-box-3d"
      style={{ 
        padding: '20px',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
        minHeight: 'auto',
        justifyContent: 'flex-start'
      }}
    >
      <div style={{ 
        color: 'var(--nepal-blue)', 
        background: 'rgba(0,56,147,0.05)', 
        padding: '16px', 
        borderRadius: '16px',
        marginBottom: '16px',
        flexShrink: 0
      }}>
        {React.createElement(getIcon(service.icon), { size: 32 })}
      </div>
      <h3 style={{ fontSize: '18px', marginBottom: '12px', color: 'var(--text-main)', lineHeight: 1.2 }}>{service.title}</h3>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
        {service.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center', marginTop: 'auto' }}>
        {service.tags.map(tag => (
          <span key={tag} className="mono-text" style={{ 
            fontSize: '8px', 
            background: 'rgba(0,0,0,0.03)', 
            padding: '3px 8px', 
            borderRadius: '4px',
            color: 'var(--text-secondary)'
          }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ServicesModal: React.FC<ServicesModalProps> = ({ onClose }) => {
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

        {/* Scrollable Content Container */}
        <div style={{ 
          padding: '24px',
          paddingTop: '60px',
          overflowY: 'auto',
          flex: 1
        }}>
          <div style={{ marginBottom: '32px', textAlign: 'center' }}>
            <span className="mono-text" style={{ color: 'var(--nepal-crimson)', fontWeight: 700, fontSize: '10px' }}>
              // SYSTEM_CAPABILITIES_PORT: 443
            </span>
            <h2 style={{ fontSize: '32px', color: 'var(--text-main)', marginTop: '8px' }}>{portfolioData.sections.services.title}</h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', 
            gap: '16px',
            width: '100%',
            alignItems: 'stretch',
            justifyContent: 'center'
          }}>
            {portfolioData.sections.services.items.map((service: any, index: number) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesModal;

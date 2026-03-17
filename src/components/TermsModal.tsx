import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import portfolioDataRaw from '../data/portfolio.json';

const portfolioData = portfolioDataRaw as any;

interface TermsModalProps {
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ onClose }) => {
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
          maxWidth: '800px',
          maxHeight: '80vh',
          background: 'var(--bg-primary)',
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
        {/* Header */}
        <div style={{ 
          padding: '16px 24px', 
          borderBottom: '1px solid var(--border-line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'var(--glass-bg)'
        }}>
          <span className="mono-text" style={{ fontSize: '10px', fontWeight: 800, color: 'var(--nepal-blue)' }}>
            {portfolioData.modals.terms.headerTag}
          </span>
          <button 
            onClick={onClose}
            style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-main)', opacity: 0.6 }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '32px', overflowY: 'auto', flex: 1, textAlign: 'left' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>{portfolioData.modals.terms.title}</h2>
          <p className="mono-text" style={{ fontSize: '10px', color: 'var(--text-secondary)', marginBottom: '24px' }}>{portfolioData.modals.terms.version}</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '14px', lineHeight: 1.6 }}>
            {portfolioData.modals.terms.sections.map((section: { title: string, content: string }, index: number) => (
              <section key={index}>
                <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>{section.title}</h3>
                <p>
                  {section.content}
                  {index === portfolioData.modals.terms.sections.length - 1 && (
                    <> <span style={{ color: 'var(--nepal-crimson)', fontWeight: 800 }}>{portfolioData.personal.contactEmail}</span></>
                  )}
                </p>
              </section>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border-line)', textAlign: 'center' }}>
          <p className="mono-text" style={{ fontSize: 'clamp(7px, 2vw, 9px)', lineHeight: 1.4, opacity: 0.6 }}>{portfolioData.modals.terms.footer}</p>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default TermsModal;

import React from 'react';
import NepalFlag from './NepalFlag';
import portfolioData from '../data/portfolio.json';

interface NavProps {
  onWorkClick: () => void; 
  onContactClick: () => void;
  onThemeToggle: () => void;
  isDarkMode: boolean;
}

const Nav: React.FC<NavProps> = ({ onWorkClick, onContactClick, onThemeToggle, isDarkMode }) => {
  return (
    <nav style={{ 
      background: 'var(--glass-bg)', 
      backdropFilter: 'var(--glass-blur)', 
      WebkitBackdropFilter: 'var(--glass-blur)',
      borderBottom: 'none',
      boxShadow: 'none', // Removed any potential shadow
      position: 'relative',
      overflow: 'hidden', // Contain the glass-flare
      zIndex: 100000
    }}>
      <div className="glass-flare"></div>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left-aligned Identity Group */}
        <div 
          className="easter-egg-trigger"
          style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', cursor: 'pointer' }}
        >
          <NepalFlag size={32} />
          <div className="animate-flag-text" style={{ 
            fontSize: '14px', 
            letterSpacing: '0.05em', 
            fontFamily: 'var(--font-mono)',
            paddingTop: '2px' 
          }}>
            {portfolioData.navigation.logoTitle}
          </div>
        </div>

        {/* Right-aligned Navigation Links */}
        <div className="mono-text" style={{ 
          display: 'flex', 
          gap: 'var(--spacing-lg)', 
          fontSize: '11px', 
          fontWeight: 700
        }}>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onWorkClick();
            }}
            style={{ 
              color: 'var(--text-main)', 
              textDecoration: 'none', 
              opacity: 0.8, 
              border: 'none',
              background: 'transparent',
              borderBottom: '1.5px solid transparent', 
              paddingBottom: '2px',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: 700,
              fontFamily: 'inherit',
              transition: 'all 0.3s var(--ease-premium)' 
            }} 
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.borderBottomColor = 'var(--text-main)';
            }} 
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.8';
              e.currentTarget.style.borderBottomColor = 'transparent';
            }}
          >
            {portfolioData.navigation.links.find(l => l.id === "work")?.label || "01_BLUEPRINT"}
          </button>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              onContactClick();
            }}
            style={{ 
              color: 'var(--text-main)', 
              textDecoration: 'none', 
              opacity: 0.8, 
              border: 'none',
              background: 'transparent',
              borderBottom: '1.5px solid transparent', 
              paddingBottom: '2px',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: 700,
              fontFamily: 'inherit',
              transition: 'all 0.3s var(--ease-premium)' 
            }} 
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.borderBottomColor = 'var(--text-main)';
            }} 
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.8';
              e.currentTarget.style.borderBottomColor = 'transparent';
            }}
          >
            {portfolioData.navigation.links.find(l => l.id === "contact")?.label || "02_CONNECT"}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onThemeToggle();
            }}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              padding: '0 4px',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--gold-accent)' }}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

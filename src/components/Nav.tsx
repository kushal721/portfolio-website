import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FileText, Menu, X } from 'lucide-react';
import { profile } from '../content';

export interface NavLink {
  id: string;
  label: string;
}

const Nav: React.FC<{ links: NavLink[] }> = ({ links }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#top" className="logo" onClick={() => setOpen(false)}>
            <span className="logo-mark">{profile.initials}</span>
            {profile.handle}
          </a>
          <nav className="nav-links">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`}>
                {l.label}
              </a>
            ))}
          </nav>
          {profile.resume && (
            <a className="btn btn-primary nav-resume" href={profile.resume} target="_blank" rel="noreferrer">
              <FileText size={16} /> Download CV
            </a>
          )}
          <button
            className="icon-btn nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            {profile.resume && (
              <a className="btn btn-primary" href={profile.resume} target="_blank" rel="noreferrer">
                <FileText size={16} /> Download CV
              </a>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;

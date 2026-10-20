import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import './Global.css';
import Nav, { type NavLink } from './components/Nav';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { EducationSection, ExperienceSection } from './components/Experience';
import Footer from './components/Footer';
import { education, experience, projects, site, skills } from './content';

if (site.accent) document.documentElement.style.setProperty('--accent', site.accent);

// Sections in page order; empty ones are skipped.
type Section = NavLink & { show: boolean; render: (index: string) => React.ReactNode };

const sections = ([
  { id: 'projects', label: 'Projects', show: projects.length > 0, render: (i) => <Projects index={i} /> },
  { id: 'experience', label: 'Experience', show: experience.length > 0, render: (i) => <ExperienceSection index={i} /> },
  { id: 'skills', label: 'Skills', show: skills.length > 0, render: (i) => <Skills index={i} /> },
  { id: 'education', label: 'Education', show: education.length > 0, render: (i) => <EducationSection index={i} /> },
] satisfies Section[]).filter((s) => s.show);

const navLinks: NavLink[] = [...sections, { id: 'contact', label: 'Contact' }];

const App: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    // Show past the first screen, and hide again once the footer (which has its own link) is in view.
    const onScroll = () => {
      const footerTop = document.getElementById('contact')?.getBoundingClientRect().top ?? Infinity;
      setShowTop(window.scrollY > window.innerHeight && footerTop > window.innerHeight);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Nav links={navLinks} />
      <main>
        <Hero />
        <Highlights />
        {sections.map((s, i) => (
          <React.Fragment key={s.id}>{s.render(String(i + 1).padStart(2, '0'))}</React.Fragment>
        ))}
      </main>
      <Footer links={sections} />
      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#top"
            className="back-to-top"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
          >
            <ArrowUp size={15} /> <span>Back to top</span>
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;

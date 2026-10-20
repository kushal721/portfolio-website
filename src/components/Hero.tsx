import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { contact, profile } from '../content';

// Turns "**bold**" segments into <strong>.
const renderRich = (text: string) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));

const item = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const Hero: React.FC = () => (
  <section className="hero" id="top">
    <motion.div {...item(0)} className="hero-avatar">
      {profile.photo ? <img src={profile.photo} alt={profile.name} /> : <span>{profile.initials}</span>}
    </motion.div>
    {profile.available && (
      <motion.span {...item(0.05)} className="hero-available">
        {profile.available}
      </motion.span>
    )}
    <motion.h1 {...item(0.1)}>I'm {profile.firstName}.</motion.h1>
    <motion.div {...item(0.2)} className="hero-meta">
      <span className="hero-role mono">{profile.role}</span>
      <span className="hero-location">
        <MapPin size={14} /> {profile.location}
      </span>
    </motion.div>
    <motion.p {...item(0.3)} className="hero-intro">
      {renderRich(profile.intro)}
    </motion.p>
    <motion.div {...item(0.4)} className="hero-ctas">
      {profile.resume && (
        <a className="btn btn-primary" href={profile.resume} target="_blank" rel="noreferrer">
          <FileText size={15} /> View CV
        </a>
      )}
      <a className="btn" href="#projects">
        See projects <ArrowRight size={15} />
      </a>
    </motion.div>
    <motion.div {...item(0.5)} className="hero-socials">
      {contact.github && (
        <a className="icon-btn" href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={17} />
        </a>
      )}
      {contact.linkedin && (
        <a className="icon-btn" href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={17} />
        </a>
      )}
      <a className="icon-btn" href={`mailto:${contact.email}`} aria-label="Email">
        <Mail size={17} />
      </a>
    </motion.div>
    <span className="scroll-hint mono">Scroll</span>
  </section>
);

export default Hero;

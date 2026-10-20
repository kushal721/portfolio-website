import React from 'react';
import { ArrowUp, ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { contact, profile } from '../content';
import type { NavLink } from './Nav';
import { Reveal } from './ui';

// Contact call-to-action plus site footer, in one dark block.
const Footer: React.FC<{ links: NavLink[] }> = ({ links }) => (
  <footer className="footer" id="contact">
    <div className="container">
      <Reveal className="footer-cta">
        <div>
          <span className="footer-eyebrow mono">Contact</span>
          <h2>{contact.title}</h2>
          <p>{contact.text}</p>
        </div>
        <div className="footer-cta-actions">
          <a className="btn btn-light" href={`mailto:${contact.email}`}>
            <Mail size={15} /> Email me
          </a>
          {profile.resume && (
            <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">
              <FileText size={15} /> View CV
            </a>
          )}
        </div>
      </Reveal>

      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#top" className="logo">
            <span className="logo-mark">{profile.initials}</span>
            {profile.name}
          </a>
          <p>{profile.role}</p>
          <p className="footer-loc">
            <MapPin size={14} /> {profile.location}
          </p>
        </div>

        <nav className="footer-col footer-nav">
          <h3 className="mono">Navigate</h3>
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer-col">
          <h3 className="mono">Get in touch</h3>
          <a href={`mailto:${contact.email}`}>
            <Mail size={15} /> {contact.email}
          </a>
          {contact.phone && (
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
              <Phone size={15} /> {contact.phone}
            </a>
          )}
          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} className="ext" />
            </a>
          )}
          {contact.github && (
            <a href={contact.github} target="_blank" rel="noreferrer">
              <Github size={15} /> GitHub <ArrowUpRight size={13} className="ext" />
            </a>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="footer-made">
          <img src="/images/nepal-flag.gif" alt="" width={14} height={17} /> Designed and built in Nepal
        </span>
        <a href="#top" className="footer-top">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, Globe, Images, Play, X } from 'lucide-react';
import { projects, type Project } from '../content';
import { Reveal, SectionHeader } from './ui';

type Media = { kind: 'video' } | { kind: 'image'; src: string; caption?: string };

const mediaOf = (p: Project): Media[] => [
  ...(p.video?.youtube || p.video?.src ? [{ kind: 'video' as const }] : []),
  ...(p.images ?? []).map((img) => ({ kind: 'image' as const, ...img })),
];

const hostname = (url: string) => {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
};

const VideoPlayer: React.FC<{ project: Project }> = ({ project }) => {
  const { video } = project;
  if (video?.youtube) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${video.youtube}?rel=0`}
        title={`${project.title} demo`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  return <video src={video?.src} poster={video?.poster} controls autoPlay muted loop playsInline preload="metadata" />;
};

const Gallery: React.FC<{ project: Project }> = ({ project }) => {
  const media = mediaOf(project);
  const [active, setActive] = useState(0);
  const step = (d: number) => setActive((i) => (i + d + media.length) % media.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % media.length);
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + media.length) % media.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [media.length]);

  if (media.length === 0) return null;
  const current = media[active];

  return (
    <div className="gallery">
      <div className="gallery-main">
        {current.kind === 'video' ? (
          <VideoPlayer project={project} />
        ) : (
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.caption ?? project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}
        {media.length > 1 && (
          <>
            <button className="gallery-nav prev" aria-label="Previous" onClick={() => step(-1)}>
              <ChevronLeft size={18} />
            </button>
            <button className="gallery-nav next" aria-label="Next" onClick={() => step(1)}>
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>
      <div className="gallery-bar">
        <span>{current.kind === 'video' ? 'Demo walkthrough' : current.caption}</span>
        <span className="mono">
          {active + 1} / {media.length}
        </span>
      </div>
      {media.length > 1 && (
        <div className="thumbs">
          {media.map((m, i) => (
            <button
              key={m.kind === 'video' ? 'video' : m.src}
              className={`thumb ${i === active ? 'active' : ''} ${m.kind === 'video' ? 'thumb-video' : ''}`}
              onClick={() => setActive(i)}
              aria-label={m.kind === 'video' ? 'Play demo video' : `Show ${m.caption ?? `image ${i + 1}`}`}
            >
              {m.kind === 'video' ? (
                <>
                  <Play size={16} /> Demo
                </>
              ) : (
                <img src={m.src} alt="" loading="lazy" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const { links } = project;
  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-head">
          <div>
            <div className="project-meta mono">{project.meta}</div>
            <h3>{project.title}</h3>
          </div>
          <button className="icon-btn" aria-label="Close" onClick={onClose}>
            <X size={18} />
          </button>
        </header>
        <Gallery project={project} />
        <div className="modal-body">
          <div>
            {project.description && <p className="modal-desc">{project.description}</p>}
            {project.features && project.features.length > 0 && (
              <>
                <h4 className="modal-sub mono">What it does</h4>
                <ul className="features">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </>
            )}
            {project.stack && project.stack.length > 0 && (
              <>
                <h4 className="modal-sub mono">Built with</h4>
                <div className="chips">
                  {project.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
          <aside className="modal-side">
            {project.stats?.map((s) => (
              <div key={s.label}>
                <div className="stat-label mono">{s.label}</div>
                <div className="stat-value">{s.value}</div>
              </div>
            ))}
            <div className="modal-links">
              {links?.demo && (
                <a className="btn btn-primary" href={links.demo} target="_blank" rel="noreferrer">
                  <Play size={15} /> Live demo
                </a>
              )}
              {links?.live && (
                <a className="btn" href={links.live} target="_blank" rel="noreferrer">
                  <Globe size={15} /> {hostname(links.live)}
                </a>
              )}
              {links?.github && (
                <a className="btn" href={links.github} target="_blank" rel="noreferrer">
                  <Github size={15} /> Source code
                </a>
              )}
            </div>
          </aside>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number; onOpen: () => void }> = ({
  project,
  index,
  onOpen,
}) => {
  const cover = project.cover ?? project.images?.[0]?.src;
  const media = mediaOf(project);
  const hasVideo = media[0]?.kind === 'video';
  const imageCount = project.images?.length ?? 0;

  return (
    <Reveal delay={(index % 2) * 0.08} className="card-wrap">
      <button className="project-card" onClick={onOpen} aria-label={`Open ${project.title}`}>
        <div className={`card-cover ${project.coverFit === 'contain' ? 'contain' : ''}`}>
          {cover && <img src={cover} alt="" loading="lazy" />}
          <div className="card-badges">
            {project.featured && <span className="badge">Featured</span>}
            {hasVideo && (
              <span className="badge light">
                <Play size={11} /> Demo
              </span>
            )}
            {imageCount > 0 && (
              <span className="badge light">
                <Images size={11} /> {imageCount}
              </span>
            )}
          </div>
        </div>
        <div className="card-body">
          <div className="card-top">
            <span className="project-meta mono">
              {String(index + 1).padStart(2, '0')} · {project.meta}
            </span>
            <span className="project-arrow">
              <ArrowUpRight size={16} />
            </span>
          </div>
          <h3 className="card-title">{project.title}</h3>
          <p className="card-summary">{project.summary}</p>
          {project.tags && (
            <div className="card-tags">
              {project.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </button>
    </Reveal>
  );
};

const Projects: React.FC<{ index: string }> = ({ index }) => {
  const [open, setOpen] = useState<Project | null>(null);
  const close = React.useCallback(() => setOpen(null), []);

  return (
    <section className="section alt" id="projects">
      <div className="container">
        <SectionHeader
          index={index}
          label="Projects"
          title="Selected projects"
          sub="Apps I've built and data projects I've worked on. Open any project to see the demo, screenshots and code."
        />
        <div className="project-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} onOpen={() => setOpen(p)} />
          ))}
        </div>
      </div>
      <AnimatePresence>{open && <ProjectModal key={open.slug} project={open} onClose={close} />}</AnimatePresence>
    </section>
  );
};

export default Projects;

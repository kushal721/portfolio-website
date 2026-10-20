import React from 'react';
import { motion } from 'framer-motion';

export const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className,
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHeader: React.FC<{ index: string; label: string; title: string; sub?: string }> = ({
  index,
  label,
  title,
  sub,
}) => (
  <Reveal className="section-head">
    <div className="section-label mono">
      <b>{index}</b>
      <span className="line" />
      {label}
    </div>
    <h2 className="section-title">{title}</h2>
    {sub && <p className="section-sub">{sub}</p>}
  </Reveal>
);

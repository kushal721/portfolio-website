import React from 'react';
import {
  BarChart3,
  Bot,
  Brain,
  Code2,
  Database,
  LayoutDashboard,
  Layers,
  LineChart,
  ScanEye,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { highlights } from '../content';
import { Reveal } from './ui';

// Icon names usable in content/portfolio.json → "highlights[].icon".
const icons: Record<string, LucideIcon> = {
  BarChart3,
  Bot,
  Brain,
  Code2,
  Database,
  LayoutDashboard,
  Layers,
  LineChart,
  ScanEye,
  ShieldCheck,
  Sparkles,
  Workflow,
};

const Highlights: React.FC = () => (
  <section className="highlights">
    <div className="container highlights-grid">
      {highlights.map((h, i) => {
        const Icon = icons[h.icon] ?? Sparkles;
        return (
          <Reveal key={h.title} delay={i * 0.08} className="highlight">
            <span className="highlight-icon">
              <Icon size={18} strokeWidth={1.75} />
            </span>
            <h3>{h.title}</h3>
            <strong>{h.subtitle}</strong>
            <p>{h.text}</p>
          </Reveal>
        );
      })}
    </div>
  </section>
);

export default Highlights;

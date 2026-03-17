import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Shield, Rocket } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={24} />,
  Zap: <Zap size={24} />,
  Shield: <Shield size={24} />,
  Rocket: <Rocket size={24} />
};

const values = portfolioData.whyChooseMe.values.map(val => ({
  title: val.title,
  description: val.description,
  icon: iconMap[val.iconName] || <ShieldCheck size={24} />,
  color: val.color
}));

const WhyChooseMe: React.FC = () => {
  return (
    <section id="why-me" className="container" style={{ padding: 'var(--spacing-xl) 0' }}>
      <div style={{ marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>
        <span className="mono-text" style={{ color: 'var(--nepal-blue)', fontWeight: 700, fontSize: '10px' }}>
          {portfolioData.whyChooseMe.headerTag}
        </span>
        <h2 className="stagger-in" style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: 'var(--text-main)', marginTop: 'var(--spacing-xs)' }}>
          {portfolioData.whyChooseMe.title}
        </h2>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: 'var(--spacing-lg)',
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
            className="light-box-3d"
            style={{ 
              padding: '24px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
              gap: '16px',
              minHeight: '180px'
            }}
          >
            <div style={{ 
              color: value.color, 
              background: 'rgba(0,0,0,0.02)', 
              padding: '12px', 
              borderRadius: '14px',
              border: '1px solid var(--border-line)',
              display: 'flex' 
            }}>
              {value.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                {value.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {value.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseMe;

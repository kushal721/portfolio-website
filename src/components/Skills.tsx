import React from 'react';
import { interests, skills } from '../content';
import { Reveal, SectionHeader } from './ui';

const Skills: React.FC<{ index: string }> = ({ index }) => {
  const all = skills.flatMap((g) => g.items);
  // Two copies so the track can loop seamlessly.
  const track = [...all, ...all];

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeader
          index={index}
          label="Skills"
          title="Skills & tools"
          sub="What I use to analyse data, evaluate AI and build software."
        />
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {track.map((s, i) => (
            <React.Fragment key={i}>
              <span>{s}</span>
              <span className="sep">+</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="container skills-grid">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={(i % 2) * 0.08} className="skill-group">
            <h3>{group.title}</h3>
            <div className="chips">
              {group.items.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
        {interests && interests.length > 0 && (
          <Reveal className="skill-group interests">
            <h3>Areas of interest</h3>
            <div className="chips">
              {interests.map((s) => (
                <span key={s} className="chip accent">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Skills;

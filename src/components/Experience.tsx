import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { education, experience } from '../content';
import { Reveal, SectionHeader } from './ui';

export const ExperienceSection: React.FC<{ index: string }> = ({ index }) => (
  <section className="section" id="experience">
    <div className="container">
      <SectionHeader index={index} label="Experience" title="Work experience" />
      {experience.map((job, i) => (
        <Reveal key={job.company} delay={i * 0.05} className="job">
          <div className="job-side">
            <span className="job-num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{job.company}</h3>
            {job.location && (
              <p className="job-loc">
                <MapPin size={13} /> {job.location}
              </p>
            )}
            {job.current && <span className="tag current">Current</span>}
          </div>
          <div className="job-main">
            {job.roles.map((role) => (
              <div key={role.title} className="role">
                <div className="job-head">
                  <div>
                    <h4>{role.title}</h4>
                    {role.team && <span className="role-team">{role.team}</span>}
                  </div>
                  <span className="tag">{role.period}</span>
                </div>
                <ul>
                  {role.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export const EducationSection: React.FC<{ index: string }> = ({ index }) => (
  <section className="section alt" id="education">
    <div className="container">
      <SectionHeader index={index} label="Education" title="Education" />
      <div className="edu-grid">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.05} className="edu-card">
            <div className="edu-top">
              <GraduationCap size={22} strokeWidth={1.5} />
              {e.period && <span className="tag">{e.period}</span>}
            </div>
            <h3>{e.degree}</h3>
            <p className="edu-school">{e.school}</p>
            {e.location && <p className="edu-loc">{e.location}</p>}
            {e.details && <p className="edu-details">{e.details}</p>}
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, amount: 0.2 },
  transition:  { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const skillGroups = [
  {
    label: 'AI / ML',
    color: '#f97316',
    skills: [
      { name: 'LangChain & RAG',  level: 90 },
      { name: 'LLMs & Prompting', level: 88 },
      { name: 'YOLO & OpenCV',    level: 85 },
      { name: 'TensorFlow',       level: 78 },
      { name: 'FAISS',            level: 82 },
    ],
  },
  {
    label: 'Programming',
    color: '#fbbf24',
    skills: [
      { name: 'Python',      level: 92 },
      { name: 'JavaScript',  level: 60 },
      { name: 'SQL',         level: 85 },
      { name: 'C',           level: 72 },
      { name: 'HTML & CSS',  level: 78 },
    ],
  },
  {
    label: 'Cloud & Tools',
    color: '#fb923c',
    skills: [
      { name: 'GCP / Cloud Run', level: 80 },
      { name: 'Node.js & Express',level: 60 },
      { name: 'PostgreSQL',       level: 78 },
      { name: 'Power BI',         level: 78 },
      { name: 'Git & GitHub',     level: 88 },
    ],
  },
];

const techTags = [
  'Python', 'LangChain', 'LangFlow', 'FAISS', 'RAG',
  'LLMs', 'TensorFlow', 'NumPy', 'Pandas', 'OpenCV',
  'YOLO', 'GCP', 'Cloud Run', 'Node.js', 'Express',
  'REST API', 'PostgreSQL', 'MySQL', 'Streamlit',
  'Power BI', 'Git', 'Linux', 'JavaScript', 'SQL',
];

const SkillBar = ({ name, level, color, delay }) => {
  const [filled, setFilled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFilled(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ marginBottom: '18px' }}>
      <div style={{
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'center',
        marginBottom:   '8px',
      }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize:   '0.875rem',
          fontWeight: 600,
          color:      'var(--white)',
        }}>{name}</span>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize:   '0.78rem',
          fontWeight: 700,
          color:      color,
        }}>{level}%</span>
      </div>
      <div style={{
        height:       '5px',
        borderRadius: '100px',
        background:   'var(--surface2)',
        overflow:     'hidden',
      }}>
        <div style={{
          height:           '100%',
          borderRadius:     '100px',
          background:       `linear-gradient(90deg, ${color}, ${color}88)`,
          width:            filled ? `${level}%` : '0%',
          transition:       `width 1s ease ${delay}s`,
          boxShadow:        filled ? `0 0 12px ${color}66` : 'none',
        }} />
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.bento-card');
    if (!cards) return;
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width)  * 100;
        const y = ((e.clientY - rect.top)  / rect.height) * 100;
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
      });
    });
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}
      style={{ background: 'rgba(26,26,26,0.3)' }}
    >
      <motion.span className="section-label" {...fadeUp(0)}>
        002 — Skills
      </motion.span>
      <motion.h2 className="section-title" {...fadeUp(0.1)}>
        What I work with.
      </motion.h2>

      {/* Skill bar cards */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap:                 '16px',
        marginBottom:        '16px',
      }} className="skills-grid">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            className="bento-card"
            {...fadeUp(0.15 + gi * 0.1)}
          >
            <div style={{
              display:      'flex',
              alignItems:   'center',
              gap:          '10px',
              marginBottom: '28px',
            }}>
              <div style={{
                width:        '10px',
                height:       '10px',
                borderRadius: '50%',
                background:   group.color,
                boxShadow:    `0 0 10px ${group.color}`,
              }} />
              <p style={{
                fontSize:      '0.72rem',
                fontWeight:    700,
                color:         group.color,
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}>{group.label}</p>
            </div>

            {group.skills.map((skill, si) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={group.color}
                delay={0.2 + si * 0.08}
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Tech tags cloud card */}
      <motion.div
        className="bento-card"
        {...fadeUp(0.45)}
      >
        <p style={{
          fontSize:      '0.72rem',
          fontWeight:    700,
          color:         'var(--amber)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom:  '20px',
        }}>Full Tech Stack</p>

        <div style={{
          display:  'flex',
          flexWrap: 'wrap',
          gap:      '10px',
        }}>
          {techTags.map((tag, i) => (
            <motion.span
              key={tag}
              className="tag"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.3 }}
              whileHover={{
                scale:       1.08,
                color:       'var(--amber)',
                borderColor: 'rgba(249,115,22,0.5)',
                background:  'rgba(249,115,22,0.08)',
              }}
              style={{ cursor: 'none' }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const experiences = [
  {
    role: 'AI Software Development Engineer Intern',
    company: 'TVARA',
    location: 'Bangalore',
    period: 'Feb 2026 — Mar 2026',
    type: 'Latest',
    bullets: [
      'Built a NL2SQL system using Node.js (Express) REST API integrating Gemini LLM and PostgreSQL, for natural language-driven query processing and analytics, and deployed on Google Cloud Platform (GCP) using Cloud Run.',
      'Implemented prompt optimization, structured JSON parsing, error handling, and fallback mechanisms to handle LLM output inconsistencies, ensuring reliable and consistent API responses.',
    ],
    tags: ['Node.js', 'Express', 'Gemini LLM', 'PostgreSQL', 'GCP', 'Cloud Run', 'NL2SQL'],
  },
  {
    role: 'Generative AI and Video Analytics Intern',
    company: 'CIRF',
    location: 'Chennai',
    period: 'Feb 2025',
    type: 'Previous',
    bullets: [
      'Developed a YOLO-based object detection model to identify ambulances in live traffic footage - Automatic Ambulance Detection System using Image Processing.',
      'Gained hands-on experience in Generative AI, Python, OpenCV, YOLO, and model deployment.',
    ],
    tags: ['YOLO', 'OpenCV', 'Python', 'Generative AI', 'Object Detection', 'Computer Vision'],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.bento-card');
    if (!cards) return;
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
      });
    });
  }, []);

  return (
    <section id="experience" className="section" ref={sectionRef}>

      <motion.span className="section-label" {...fadeUp(0)}>
        003 — Experience
      </motion.span>
      <motion.h2 className="section-title" {...fadeUp(0.1)}>
        Where I've worked.
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            className="bento-card"
            {...fadeUp(0.15 + i * 0.12)}
          >
            {/* Top row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '24px',
            }}>
              {/* Left — role info */}
              <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                {/* Icon box */}
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'var(--amber-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--amber)',
                  flexShrink: 0,
                }}>
                  <FaBriefcase size={20} />
                </div>

                <div>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    fontWeight: 700,
                    color: 'var(--white)',
                    marginBottom: '4px',
                  }}>{exp.role}</p>

                  <p style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--amber)',
                    marginBottom: '8px',
                  }}>{exp.company}</p>

                  <div style={{
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap',
                  }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '0.78rem',
                      color: 'var(--muted)',
                    }}>
                      <FaMapMarkerAlt size={11} />
                      {exp.location}
                    </span>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '0.78rem',
                      color: 'var(--muted)',
                    }}>
                      <FaCalendarAlt size={11} />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <span className={i === 0 ? 'tag tag-amber' : 'tag'}>
                {exp.type}
              </span>
            </div>

            {/* Divider */}
            <div style={{
              height: '1px',
              background: 'var(--border)',
              marginBottom: '24px',
            }} />

            {/* Bullets */}
            <ul style={{
              listStyle: 'none',
              padding: 0,
              marginBottom: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              {exp.bullets.map((b, bi) => (
                <li key={bi} style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--amber)',
                    flexShrink: 0,
                    marginTop: '7px',
                  }} />
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--muted)',
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}>{b}</p>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {exp.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
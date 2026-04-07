import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaExternalLinkAlt, FaBuilding } from 'react-icons/fa'; // ✅ added FaBuilding
import { SiCoursera, SiUdemy } from 'react-icons/si'; // ❌ removed SiIbm
import { HiAcademicCap } from 'react-icons/hi';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const certs = [
  {
    title:    'Python for Data Science',
    issuer:   'IBM',
    icon:     <FaBuilding size={22} />, // ✅ fixed
    color:    '#f97316',
    category: 'Data Science',
  },
  {
    title:    'Data Analysis with Python',
    issuer:   'IBM',
    icon:     <FaBuilding size={22} />, // ✅ fixed
    color:    '#f97316',
    category: 'Data Science',
  },
  {
    title:    'Data Visualization with Python',
    issuer:   'IBM',
    icon:     <FaBuilding size={22} />, // ✅ fixed
    color:    '#fbbf24',
    category: 'Data Science',
  },
  {
    title:    'Machine Learning with Python',
    issuer:   'IBM',
    icon:     <FaBuilding size={22} />, // ✅ fixed
    color:    '#fbbf24',
    category: 'ML / AI',
  },
  {
    title:    'Complete SQL Course 2025',
    issuer:   'Udemy',
    icon:     <SiUdemy size={22} />,
    color:    '#fb923c',
    category: 'Database',
  },
  {
    title:    'Cybersecurity for Everyone',
    issuer:   'Coursera',
    icon:     <SiCoursera size={22} />,
    color:    '#fb923c',
    category: 'Security',
  },
  {
    title:    'Red Hat System Administration I',
    issuer:   'Red Hat Academy',
    icon:     <HiAcademicCap size={22} />,
    color:    '#f97316',
    category: 'DevOps',
  },
  {
    title:    'Industry 4.0 & IIoT',
    issuer:   'NPTEL',
    icon:     <FaMedal size={22} />,
    color:    '#fbbf24',
    category: 'IoT',
  },
];

const CertCard = ({ cert, delay }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMove = e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width)  * 100;
      const y = ((e.clientY - rect.top)  / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    };
    card.addEventListener('mousemove', handleMove);
    return () => card.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="bento-card"
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'space-between',
        gap:            '16px',
        padding:        '24px',
      }}
    >
      {/* Top */}
      <div style={{
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'flex-start',
      }}>
        <div style={{
          width:          '48px',
          height:         '48px',
          borderRadius:   '14px',
          background:     `${cert.color}18`,
          border:         `1px solid ${cert.color}33`,
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          color:          cert.color,
        }}>
          {cert.icon}
        </div>

        <span style={{
          fontSize:      '0.68rem',
          fontWeight:    700,
          color:         cert.color,
          background:    `${cert.color}18`,
          border:        `1px solid ${cert.color}33`,
          padding:       '3px 10px',
          borderRadius:  '100px',
        }}>
          {cert.category}
        </span>
      </div>

      {/* Title */}
      <div>
        <h4 style={{
          fontFamily:   'var(--font-display)',
          fontSize:     '0.95rem',
          fontWeight:   700,
          color:        'var(--white)',
        }}>{cert.title}</h4>

        <p style={{
          fontSize:   '0.78rem',
          color:      'var(--muted)',
        }}>{cert.issuer}</p>
      </div>

      {/* Bottom */}
      <div style={{
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'center',
        paddingTop:     '12px',
        borderTop:      '1px solid var(--border)',
      }}>
        <span style={{ fontSize: '0.72rem', color: 'var(--muted2)' }}>
          Verified
        </span>

        <FaExternalLinkAlt size={12} />
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <motion.span className="section-label" {...fadeUp(0)}>
        005 — Certifications
      </motion.span>

      <motion.h2 className="section-title" {...fadeUp(0.1)}>
        Credentials earned.
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '16px',
      }}>
        {certs.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} delay={0.05 * i} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
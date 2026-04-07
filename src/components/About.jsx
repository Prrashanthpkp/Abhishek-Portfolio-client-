import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaBrain, FaRocket } from 'react-icons/fa';

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const facts = [
  {
    icon: <FaGraduationCap size={20} />,
    label: 'Education',
    value: 'B.Tech AI & DS',
    sub:   'Saveetha Engineering • CGPA 7.98',
  },
  {
    icon: <FaCode size={20} />,
    label: 'Primary Stack',
    value: 'Python · Node.js',
    sub:   'SQL · JavaScript · C',
  },
  {
    icon: <FaBrain size={20} />,
    label: 'Specialisation',
    value: 'LLMs & RAG',
    sub:   'LangChain · FAISS · OpenCV',
  },
  {
    icon: <FaRocket size={20} />,
    label: 'Deployed On',
    value: 'Google Cloud',
    sub:   'Cloud Run · GCP',
  },
];

const About = () => {
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
    <section id="about" className="section" ref={sectionRef}>

      <motion.span className="section-label" {...fadeUp(0)}>
        001 — About
      </motion.span>
      <motion.h2 className="section-title" {...fadeUp(0.1)}>
        Who is Abhishek?
      </motion.h2>

      {/* Main bento grid */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows:    'auto',
        gap:                 '16px',
      }}>

        {/* Bio card — large */}
        <motion.div
          className="bento-card"
          {...fadeUp(0.15)}
          style={{ gridColumn: 'span 7' }}
        >
          <p style={{
            fontSize:   '0.72rem',
            fontWeight: 700,
            color:      'var(--amber)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>Bio</p>

          <p style={{
            fontFamily:  'var(--font-body)',
            fontSize:    'clamp(1rem, 1.8vw, 1.15rem)',
            color:       'var(--white)',
            lineHeight:  1.75,
            fontWeight:  400,
            marginBottom: '20px',
          }}>
            I'm an <span style={{ color: 'var(--amber)', fontWeight: 600 }}>
            AI & Data Science engineer</span> based in Chennai,
            passionate about building systems that actually think —
            from NL2SQL engines to RAG-powered chatbots deployed on
            the cloud.
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize:   'clamp(0.88rem, 1.4vw, 1rem)',
            color:      'var(--muted)',
            lineHeight: 1.8,
            marginBottom: '28px',
          }}>
            My work sits at the intersection of large language models,
            real-time data pipelines and cloud infrastructure. I love
            turning messy, complex problems into clean, intelligent APIs
            and products that people actually use.
          </p>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {['LangChain', 'RAG', 'GCP', 'YOLO', 'PostgreSQL', 'Node.js'].map(t => (
              <span key={t} className="tag tag-amber">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Stats card */}
        <motion.div
          className="bento-card"
          {...fadeUp(0.2)}
          style={{
            gridColumn:     'span 5',
            display:        'flex',
            flexDirection:  'column',
            justifyContent: 'space-between',
          }}
        >
          <p style={{
            fontSize:   '0.72rem',
            fontWeight: 700,
            color:      'var(--amber)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}>At a glance</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            flex: 1,
          }}>
            {[
              { num: '4+',  label: 'Projects Built'   },
              { num: '91%', label: 'Model mAP Score'  },
              { num: '8+',  label: 'Certifications'   },
              { num: '40%', label: 'Reporting Faster' },
            ].map(({ num, label }) => (
              <div key={label}>
                <p style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight:    700,
                  color:         'var(--amber)',
                  lineHeight:    1,
                  marginBottom:  '6px',
                }}>{num}</p>
                <p style={{
                  fontSize:   '0.8rem',
                  color:      'var(--muted)',
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}>{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fact cards */}
        {facts.map((fact, i) => (
          <motion.div
            key={fact.label}
            className="bento-card"
            {...fadeUp(0.25 + i * 0.08)}
            style={{ gridColumn: 'span 3' }}
          >
            <div style={{
              width:        '40px',
              height:       '40px',
              borderRadius: '12px',
              background:   'var(--amber-dim)',
              display:      'flex',
              alignItems:   'center',
              justifyContent: 'center',
              color:        'var(--amber)',
              marginBottom: '16px',
            }}>
              {fact.icon}
            </div>
            <p style={{
              fontSize:   '0.68rem',
              fontWeight: 700,
              color:      'var(--muted2)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '6px',
            }}>{fact.label}</p>
            <p style={{
              fontFamily:   'var(--font-display)',
              fontSize:     '0.95rem',
              fontWeight:   600,
              color:        'var(--white)',
              marginBottom: '4px',
            }}>{fact.value}</p>
            <p style={{
              fontSize:  '0.75rem',
              color:     'var(--muted)',
              lineHeight: 1.4,
            }}>{fact.sub}</p>
          </motion.div>
        ))}

      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          #about .bento-card[style*="span 7"],
          #about .bento-card[style*="span 5"] {
            grid-column: span 12 !important;
          }
          #about .bento-card[style*="span 3"] {
            grid-column: span 6 !important;
          }
        }
        @media (max-width: 540px) {
          #about .bento-card[style*="span 3"] {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;

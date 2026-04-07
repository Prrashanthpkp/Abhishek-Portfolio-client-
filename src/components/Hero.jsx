import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.bento-card');
    if (!cards) return;
    const handleMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width)  * 100;
      const y = ((e.clientY - rect.top)  / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    };
    cards.forEach(card => {
      card.addEventListener('mousemove', e => handleMove(e, card));
    });
  }, []);

  const fadeUp = (delay = 0) => ({
    initial:    { opacity: 0, y: 28 },
    animate:    { opacity: 1, y: 0  },
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  });

  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight:      '100vh',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        paddingTop:     '120px',
      }}
    >
      {/* Top status pill */}
      <motion.div {...fadeUp(0.1)} style={{
        display:    'flex',
        alignItems: 'center',
        gap:        '10px',
        marginBottom: '32px',
      }}>
        <span style={{
          display:        'inline-flex',
          alignItems:     'center',
          gap:            '8px',
          padding:        '6px 16px',
          borderRadius:   '100px',
          border:         '1px solid rgba(249,115,22,0.3)',
          background:     'rgba(249,115,22,0.08)',
          fontSize:       '0.78rem',
          fontWeight:     600,
          color:          'var(--amber)',
          letterSpacing:  '0.5px',
        }}>
          <span style={{
            width:        '7px',
            height:       '7px',
            borderRadius: '50%',
            background:   'var(--amber)',
            boxShadow:    '0 0 8px var(--amber)',
            animation:    'pulse 2s infinite',
          }} />
          Available for opportunities
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.h1 {...fadeUp(0.2)} style={{
        fontFamily:  'var(--font-display)',
        fontSize:    'clamp(3rem, 8vw, 7rem)',
        fontWeight:  700,
        lineHeight:  0.95,
        letterSpacing: '-2px',
        marginBottom: '24px',
        maxWidth:    '900px',
      }}>
        Building
        <span style={{
          display: 'block',
          background: 'linear-gradient(135deg, var(--amber) 0%, #fbbf24 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor:  'transparent',
          backgroundClip: 'text',
        }}>
          Intelligent
        </span>
        Systems.
      </motion.h1>

      {/* Typing + description row */}
      <motion.div {...fadeUp(0.35)} style={{
        display:   'flex',
        flexWrap:  'wrap',
        alignItems:'center',
        gap:       '12px',
        marginBottom: '48px',
      }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize:   'clamp(1rem, 2vw, 1.25rem)',
          color:      'var(--muted)',
          fontWeight: 500,
        }}>
          I'm a
        </span>
        <TypeAnimation
          sequence={[
            'AI Engineer',        2000,
            'Data Analyst',     2000,
            'ML Developer',       2000,
          ]}
          wrapper="span"
          speed={60}
          repeat={Infinity}
          style={{
            fontFamily:  'var(--font-display)',
            fontSize:    'clamp(1rem, 2vw, 1.25rem)',
            fontWeight:  600,
            color:       'var(--amber)',
            minWidth:    '180px',
          }}
        />
        <span style={{
          width:      '1px',
          height:     '20px',
          background: 'var(--border)',
          margin:     '0 4px',
        }} />
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize:   'clamp(0.85rem, 1.5vw, 1rem)',
          color:      'var(--muted)',
          maxWidth:   '420px',
          lineHeight: 1.6,
        }}>
          Turning complex data into real-world AI solutions
          with LLMs, RAG pipelines and cloud deployments.
        </span>
      </motion.div>

      {/* CTA row */}
      <motion.div {...fadeUp(0.5)} style={{
        display:  'flex',
        gap:      '14px',
        flexWrap: 'wrap',
        marginBottom: '80px',
      }}>
        <Link to="projects" smooth={true} duration={600} offset={-68}>
          <button className="btn-primary">
            View Projects <HiArrowRight size={16} />
          </button>
        </Link>
        <Link to="contact" smooth={true} duration={600} offset={-68}>
          <button className="btn-outline">
            Get In Touch
          </button>
        </Link>
      </motion.div>

      {/* Bento mini cards row */}
      <motion.div
        ref={gridRef}
        {...fadeUp(0.65)}
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap:                 '12px',
          maxWidth:            '900px',
        }}
      >
        {/* Location card */}
        <div className="bento-card" style={{ padding: '20px 24px' }}>
          <div style={{
            display:    'flex',
            alignItems: 'center',
            gap:        '10px',
            marginBottom: '6px',
          }}>
            <FaMapMarkerAlt size={14} color="var(--amber)" />
            <span style={{
              fontSize:   '0.72rem',
              fontWeight: 700,
              color:      'var(--muted)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}>Location</span>
          </div>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize:   '1rem',
            fontWeight: 600,
            color:      'var(--white)',
          }}>Chennai, IN</p>
        </div>

        {/* Experience card */}
        <div className="bento-card" style={{ padding: '20px 24px' }}>
          <div style={{
            fontSize:   '0.72rem',
            fontWeight: 700,
            color:      'var(--muted)',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '6px',
          }}>Experience</div>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize:   '1rem',
            fontWeight: 600,
            color:      'var(--white)',
          }}>2 Internships</p>
        </div>

        {/* Focus card */}
        <div className="bento-card" style={{ padding: '20px 24px' }}>
          <div style={{
            fontSize:   '0.72rem',
            fontWeight: 700,
            color:      'var(--muted)',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '6px',
          }}>Focus</div>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize:   '1rem',
            fontWeight: 600,
            color:      'var(--white)',
          }}>AI / ML / LLMs</p>
        </div>

        {/* Social card */}
        <div className="bento-card" style={{ padding: '20px 24px' }}>
          <div style={{
            fontSize:   '0.72rem',
            fontWeight: 700,
            color:      'var(--muted)',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '10px',
          }}>Connect</div>
          <div style={{ display: 'flex', gap: '14px' }}>
            
              <a href="https://github.com/S-ABHISHEK-1905"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              <FaGithub size={20} />
            </a>
            
              <a href="https://linkedin.com/in/abhishek-s-u"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              <FaLinkedin size={20} />
            </a>
            
          </div>
        </div>
      </motion.div>

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
};

export default Hero;

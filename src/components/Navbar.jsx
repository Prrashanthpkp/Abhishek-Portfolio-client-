import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const navLinks = [
  { label: 'About',          to: 'about' },
  { label: 'Skills',         to: 'skills' },
  { label: 'Experience',     to: 'experience' },
  { label: 'Projects',       to: 'projects' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact',        to: 'contact' },
];

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeSection, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position:   'fixed',
        top:        0,
        left:       0,
        right:      0,
        zIndex:     1000,
        padding:    '0 6%',
        height:     '68px',
        display:    'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled
          ? 'rgba(14,14,14,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? '1px solid #2a2a2a'
          : 'none',
        transition: 'all 0.4s ease',
      }}>

        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={600}
          style={{
            fontFamily:  'var(--font-display)',
            fontSize:    '1.1rem',
            fontWeight:  700,
            color:       'var(--white)',
            cursor:      'none',
            letterSpacing: '1px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{
            display:        'inline-block',
            width:          '28px',
            height:         '28px',
            background:     'var(--amber)',
            borderRadius:   '8px',
            flexShrink:     0,
          }} />
          ABHISHEK
          <span style={{ color: 'var(--amber)' }}>.</span>
        </Link>

        {/* Desktop Links */}
        <div style={{
          display:    'flex',
          gap:        '36px',
          alignItems: 'center',
        }} className="nav-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={600}
              offset={-68}
              spy={true}
              onSetActive={() => setActive(link.to)}
              style={{
                fontFamily:  'var(--font-body)',
                fontSize:    '0.875rem',
                fontWeight:  600,
                color: activeSection === link.to
                  ? 'var(--amber)'
                  : 'var(--muted)',
                cursor:         'none',
                letterSpacing:  '0.3px',
                textDecoration: 'none',
                transition:     'color 0.25s ease',
                position:       'relative',
                paddingBottom:  '4px',
              }}
              onMouseEnter={e => {
                if (activeSection !== link.to)
                  e.target.style.color = 'var(--white)';
              }}
              onMouseLeave={e => {
                if (activeSection !== link.to)
                  e.target.style.color = 'var(--muted)';
              }}
            >
              {link.label}
              {activeSection === link.to && (
                <span style={{
                  position:   'absolute',
                  bottom:     0,
                  left:       0,
                  right:      0,
                  height:     '2px',
                  background: 'var(--amber)',
                  borderRadius: '1px',
                }} />
              )}
            </Link>
          ))}

          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-68}
          >
            <button className="btn-primary" style={{
              padding:    '10px 22px',
              fontSize:   '0.82rem',
            }}>
              Hire Me
            </button>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          style={{
            display:         'none',
            flexDirection:   'column',
            gap:             '5px',
            background:      'none',
            border:          'none',
            padding:         '4px',
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display:      'block',
              width:        i === 1 ? '18px' : '24px',
              height:       '2px',
              background:   menuOpen ? 'var(--amber)' : 'var(--white)',
              borderRadius: '2px',
              transition:   'all 0.3s ease',
              marginLeft:   i === 1 ? 'auto' : 0,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position:   'fixed',
          top:        '68px',
          left:       0,
          right:      0,
          zIndex:     999,
          background: 'rgba(14,14,14,0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid #2a2a2a',
          padding:    '24px 6%',
          display:    'flex',
          flexDirection: 'column',
          gap:        '24px',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={600}
              offset={-68}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily:     'var(--font-body)',
                fontSize:       '1.1rem',
                fontWeight:     600,
                color:          'var(--muted)',
                cursor:         'none',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop  { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
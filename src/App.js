import React, { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top  = mouseY + 'px';
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dot.style.width  = '16px';
      dot.style.height = '16px';
      dot.style.background = '#fb923c';
      ring.style.width  = '50px';
      ring.style.height = '50px';
      ring.style.borderColor = 'rgba(249,115,22,0.8)';
    };

    const onLeave = () => {
      dot.style.width  = '10px';
      dot.style.height = '10px';
      dot.style.background = 'var(--amber)';
      ring.style.width  = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(249,115,22,0.5)';
    };

    window.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, .bento-card').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div className="App">
      {/* Custom Cursor */}
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
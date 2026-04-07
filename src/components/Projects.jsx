import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const projects = [
  {
    number:  '01',
    title:   'AI-Powered Chatbot for Agricultural Pricing',
    summary: 'Built a Telegram chatbot using RAG, NLP, FAISS, and LangChain to provide real-time crop prices and farming insights.',
    description: 'Built a production RAG pipeline using LangChain and FAISS vector store to retrieve live crop pricing data. Integrated with Telegram Bot API for accessible, conversational querying by farmers.',
    tags:    ['Python', 'RAG', 'LangChain', 'FAISS', 'NLP', 'Telegram API'],
    size:    'large',
    github:  'https://github.com/S-ABHISHEK-1905',
    accent:  '#f97316',
  },
  {
    number:  '02',
    title:   'Automatic Ambulance Recognition System using Image Processing',
    summary: 'YOLO-based object detection system to identify ambulances in real-time CCTV footage for traffic prioritisation.',
    description: 'Used Roboflow for dataset annotation and YOLOv8 for training. Integrated with OpenCV for live video stream processing and traffic signal control logic.',
    tags:    ['Python', 'YOLO', 'OpenCV', 'Roboflow', 'Computer Vision'],
    size:    'medium',
    github:  'https://github.com/S-ABHISHEK-1905',
    accent:  '#fbbf24',
  },
  {
    number:  '03',
    title:   'Power BI Sales Dashboard',
    summary: 'Created an interactive sales dashboard using Power BI with data cleaning, transformation, and DAX-based insights.',
    description: 'End-to-end BI solution with Power Query for data cleaning, DAX measures for KPIs, and an interactive dashboard with drill-through and slicers.',
    tags:    ['Power BI', 'DAX', 'Power Query', 'Excel', 'Data Viz'],
    size:    'medium',
    github:  'https://github.com/S-ABHISHEK-1905',
    accent:  '#fb923c',
  },
  {
    number:  '04',
    title:   'Hand Gesture Sketch-to-Image Translation',
    summary: 'Developed a Streamlit application using CVZone and Stable Diffusion AI for gesture-based sketch-to-image generation.',
    description: 'Real-time hand tracking via CVZone and MediaPipe translates gestures into canvas sketches, which are then processed by a Stable Diffusion pipeline to generate matching images via Streamlit.',
    tags:    ['Python', 'Streamlit', 'CVZone', 'Stable Diffusion', 'MediaPipe'],
    size:    'large',
    github:  'https://github.com/S-ABHISHEK-1905',
    accent:  '#f97316',
  },
];

const ProjectCard = ({ project, delay }) => {
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

  const isLarge = project.size === 'large';

  return (
    <motion.div
      ref={cardRef}
      className="bento-card"
      {...fadeUp(delay)}
      style={{
        gridColumn:     isLarge ? 'span 7' : 'span 5',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'space-between',
        minHeight:      '280px',
      }}
    >
      {/* Top */}
      <div>
        {/* Number + links row */}
        <div style={{
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'center',
          marginBottom:   '20px',
        }}>
          <span style={{
            fontFamily:    'var(--font-display)',
            fontSize:      '2.5rem',
            fontWeight:    700,
            color:         'var(--border)',
            lineHeight:    1,
            letterSpacing: '-1px',
          }}>{project.number}</span>

          <div style={{ display: 'flex', gap: '12px' }}>
            
             <a href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color:      'var(--muted)',
                transition: 'color 0.2s ease',
                display:    'flex',
              }}
              onMouseEnter={e => e.currentTarget.style.color = project.accent}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              <FaGithub size={18} />
            </a>
            
             <a href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color:      'var(--muted)',
                transition: 'color 0.2s ease',
                display:    'flex',
              }}
              onMouseEnter={e => e.currentTarget.style.color = project.accent}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              <FaExternalLinkAlt size={16} />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily:   'var(--font-display)',
          fontSize:     'clamp(1rem, 1.8vw, 1.25rem)',
          fontWeight:   700,
          color:        'var(--white)',
          lineHeight:   1.3,
          marginBottom: '12px',
        }}>{project.title}</h3>

        {/* Summary */}
        <p style={{
          fontSize:     '0.875rem',
          color:        'var(--muted)',
          lineHeight:   1.7,
          marginBottom: '16px',
        }}>{project.summary}</p>

        {/* Description — only on large */}
        {isLarge && (
          <p style={{
            fontSize:     '0.82rem',
            color:        'var(--muted2)',
            lineHeight:   1.7,
            marginBottom: '20px',
          }}>{project.description}</p>
        )}
      </div>

      {/* Bottom */}
      <div>
        {/* Divider */}
        <div style={{
          height:       '1px',
          background:   'var(--border)',
          margin:       '20px 0',
        }} />

        {/* Tags + arrow */}
        <div style={{
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'center',
          flexWrap:       'wrap',
          gap:            '10px',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {project.tags.slice(0, isLarge ? 6 : 4).map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            style={{
              color:   project.accent,
              display: 'flex',
            }}
          >
            <HiArrowRight size={20} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="section"
      style={{ background: 'rgba(26,26,26,0.3)' }}
    >
      <motion.span className="section-label" {...fadeUp(0)}>
        004 — Projects
      </motion.span>
      <motion.h2 className="section-title" {...fadeUp(0.1)}>
        Things I've built.
      </motion.h2>

      {/* Bento grid — row 1 */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap:                 '16px',
        marginBottom:        '16px',
      }} className="projects-grid">
        <ProjectCard project={projects[0]} delay={0.15} />
        <ProjectCard project={projects[1]} delay={0.25} />
      </div>

      {/* Bento grid — row 2 */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap:                 '16px',
      }} className="projects-grid">
        <ProjectCard project={projects[2]} delay={0.15} />
        <ProjectCard project={projects[3]} delay={0.25} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid > * {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
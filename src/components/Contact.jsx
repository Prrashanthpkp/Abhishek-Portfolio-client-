import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay },
});

const Contact = () => {
  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className="section">
        <motion.span className="section-label" {...fadeUp(0)}>
          006 — Contact
        </motion.span>

        <motion.h2 className="section-title" {...fadeUp(0.1)}>
          Let’s connect.
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          style={{
            maxWidth: "520px",
            color: "var(--muted)",
            marginBottom: "32px",
            lineHeight: 1.7,
          }}
        >
          Interested in collaborating, building AI solutions, or discussing opportunities?
          Feel free to reach out — I’m always open to meaningful conversations.
        </motion.p>

        {/* CONTACT CARD */}
        <motion.div
          className="bento-card"
          {...fadeUp(0.3)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "32px",
          }}
        >
          {/* Email */}
          <a href="mailto:abhidhanaml@gmail.com" style={linkStyle}>
            <FaEnvelope style={iconStyle} />
            abhidhanaml@gmail.com
          </a>

          {/* Phone */}
          <a href="tel:+917010451647" style={linkStyle}>
            <FaPhoneAlt style={iconStyle} />
            +91 70104 51647
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/abhishek-s-u"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <FaLinkedin style={iconStyle} />
            linkedin.com/in/abhishek-s-u
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/S-ABHISHEK-1905"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <FaGithub style={iconStyle} />
            github.com/S-ABHISHEK-1905
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: "60px",
          padding: "20px 0",
          borderTop: "1px solid var(--border)",
          textAlign: "center",
          color: "var(--muted2)",
          fontSize: "0.8rem",
        }}
      >
        © {new Date().getFullYear()} S Abhishek. Built with passion.
      </footer>
    </>
  );
};

const linkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  color: "var(--muted)",
  textDecoration: "none",
  fontSize: "0.95rem",
};

const iconStyle = {
  color: "var(--muted)", // 🔥 force no orange
};

export default Contact;
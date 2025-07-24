import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import '../App.css';

function Skills() {
  const [data] = useTypewriter({
    words: [
      'Full‑Stack Engineering',
      'Cloud Architecture',
      'AI/ML Systems',
      'CI/CD + IaC',
      'Modern Databases',
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 80,
  });

  return (
    <section className="skills-section" id="skills">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Professional Focus</h2>
        <p className="section-subtitle">Technical Expertise & Certifications</p>
      </motion.div>

      <motion.div
        className="skills-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden:   { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 1 } }
        }}
      >
        <motion.div className="typewriter" variants={{ hidden: { x: -20 }, visible: { x: 0 } }}>
          <span>Areas of Expertise:&nbsp;</span>
          <span className="highlight">{data}</span>
          <Cursor cursorColor="var(--accent)" />
        </motion.div>

        <motion.div className="block" variants={{ hidden: { y: 20 }, visible: { y: 0 } }}>
          <h4>Certifications</h4>
          <ul>
            <li>Salesforce AI Specialist (Jan 2025)</li>
            <li>Salesforce AI Associate (Dec 2024)</li>
            <li>Generative AI Essentials — Microsoft & LinkedIn (Nov 2024)</li>
          </ul>
        </motion.div>

        <motion.div className="block" variants={{ hidden: { y: 20 }, visible: { y: 0 } }}>
          <h4>Technical Skills</h4>
          <p>
            <strong>Langs:</strong> Java · Python · C/C++ · JS/TS · SQL · HTML/CSS<br/>
            <strong>Frameworks:</strong> React · Next.js · Node · Flask · FastAPI · TensorFlow · PyTorch<br/>
            <strong>Cloud / DevOps:</strong> AWS · Docker · K8s · Terraform · GitHub Actions · Vercel<br/>
            <strong>DBs:</strong> PostgreSQL · Supabase · PlanetScale · Redis · MongoDB
          </p>
        </motion.div>

        <motion.div className="block" variants={{ hidden: { y: 20 }, visible: { y: 0 } }}>
          <h4>Project Highlights</h4>
          <ul>
            <li>Scalable reservation system with Docker, AWS ECS & CI/CD pipelines</li>
            <li>Real‑time AI motion tracking (PyTorch + YOLOv5 → 93% @ 45 FPS)</li>
            <li>OpenAI‑powered chatbot reducing support volume for CalFresh</li>
            <li>Terraform + Supabase infra for zero‑downtime deployments</li>
            <li>Gamified AI fitness coach with persistent memory</li>
          </ul>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .skills-section {
          background: var(--bg);
          color: var(--text-primary);
          padding: var(--section-gap) 2rem;
        }
        .skills-header {
          text-align: left;
          margin-left: 9%;
          margin-bottom: 2rem;
        }

        .skills-content {
          max-width: 900px;
          margin-left: 9%;
          margin-right: auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          text-align: left;
        }
        .typewriter {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          text-align: left;
        }
        .highlight {
          color: var(--accent);
          border-bottom: 1px dashed var(--accent);
        }
        .block {
          background: #ffffff;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          text-align: left;
        }
        .block h4 {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
          color: var(--accent);
        }
        .block ul,
        .block p {
          font-size: 0.95rem;
          line-height: 1.6;
          text-align: left;
          color: grey;
        }
        .block ul li {
          margin-bottom: 0.5rem;
        }
        @media (min-width: 768px) {
          .skills-content {
            grid-template-columns: repeat(2, 1fr);
          }
          .typewriter {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;

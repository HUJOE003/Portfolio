import React from "react";
import { motion } from "framer-motion";
import Sparkles from "react-sparkle";
import "../App.css";
import pic2 from "../Components/pics/IMG_0774.jpeg";

function Banner() {
  return (
    <section className="banner-section">
      <Sparkles
        color="rgba(3, 102, 214, 0.5)"  // half‑opacity GitHub blue
        count={5}                        // just a few
        minSize={4}
        maxSize={8}
        overflowPx={0}
        fadeOutSpeed={2}                 // slower fade
        newSparkleEvery={300}            // less frequent
      />

      <div className="container banner-container">
        <motion.div
          className="banner-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="greeting">Hello, I’m</h3>
          <h1 className="name">
            <span className="highlight">Hujoe</span> Pandi Selvan
          </h1>
          <p className="subtitle">
            Software Engineer <span className="ai-emphasis">specialized in AI</span>
          </p>
        </motion.div>

        <motion.div
          className="banner-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={pic2} alt="Hujoe" className="profile-pic" />
        </motion.div>
      </div>

      <style jsx>{`
        .banner-section {
          position: relative;
          background: var(--surface);
          color: var(--text-primary);
          padding: var(--section-gap) 2rem;
          border-bottom: 1px solid var(--card-border);
          overflow: hidden;
        }
        .banner-container {
          display: flex;
          flex-wrap: wrap-reverse;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }
        .greeting {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }
        .name {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .highlight {
          color: #0366d6;
        }
        .subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }
        .ai-emphasis {
          font-weight: 600;
          background: rgba(3, 102, 214, 0.1);
          padding: 0.15rem 0.4rem;
          border-radius: 3px;
        }
        .cta-btn {
          display: inline-block;
          padding: 0.6rem 1.4rem;
          border-radius: 6px;
          background: #0366d6;
          color: #fff;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .cta-btn:hover {
          background: #0356c0;
          transform: translateY(-1px);
        }
        .banner-image {
          max-width: 300px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
        .profile-pic {
          width: 100%;
          display: block;
        }
        @media (max-width: 768px) {
          .banner-container {
            flex-direction: column;
            text-align: center;
          }
          .name {
            font-size: 2.4rem;
          }
          .subtitle {
            font-size: 1rem;
          }
          .banner-image {
            max-width: 240px;
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Banner;

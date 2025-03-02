import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Skills() {
  const [data] = useTypewriter({
    words: [
      'Front-End (HTML, CSS, Javascript)',
      'Back-End (Node.js)',
      'Programming Languages (Python, Java, C)',
      'GitHub',
      'Tools: Git, OpenAI Assistants, Planet Scale, Supabase, AWS, Clerk, Vercel, Upstash, Figma, Photoshop'
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 100
  });

  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <h2 className="section-title">What I Do</h2>
        <h3 className="section-subtitle">Skills & Certifications</h3>
      </div>
      <div className="skills-content container">
        <div className="skill-text">
          <h2 className="proficiency-text">
            I'm Proficient in
            <span className="highlight">{data}</span>
            <Cursor cursorColor="#000" />
          </h2>
          <button className="btn-fun">
            I ENJOY <span className="btn-fun-highlight">MAKING THINGS FUN.</span>
          </button>
          <div className="skills-description">
            <h4 className="description-title">CERTIFICATIONS:</h4>
            <p className="description-text">
              Salesforce AI Specialist Certification – Salesforce (Jan 2025)<br />
              Salesforce AI Associate Certification – Salesforce (Dec 2024)<br />
              Career Essentials in Generative AI – Microsoft & LinkedIn (Nov 2024)
            </p>
            <h4 className="description-title" style={{ marginTop: '20px' }}>TECHNICAL SKILLS:</h4>
            <p className="description-text">
              <strong>Languages:</strong> Java, Python, C, C++, SQL, JavaScript, TypeScript, HTML/CSS, ARM Assembly<br />
              <strong>Frameworks:</strong> TensorFlow, PyTorch, Keras, OpenCV, Hugging Face, React.js, Next.js, Angular.js, Bootstrap, Tailwind CSS, WordPress, Node.js, Express.js, Flask, FastAPI, .NET, Apache Spark, Pandas, NumPy<br />
              <strong>Developer Tools:</strong> AWS, Kubernetes, Docker, Jupyter Notebooks, OpenAI APIs, GCP, PostgreSQL, MongoDB, Redis, Azure, Git, Supabase, PlanetScale, Vercel, Tableau
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

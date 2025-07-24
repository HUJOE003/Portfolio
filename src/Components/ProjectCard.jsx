import React from 'react';

function ProjectCard({ title, projecttext, link }) {
  return (
    <div className="github-card">
      <style jsx>{`
        .github-card {
          background-color: #f6f8fa;
          border: 1px solid #d0d7de;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(27, 31, 35, 0.1);
          width: 100%;
          max-width: 350px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .github-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(27, 31, 35, 0.15);
        }

        .card-title {
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
          font-size: 1.15rem;
          font-weight: 600;
          color: #0969da;
          margin: 0;
        }

        .card-text {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 0.95rem;
          color: #24292f;
          line-height: 1.4;
        }

        .project-link {
          align-self: flex-start;
          font-size: 0.9rem;
          font-weight: 600;
          color: #57606a;
          background-color: #eaeef2;
          padding: 6px 12px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: background-color 0.2s ease;
        }

        .project-link:hover {
          background-color: #d8dee4;
        }

        .github-icon {
          width: 16px;
          height: 16px;
          filter: grayscale(100%);
        }
      `}</style>

      <h3 className="card-title">{title}</h3>
      <p className="card-text">{projecttext}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="GitHub"
          className="github-icon"
        />
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;

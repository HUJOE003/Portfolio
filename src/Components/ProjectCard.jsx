function ProjectCard(props) {
  return (
    <section className="Projects" id="projects">
      <style jsx>{`
        .project-card {
          width: 18rem;
          background: linear-gradient(135deg, #AAA2FE, #7B5CFA);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }
        .project-img {
          height: 30vh;
          width: 100%;
          object-fit: cover;
        }
        .card-body {
          padding: 1.5rem;
        }
        .card-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.8rem;
        }
        .card-text {
          font-family: 'Roboto', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #f9f9f9;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
          margin-bottom: 1rem;
        }
        .project-btn {
          display: inline-block;
          font-size: 1rem;
          font-weight: 700;
          padding: 0.6rem 1.2rem;
          background-color: #5a42d1;
          color: #fff;
          border-radius: 6px;
          text-transform: uppercase;
          transition: background 0.3s ease, transform 0.2s ease;
          text-align: center;
        }
        .project-btn:hover {
          background-color: #4a37b8;
          color:orange;
          transform: scale(1.05);
        }
      `}</style>
      <div className="card m-2 project-card">
        <img src={props.image} className="card-img-top project-img" alt="Project" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.projecttext}</p>
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn project-btn"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;

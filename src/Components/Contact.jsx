import React from "react";

function Contact() {
  return (
    
    <section className="contact-section" id="contact">
      <hr
        style={{
          height: "2px",
          borderWidth: "0",
          backgroundColor: "gray",
          marginBottom: "2rem ",

        }}
      />
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Feel free to send me a message!</p>

        <form
          id="contact-form"
          action="https://formspree.io/f/mknljlyj"
          method="POST"
          noValidate
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="username"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="form-control"
              placeholder="Write your message here"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary px-4 py-2">
            Send
          </button>
        </form>
      </div>

      <style jsx>{`
        .contact-section {
          background-color: var(--bg);
          color: var(--text-primary);
        }
        .contact-container {
          max-width: var(--content-max-width);
          margin-left: 9%;
          text-align: left;
        }
        form {
          margin-top: 2rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .form-group label {
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-primary);
        }
        .form-control {
          padding: 0.75rem 1rem;
          background: var(--surface);
          color: var(--text-primary);
          border: 1px solid var(--card-border);
          border-radius: 6px;
        }
        .form-control::placeholder {
          color: var(--text-secondary);
        }
        button {
          margin-top: 1rem;
        }
      `}</style>
    </section>
  );
}

export default Contact;

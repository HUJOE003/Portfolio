import React from 'react';

function Footer() {
  return (
    
    <footer className="footer-section" style={{ marginBottom: '-5%' }}>
            <hr
        style={{
          height: "2px",
          borderWidth: "0",
          backgroundColor: "gray",

        }}
      />
      <div className="social-icons d-flex justify-content-center">
        <a
          href="https://github.com/HUJOE003"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 icon4"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/hujoe-pandi-selvan-5509a125a/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 icon5"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="tel:+8053169809" className="mx-3 icon6">
          <i className="bi bi-telephone"></i>
        </a>
        {/* <a
          href="https://wa.me/18053169809"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 icon"
        >
          <i className="bi bi-whatsapp"></i>
        </a> */}
      </div>
      <p className="footer-text" style={{marginBottom: '-5%'}}>&copy; {new Date().getFullYear()} designed by Hujoe Pandi Selvan</p>
    </footer>
  );
}

export default Footer;

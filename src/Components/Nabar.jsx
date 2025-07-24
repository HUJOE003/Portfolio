import { useState, useEffect } from 'react';
import '../App.css';
function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: Save mode preference in local storage
  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <header className="topnav">
      <nav className="navbar navbar-dark bg-transparent fixed-top">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="." className="navbar-brand d-flex align-items-center">
          </a>

          <div className="d-flex align-items-center gap-3">
            {/* Dark mode toggle */}
            <button
              className="btn btn-sm btn-outline-light shadow-sm"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Navbar toggler */}
            <button
              className="navbar-toggler bg-dark shadow"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </div>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasMenu"
          aria-labelledby="offcanvasMenuLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasMenuLabel">
              Hi <span className="text-warning">There!</span>
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">
              {['Home', 'About Me', 'Projects', 'Testimonial', 'Contact Me'].map((label, i) => {
                const hrefs = ['.', '#skills', '#projects', '#testimonial', '#contact'];
                return (
                  <li className="nav-item" key={label}>
                    <a className="nav-link text-white navbtn" href={hrefs[i]}>
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

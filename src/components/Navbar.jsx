import { useState } from "react";

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top portfolio-navbar">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home" onClick={closeMenu}>
          Yadnesh<span>.</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#education" onClick={closeMenu}>
                Education
              </a>
            </li>

            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a
                className="btn btn-primary px-4"
                href="#contact"
                onClick={closeMenu}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
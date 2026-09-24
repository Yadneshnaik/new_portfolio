function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          <div className="col-lg-7">
            <p className="hero-subtitle">
              HELLO, I'M
            </p>

            <h1 className="hero-title">
              Yadnesh <span>Naik</span>
            </h1>

            <h2 className="hero-role">
              Software Developer
            </h2>

            <p className="hero-description">
              I build modern web, mobile and full-stack applications
              using React.js, Node.js, MongoDB, Flutter and other
              modern technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary btn-lg me-3">
                View Projects
              </a>

              <a href="#contact" className="btn btn-outline-light btn-lg">
                Contact Me
              </a>
            </div>

            <div className="hero-tech mt-4">
              <span>React.js</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Flutter</span>
              <span>Docker</span>
            </div>
          </div>

          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <div className="hero-profile">

              <div className="profile-circle">
                <i className="bi bi-code-slash"></i>
              </div>

              <div className="floating-card card-one">
                <i className="bi bi-filetype-js"></i>
                <span>JavaScript</span>
              </div>

              <div className="floating-card card-two">
                <i className="bi bi-database"></i>
                <span>MongoDB</span>
              </div>

              <div className="floating-card card-three">
                <i className="bi bi-phone"></i>
                <span>Flutter</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
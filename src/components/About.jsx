function About() {
  return (
    <section id="about" className="about-section">

      <div className="container">

        <div className="section-heading text-center">
          <span>ABOUT ME</span>
          <h2>Who I Am</h2>
          <p>
            A passionate developer interested in building useful
            and modern software applications.
          </p>
        </div>

        <div className="row align-items-center mt-5">

          <div className="col-lg-6">

            <h3>
              Software Developer focused on
              <span className="text-primary"> Full Stack Development</span>
            </h3>

            <p>
              I am a Software Development graduate with hands-on
              experience building web, mobile and backend applications.
              I enjoy converting ideas into functional and responsive
              software solutions.
            </p>

            <p>
              My development experience includes React.js, Node.js,
              Express.js, MongoDB, MySQL, Laravel and Flutter.
              I have also worked with Docker, GitHub Actions and
              cloud deployment platforms.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Work Together
            </a>

          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">

            <div className="about-info">

              <div className="info-item">
                <i className="bi bi-person"></i>
                <div>
                  <small>Name</small>
                  <strong>Yadnesh Naik</strong>
                </div>
              </div>

              <div className="info-item">
                <i className="bi bi-code-square"></i>
                <div>
                  <small>Specialization</small>
                  <strong>Software Development</strong>
                </div>
              </div>

              <div className="info-item">
                <i className="bi bi-laptop"></i>
                <div>
                  <small>Primary Stack</small>
                  <strong>MERN Stack</strong>
                </div>
              </div>

              <div className="info-item">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <small>Location</small>
                  <strong>Goa, India</strong>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
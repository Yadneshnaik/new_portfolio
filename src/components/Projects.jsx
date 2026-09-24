const projects = [
  {
    title: "Student Record Hashing System",
    description:
      "A student record management system demonstrating hashing techniques, collision handling, searching and deletion.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Hashing",
    ],
    icon: "bi-diagram-3",
  },

  {
    title: "AI Personal Branding Assistant",
    description:
      "A MERN-based AI assistant with authentication, premium features, JWT authentication and payment integration.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "JWT",
      "Razorpay",
    ],
    icon: "bi-robot",
  },

  {
    title: "Billing Automation System",
    description:
      "A business billing automation platform with service plans, booking functionality and an administrative interface.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    icon: "bi-receipt",
  },

  {
    title: "Docker Flask CI/CD",
    description:
      "A Python Flask application containerized with Docker and integrated with Docker Hub and GitHub Actions CI/CD.",
    technologies: [
      "Python",
      "Flask",
      "Docker",
      "GitHub Actions",
    ],
    icon: "bi-box-seam",
  },

  {
    title: "E-Commerce Website",
    description:
      "An e-commerce web application developed as a final-year project with product and shopping functionality.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Bootstrap",
    ],
    icon: "bi-cart3",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="container">

        <div className="section-heading text-center">
          <span>MY WORK</span>
          <h2>Featured Projects</h2>
          <p>
            Some of the applications and projects I have worked on.
          </p>
        </div>

        <div className="row g-4 mt-4">

          {projects.map((project, index) => (

            <div className="col-md-6 col-lg-4" key={index}>

              <div className="project-card">

                <div className="project-icon">
                  <i className={`bi ${project.icon}`}></i>
                </div>

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <div className="project-tech">

                  {project.technologies.map(
                    (technology, techIndex) => (
                      <span key={techIndex}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

                <div className="project-link">
                  <a href="#contact">
                    Discuss Project
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;
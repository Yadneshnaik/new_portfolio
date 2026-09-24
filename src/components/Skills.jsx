const skillGroups = [
  {
    icon: "bi-window",
    title: "Frontend",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Next.js",
    ],
  },
  {
    icon: "bi-server",
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "PHP",
      "Laravel",
    ],
  },
  {
    icon: "bi-database",
    title: "Database",
    skills: [
      "MongoDB",
      "Mongoose",
      "MySQL",
      "Firebase",
    ],
  },
  {
    icon: "bi-phone",
    title: "Mobile",
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "React Native",
    ],
  },
  {
    icon: "bi-box",
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Netlify",
    ],
  },
  {
    icon: "bi-palette",
    title: "Design",
    skills: [
      "UI/UX",
      "Graphic Design",
      "Responsive Design",
      "Figma",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="container">

        <div className="section-heading text-center">
          <span>TECHNOLOGIES</span>
          <h2>Skills & Technologies</h2>
          <p>
            Technologies and tools I have worked with.
          </p>
        </div>

        <div className="row g-4 mt-4">

          {skillGroups.map((group, index) => (

            <div className="col-md-6 col-lg-4" key={index}>

              <div className="skill-card">

                <div className="skill-icon">
                  <i className={`bi ${group.icon}`}></i>
                </div>

                <h3>{group.title}</h3>

                <div className="skill-tags">

                  {group.skills.map((skill, skillIndex) => (
                    <span key={skillIndex}>
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
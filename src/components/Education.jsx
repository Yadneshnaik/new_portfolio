const education = [
  {
    year: "Currently Pursuing",
    title: "Master of Science in Information Technology",
    institution:
      "Parvatibai Chowgule College of Arts and Science",
    icon: "bi-mortarboard-fill",
    current: true,
  },
  {
    year: "2024 – 2025",
    title: "Post Graduate Diploma in Computer Application",
    institution:
      "Parvatibai Chowgule College of Arts and Science",
    icon: "bi-mortarboard",
  },
  {
    year: "2023 – 2024",
    title: "Graphic Design & UI/UX Course",
    institution:
      "Parvatibai Chowgule College of Arts and Science",
    icon: "bi-palette",
  },
  {
    year: "2020 – 2023",
    title: "B.Voc Software Development",
    institution:
      "Parvatibai Chowgule College of Arts and Science",
    icon: "bi-code-square",
  },
];

function Education() {
  return (
    <section id="education" className="education-section">

      <div className="container">

        <div className="section-heading text-center">
          <span>EDUCATION</span>

          <h2>My Education</h2>

          <p>
            Academic background and professional learning.
          </p>
        </div>

        <div className="row g-4 mt-4">

          {education.map((item, index) => (

            <div
              className="col-md-6 col-lg-3"
              key={index}
            >

              <div
                className={`education-card ${
                  item.current ? "current-education" : ""
                }`}
              >

                <div className="education-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                {item.current && (
                  <span className="current-badge">
                    June 2026 - Currently Pursuing
                  </span>
                )}

                <span className="education-year">
                  {item.year}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.institution}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;

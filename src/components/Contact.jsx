import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch(
        "https://new-portfolio-backend-pqen.onrender.com/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Your message has been sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong.",
        });
      }

    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message:
          "Unable to connect to the server. Please try again later.",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">

      <div className="container">

        <div className="section-heading text-center">

          <span>CONTACT</span>

          <h2>Let's Work Together</h2>

          <p>
            Have a project or opportunity? Feel free to get in touch.
          </p>

        </div>

        <div className="row g-4 mt-4">

          {/* Contact Information */}
          <div className="col-lg-5">

            <div className="contact-info">

              <h3>Get In Touch</h3>

              <p>
                I'm interested in software development,
                web development and full-stack opportunities.
              </p>

              {/* Email */}
              <div className="contact-item">

                <i className="bi bi-envelope"></i>

                <div>

                  <small>Email</small>

                  <a href="mailto:naikyadnesh9@gmail.com">
                    naikyadnesh9@gmail.com
                  </a>

                </div>

              </div>

              {/* LinkedIn */}
              <div className="contact-item">

                <i className="bi bi-linkedin"></i>

                <div>

                  <small>LinkedIn</small>

                  <a
                    href="https://www.linkedin.com/in/yadnesh-naik-286a6b235/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn Profile
                  </a>

                </div>

              </div>

              {/* GitHub */}
              <div className="contact-item">

                <i className="bi bi-github"></i>

                <div>

                  <small>GitHub</small>

                  <a
                    href="https://github.com/Yadneshnaik"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Profile
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* Contact Form */}
          <div className="col-lg-7">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* Status Message */}

              {status.message && (
                <div
                  className={`alert ${
                    status.type === "success"
                      ? "alert-success"
                      : "alert-danger"
                  }`}
                >
                  {status.message}
                </div>
              )}


              {/* Name + Email */}

              <div className="row">

                <div className="col-md-6 mb-3">

                  <label>Name</label>

                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* Subject */}

              <div className="mb-3">

                <label>Subject</label>

                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Project / Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* Message */}

              <div className="mb-3">

                <label>Message</label>

                <textarea
                  name="message"
                  className="form-control"
                  rows="6"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="btn btn-primary px-4"
                disabled={loading}
              >

                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                    ></span>

                    Sending...
                  </>
                ) : (
                  <>
                    Send Message

                    <i className="bi bi-send ms-2"></i>
                  </>
                )}

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;

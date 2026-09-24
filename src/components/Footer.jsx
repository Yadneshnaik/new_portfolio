function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-md-6 text-center text-md-start">
            <h4>
              Yadnesh<span>.</span>
            </h4>

            <p>
              Software Developer
            </p>
          </div>

          <div className="col-md-6">

            <div className="footer-social">

              <a
                href="https://github.com/Yadneshnaik"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/yadnesh-naik-286a6b235/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="mailto:naikyadnesh9@gmail.com">
                <i className="bi bi-envelope"></i>
              </a>

            </div>

          </div>

        </div>

        <hr />

        <div className="text-center">
          <p className="copyright">
            © {year} Yadnesh Naik. All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
export default function Sidebar() {
  return (
      <div className="resume-sidebar d-flex flex-column position-sticky">
        <div className="theiaStickySidebar">
          <div className="resume-info round50 d-flex flex-column position-relative w-100">
            <div className="user-img round40 overflow-hidden position-relative w-100">
              <img
                className="img-fluid w-100"
                src="https://media.licdn.com/dms/image/v2/D4E03AQEoP8uyWDxBiQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702068770517?e=1753920000&v=beta&t=32Qv8hrznUe6OZmSKd_FIgbZsCTIUX2JPk_0haI1bjE"
                alt="User Image"
                loading="lazy"
              />
            </div>
            <div className="user-info d-flex flex-column align-items-start w-100">
              <a href="mailto:hello@ikonicwebs.co" title="">
                hello@ikonicwebs.co
              </a>
              <span>Base in 2489 Locust, USA</span>
              <p className="mb-0">
                &copy; 2023{" "}
                <a href="index.html" title="">
                  ikonicwebs
                </a>
                . All Rights Reserved
              </p>
            </div>
            <div className="user-social-wrap d-flex align-items-center justify-content-between position-relative w-100">
              <span>Follow Me:</span>
              <div className="social-links d-flex align-items-center gap-1">
                <a
                  href="https://www.facebook.com/"
                  title="Facebook"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/" title="Twitter" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  title="Linkedin"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  title="Instagram"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

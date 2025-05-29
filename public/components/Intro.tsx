
export default function Intro() {
  return (
    <section>
      <div className="position-relative w-100">
        <div className="intro-wrapper d-flex flex-column align-items-start position-relative w-100">
          <div className="intro-box d-flex flex-column align-items-start position-relative w-100">
            <span className="sec-sub rounded-pill text-center">
              Introduction
            </span>
            <h2
              className="mb-0 fw-normal sz-55 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".2s"
            >
              Hey! I am <span>Ikonicwebs</span>, UX/UI Designer & Social Media
              Manager
            </h2>
            <p
              className="mb-0 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".4s"
            >
              I'm a UX/UI Designer & I'm very passionate and dedicated to my
              work. I have acquired the skills and knowledge necessary to make
              your project a success.
            </p>
            <div
              className="intro-btns d-flex align-items-center w-100 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".6s"
            >
              <a
                className="theme-btn position-relative overflow-hidden round10"
                href="javascript:void(0);"
                title=""
              >
                <i className="far fa-envelope"></i>Hire Me Now
              </a>
              <a className="simple-link" href="javascript:void(0);" title="">
                <i className="fas fa-arrow-alt-to-bottom round5"></i>Download CV
              </a>
            </div>
          </div>
          <div className="fun-fact-boxes mt-90 round15 position-relative w-100">
            <div className="row mrg">
              <div
                className="col-md-6 col-sm-6 col-lg-3 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay=".2s"
              >
                <div className="fun-fact-box d-flex flex-column align-items-start position-relative w-100">
                  <span>Born In</span>
                  <h3 className="mb-0 fw-normal sz-30">Locust, USA</h3>
                </div>
              </div>
              <div
                className="col-md-6 col-sm-6 col-lg-3 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay=".4s"
              >
                <div className="fun-fact-box d-flex flex-column align-items-start position-relative w-100">
                  <span>Experience</span>
                  <h3 className="mb-0 fw-normal sz-30">5+ Years</h3>
                </div>
              </div>
              <div
                className="col-md-6 col-sm-6 col-lg-3 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay=".6s"
              >
                <div className="fun-fact-box d-flex flex-column align-items-start position-relative w-100">
                  <span>Worldwide Client</span>
                  <h3 className="mb-0 fw-normal sz-30">1.3k</h3>
                </div>
              </div>
              <div
                className="col-md-6 col-sm-6 col-lg-3 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay=".8s"
              >
                <div className="fun-fact-box d-flex flex-column align-items-start position-relative w-100">
                  <span>Job Done Successfully</span>
                  <h3 className="mb-0 fw-normal sz-30">4.9k</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

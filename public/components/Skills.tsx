export default function Skills() {
  return (
    <section>
      <div className="position-relative pt-120 w-100">
        <div className="sec-title-wrap mb-50 d-flex flex-column align-items-center position-relative w-100 text-center">
          <div
            className="sec-title d-flex flex-column align-items-center w-100 wow fadeInUp"
            data-wow-duration=".5s"
            data-wow-delay=".2s"
          >
            <span className="sec-sub rounded-pill text-center">My Skills</span>
            <h2 className="mb-0 sz-40">My Advantages</h2>
          </div>
        </div>
        <div className="skill-boxes position-relative w-100">
          <div className="row justify-content-center mrg20">
            <div
              className="col-md-4 col-sm-6 col-lg-3 wow fadeIn"
              data-wow-duration=".8s"
              data-wow-delay=".2s"
            >
              <div className="skill-box round15 overflow-hidden position-relative text-center w-100">
                <div className="skill-img overflow-hidden position-relative w-100">
                  <img
                    className="img-fluid w-100"
                    src="assets/images/resources/skill-img1.jpg"
                    alt="Skill Image"
                    loading="lazy"
                  />
                </div>
                <div className="skill-info d-flex flex-column align-items-center w-100">
                  <h3 className="mb-0 fw-normal sz-36">99%</h3>
                  <h4 className="mb-0 sz-20">Figma</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

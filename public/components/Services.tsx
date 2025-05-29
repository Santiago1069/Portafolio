export default function Services() {
  return (
    <section>
      <div className="position-relative pt-100 w-100">
        <div className="sec-title-wrap mb-50 d-flex flex-column align-items-center position-relative w-100 text-center">
          <div
            className="sec-title d-flex flex-column align-items-center w-100 wow fadeInUp"
            data-wow-duration=".5s"
            data-wow-delay=".2s"
          >
            <span className="sec-sub rounded-pill text-center">Services</span>
            <h2 className="mb-0 sz-40">My Specializations</h2>
          </div>
        </div>
        <div className="serv-boxes position-relative w-100">
          <div className="row mrg40">
            <div
              className="col-md-6 col-sm-6 col-lg-4 wow fadeIn"
              data-wow-duration=".8s"
              data-wow-delay=".2s"
            >
              <div className="serv-box round15 d-flex flex-column position-relative w-100">
                <a
                  className="serv-read rounded-circle"
                  href="service-detail.html"
                  title=""
                >
                  <i className="far fa-long-arrow-right"></i>
                </a>
                <h3 className="mb-0 fw-normal sz-30">
                  <a href="service-detail.html" title="">
                    Illustration <br />
                    Design
                  </a>
                </h3>
                <p className="mb-0">Donec imperdiet risus at tortor</p>
                <span>24 Projects</span>
              </div>
            </div>
          </div>
        </div>
        <div className="view-all mt-80 text-center position-relative w-100">
          <p className="mb-0">
            Want to see what i am going to offer? Click here to{" "}
            <a href="services.html" title="">
              View More services
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Pricing() {
  return (
    <section>
      <div className="position-relative pt-110 w-100">
        <div className="sec-title-wrap mb-50 d-flex flex-column align-items-center position-relative w-100 text-center">
          <div
            className="sec-title d-flex flex-column align-items-center w-100 wow fadeInUp"
            data-wow-duration=".5s"
            data-wow-delay=".2s"
          >
            <span className="sec-sub rounded-pill text-center">Pricing</span>
            <h2 className="mb-0 sz-40">My Pricing Plan</h2>
          </div>
        </div>
        <div className="plan-boxes position-relative w-100">
          <div className="row mrg40">
            <div
              className="col-md-6 col-sm-6 col-lg-4 wow fadeIn"
              data-wow-duration=".8s"
              data-wow-delay=".2s"
            >
              <div className="plan-box round15 position-relative w-100">
                <div className="plan-head d-flex flex-column align-items-start position-relative w-100">
                  <h4 className="mb-0 fw-normal sz-26">Basic Plan</h4>
                  <span className="sz-40 fw-medium">
                    $39<i className="fst-normal sz-18">/ Per Month</i>
                  </span>
                </div>
                <p className="mb-0">
                  Have design ready to build? or{" "}
                  <a href="javascript:void(0);" title="">
                    Need Help
                  </a>
                </p>
                <div className="plan-body d-flex flex-column align-items-center position-relative w-100">
                  <ul>
                    <li>Web Development</li>
                    <li>Mobile Development</li>
                    <li>Advertising</li>
                    <li className="text-decoration-line-through">
                      Graphic design
                    </li>
                    <li className="text-decoration-line-through">
                      Project management
                    </li>
                  </ul>
                  <a
                    className="theme-btn2 round10 d-flex align-items-center justify-content-center position-relative overflow-hidden"
                    href="javascript:void(0);"
                    title=""
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

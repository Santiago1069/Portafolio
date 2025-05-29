export default function Companies() {
  return (
    <section>
      <div className="position-relative pt-110 w-100">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-5">
            <div className="sec-title-wrap mb-50 d-flex flex-column align-items-start position-relative w-100">
              <div
                className="sec-title d-flex flex-column align-items-start w-100 wow fadeInUp"
                data-wow-duration=".5s"
                data-wow-delay=".2s"
              >
                <span className="sec-sub rounded-pill text-center">
                  Companies
                </span>
                <h2 className="mb-0 sz-40">
                  I Worked With <br /> Wel-Known Companies
                </h2>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-7">
            <div className="comp-boxes round15 position-relative w-100">
              <div className="row mrg">
                <div className="col-md-6 col-sm-6 col-lg-6">
                  <div className="comp-box d-flex align-items-center justify-content-center position-relative w-100 text-center">
                    <a href="javascript:void(0);" title="">
                      <img
                        className="img-fluid"
                        src="assets/images/resources/comp-img1.png"
                        alt="Company Image"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Testimonial() {
  return (
    <section>
      <div className="position-relative pt-110 w-100">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-5">
            <div className="sec-title-wrap mb-20 d-flex flex-column align-items-start position-relative w-100">
              <div
                className="sec-title d-flex flex-column align-items-start w-100 wow fadeInUp"
                data-wow-duration=".5s"
                data-wow-delay=".2s"
              >
                <span className="sec-sub rounded-pill text-center">
                  Testimonial
                </span>
                <h2 className="mb-0 sz-40">
                  Trusted By <br /> Hundred Clients
                </h2>
              </div>
            </div>
            <div
              className="gen-controls mb-50 d-inline-flex align-items-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".4s"
            >
              <div className="gen-btn gen-btn-next">
                <i className="far fa-angle-left"></i>
              </div>
              <div className="testi-pagi"></div>
              <div className="gen-btn gen-btn-prev">
                <i className="far fa-angle-right"></i>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-7">
            <div className="testi-wrap position-relative w-100">
              <div className="testi-caro swiper w-100">
                <div className="swiper-wrapper">
                  <div className="testi-item swiper-slide d-block position-relative w-100">
                    <div className="testi-box round15 d-flex position-relative w-100">
                      <span className="rounded-circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 26 18"
                        >
                          <path d="M13.8128 11.726C13.8128 5.06783 16.5892 0.650844 16.7078 0.465795L17.0052 0H21.4531L21.0866 1.25565C20.7282 2.48134 20.1602 4.69584 20.1602 5.42079C20.1602 5.59807 20.1658 5.72733 20.1729 5.8209C21.7446 5.89097 23.2278 6.54402 24.3133 7.64408C25.3988 8.74415 26.003 10.2064 26 11.726C26 13.2869 25.358 14.7838 24.2152 15.8875C23.0725 16.9913 21.5225 17.6114 19.9064 17.6114C18.2903 17.6114 16.7404 16.9913 15.5976 15.8875C14.4548 14.7838 13.8128 13.2869 13.8128 11.726ZM15.8439 11.726C15.8474 12.498 16.0866 13.2518 16.5316 13.8931C16.9766 14.5344 17.6075 15.0346 18.3455 15.3312C19.0834 15.6278 19.8956 15.7077 20.6802 15.5607C21.4649 15.4136 22.1872 15.0462 22.7567 14.5046C23.3263 13.9629 23.7177 13.2711 23.882 12.5156C24.0464 11.7601 23.9763 10.9745 23.6807 10.2573C23.385 9.54003 22.8768 8.92303 22.2198 8.48342C21.5627 8.0438 20.786 7.80112 19.9869 7.78582H19.9423C19.6323 7.80458 19.3231 7.73712 19.0515 7.59153C18.7799 7.44595 18.5571 7.22832 18.4095 6.96429C18.1854 6.47998 18.089 5.94959 18.1288 5.4205C18.1288 4.63456 18.494 3.08491 18.7859 1.97222H18.169C16.6275 5.00747 15.8318 8.34529 15.8439 11.726ZM0 11.726C0 5.06783 2.77675 0.650844 2.89498 0.465795L3.19304 0H7.64089L7.27443 1.25565C6.916 2.48134 6.34801 4.69584 6.34801 5.42079C6.34801 5.59807 6.35328 5.72733 6.36071 5.8209C7.93261 5.89112 9.41585 6.54438 10.5014 7.64467C11.5869 8.74496 12.191 10.2074 12.1878 11.7272C12.1878 13.2882 11.5458 14.7852 10.4029 15.889C9.26011 16.9928 7.7101 17.6129 6.0939 17.6129C4.47769 17.6129 2.92769 16.9928 1.78486 15.889C0.642034 14.7852 0 13.2882 0 11.7272V11.726ZM2.0311 11.726C2.03454 12.4981 2.27372 13.252 2.7187 13.8934C3.16368 14.5348 3.79468 15.0351 4.5327 15.3318C5.27071 15.6285 6.08295 15.7083 6.86771 15.5613C7.65246 15.4142 8.37485 15.0467 8.94445 14.505C9.51405 13.9633 9.90552 13.2715 10.0699 12.5159C10.2342 11.7603 10.1642 10.9746 9.86841 10.2573C9.57267 9.53997 9.0644 8.9229 8.40726 8.48327C7.75012 8.04365 6.97331 7.80106 6.17408 7.78582H6.12981C5.81976 7.80466 5.51059 7.73727 5.23895 7.59168C4.9673 7.44608 4.74455 7.22837 4.59704 6.96429C4.37272 6.48004 4.27626 5.9496 4.31631 5.4205C4.31631 4.63456 4.68155 3.08491 4.97312 1.97222H4.35748C2.81551 5.00737 2.0194 8.3452 2.0311 11.726Z" />
                        </svg>
                      </span>
                      <div className="testi-cap d-flex flex-column align-items-start">
                        <p className="mb-0">
                          Risus commodo is amet consectetur adipiscing sed do
                          eiusmod labore dolore magna aliqua suspen disse
                          ultrices gravida commodo. Duis aute irure dolor in
                          reprehenderit in voluptate.
                        </p>
                        <div className="testi-info d-flex align-items-center">
                          <img
                            className="img-fluid rounded-circle"
                            src="assets/images/resources/testi-img1.jpg"
                            alt="Testimonial Image"
                            loading="lazy"
                          />
                          <div className="testi-info-inner d-flex flex-column align-items-start">
                            <h4 className="mb-0 fw-semibold sz-22">
                              Jack William
                            </h4>
                            <span>
                              CEO of{" "}
                              <a
                                href="javascript:void(0);"
                                title=""
                                target="_blank"
                              >
                                ACA Global
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
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

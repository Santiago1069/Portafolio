"use client";
import Swiper from "swiper/bundle";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    const swiper = new Swiper(".port-caro", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".port-pagi",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <section>
      <div className="position-relative pt-110 w-100">
        <div className="sec-title-wrap mb-50 d-flex flex-column align-items-center position-relative w-100 text-center">
          <div
            className="sec-title d-flex flex-column align-items-center w-100 wow fadeInUp"
            data-wow-duration=".5s"
            data-wow-delay=".2s"
          >
            <span className="sec-sub rounded-pill text-center">Portfolio</span>
            <h2 className="mb-0 sz-40">My Recent Projects</h2>
          </div>
        </div>
        <div className="port-wrap position-relative w-100">
          <div className="port-caro swiper w-100">
            <div className="swiper-wrapper">
              <div className="port-item swiper-slide d-block position-relative">
                <div className="port-box d-flex flex-column align-items-start w-100">
                  <div className="port-img round15 overflow-hidden position-relative w-100">
                    <a href="portfolio-detail.html" title="">
                      <img
                        className="img-fluid w-100"
                        src="assets/images/resources/port-img1.jpg"
                        alt="Portfolio Image"
                        loading="lazy"
                      />
                    </a>
                    <div className="port-cat d-flex align-items-center position-absolute">
                      <a href="javascript:void(0);" title="">
                        figma
                      </a>
                      <a href="javascript:void(0);" title="">
                        webflow
                      </a>
                    </div>
                  </div>
                  <div className="port-info d-flex flex-column align-items-start w-100">
                    <a
                      className="port-read rounded-circle"
                      href="portfolio-detail.html"
                      title=""
                    >
                      <i className="far fa-long-arrow-right"></i>
                    </a>
                    <h4 className="mb-0 fw-normal sz-26">
                      <a href="portfolio-detail.html" title="">
                        Minimal Magazine
                      </a>
                    </h4>
                    <span>Designing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="port-pagi gen-pagi mt-60 d-flex flex-wrap align-items-center justify-content-center gap-1 w-100"></div>
        </div>
      </div>
    </section>
  );
}

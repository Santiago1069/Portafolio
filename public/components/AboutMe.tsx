export default function AboutMe() {
  return (
    <section>
      <div className="position-relative pt-140 w-100">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-5">
            <div
              className="sec-title-wrap mb-50 d-flex flex-column align-items-start position-relative w-100 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".2s"
            >
              <div className="sec-title d-flex flex-column align-items-start w-100">
                <span className="sec-sub rounded-pill text-center">
                  About Me
                </span>
                <h2 className="mb-0 sz-40">
                  I Have Rich Experience In Web Site Design
                </h2>
              </div>
              <a
                className="simple-link wow fadeInUp"
                data-wow-duration=".5s"
                data-wow-delay=".4s"
                href="javascript:void(0);"
                title=""
              >
                <i className="fas fa-arrow-alt-to-bottom round5"></i>Download CV
              </a>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-7">
            <div className="about-cap d-flex flex-column position-relative w-100">
              <div
                className="about-img round15 overflow-hidden position-relative w-100 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay=".5s"
              >
                <img
                  className="img-fluid w-100"
                  src="assets/images/resources/about-img.jpg"
                  alt="About Image"
                  loading="lazy"
                />
                <a
                  className="position-absolute sz-60"
                  href="https://www.youtube.com/embed/peiPQzRIxpI?si=anW1E2xiT9J98Xb5"
                  data-fancybox
                  title=""
                >
                  <i className="fas fa-play-circle"></i>
                </a>
              </div>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                nisi, augue urna, mauris elementum ligula semper enim. Tristique
                sed sit facilisis ultrices rhoncus eget ullamcorper tellus.
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendi.
              </p>
              <p className="mb-0">
                Srepellat volup tatibus maiores aliasta consequatur auto
                perferendis repellat quia voluptas sit upto aspernatur te natus
                accusan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

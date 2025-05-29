import { useState } from "react";
import { InfoIntro } from "../models/InfoIntro"

export default function Intro() {

  const [infoIntro, setInfoIntro] = useState<InfoIntro>({
    nombre: "Santiago Sandoval",
    linkWhatsapp: "https://wa.link/gtdaqw",
    linkCv: "https://drive.google.com/file/d/1t9RMb9ZBpKZJDnmvIt6vtKeDPsdrRju4/view?usp=sharing",
    ubicacion: "Medellín, Colombia",
    experiencia: "3+ Años",
    clientes: "20+",
    proyectos: "25+"
  })


  return (
    <section>
      <div className="position-relative w-100">
        <div className="intro-wrapper d-flex flex-column align-items-start position-relative w-100">
          <div className="intro-box d-flex flex-column align-items-start position-relative w-100">
            <span className="sec-sub rounded-pill text-center">
              Introducción
            </span>
            <h2
              className="mb-0 fw-normal sz-55 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".2s"
            >
              Hey! I am <span>{infoIntro.nombre}</span>, Software Developer
            </h2>
            <p
              className="mb-0 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".4s"
            >
              Soy ingeniero de software y me enfoco en crear aplicaciones web
              robustas, escalables y eficientes. Me apasiona el código limpio,
              el diseño centrado en el usuario y la resolución de problemas
              complejos mediante la tecnología.
            </p>
            <div
              className="intro-btns d-flex align-items-center w-100 wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".6s"
            >
              <a
                className="theme-btn position-relative overflow-hidden round10"
                href={infoIntro.linkWhatsapp}
                title="Contactame"
              >
                <i className="far fa-envelope"></i>Contactame
              </a>
              <a className="simple-link" href={infoIntro.linkCv} title="Descargar CV">
                <i className="fas fa-arrow-alt-to-bottom round5"></i>Descargar CV
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
                  <span>Nació en</span>
                  <h3 className="mb-0 fw-normal sz-30">{infoIntro.ubicacion}</h3>
                </div>
              </div>
              <div
                className="col-md-6 col-sm-6 col-lg-3 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay=".4s"
              >
                <div className="fun-fact-box d-flex flex-column align-items-start position-relative w-100">
                  <span>Experiencia</span>
                  <h3 className="mb-0 fw-normal sz-30">{infoIntro.experiencia}</h3>
                </div>
              </div>
              <div
                className="col-md-6 col-sm-6 col-lg-3 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay=".6s"
              >
                <div className="fun-fact-box d-flex flex-column align-items-start position-relative w-100">
                  <span>Clientes</span>
                  <h3 className="mb-0 fw-normal sz-30">{infoIntro.clientes}</h3>
                </div>
              </div>
              <div
                className="col-md-6 col-sm-6 col-lg-3 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay=".8s"
              >
                <div className="fun-fact-box d-flex flex-column align-items-start position-relative w-100">
                  <span>Trabajos Realizados</span>
                  <h3 className="mb-0 fw-normal sz-30">{infoIntro.proyectos}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

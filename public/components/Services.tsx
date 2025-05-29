import { useState } from "react";
import { InfoServices } from "../models/InfoServices";

export default function Services() {
  const [infoServices, setInfoServices] = useState<InfoServices[]>([
    {
      titulo: "Desarrollo de Aplicaciones Web",
      descripcion: "Diseño y desarrollo de aplicaciones web modernas y responsivas.",
      proyectos: 7,
    },
    {
      titulo: "Desarrollo de Paginas Web",
      descripcion: "Creación de sitios web personalizados y optimizados para SEO.",
      proyectos: 11,
    },
    {
      titulo: "Software a Medida",
      descripcion: "Soluciones de software personalizadas para necesidades específicas.",
      proyectos: 1,
    },
    {
      titulo: "Aplicaciones de Escritorio",
      descripcion: "Desarrollo de aplicaciones de escritorio para Windows.",
      proyectos: 1,
    },
    {
      titulo: "Email Marketing",
      descripcion: "Estrategias de email marketing para aumentar la conversión y retención.",
      proyectos: 2,
    },
    {
      titulo: "Integración de API",
      descripcion: "Integración de APIs para mejorar la funcionalidad de las aplicaciones.",
      proyectos: 4,
    }
  ]);


  return (
    <section>
      <div className="position-relative pt-100 w-100">
        <div className="sec-title-wrap mb-50 d-flex flex-column align-items-center position-relative w-100 text-center">
          <div
            className="sec-title d-flex flex-column align-items-center w-100 wow fadeInUp"
            data-wow-duration=".5s"
            data-wow-delay=".2s"
          >
            <span className="sec-sub rounded-pill text-center">Servicios</span>
            <h2 className="mb-0 sz-40">Mis especializaciones</h2>
          </div>
        </div>
        <div className="serv-boxes position-relative w-100">
          <div className="row mrg40">
            {infoServices.map((item, index) => (
              <div
                className="col-md-6 col-sm-6 col-lg-4 wow fadeIn"
                data-wow-duration=".8s"
                data-wow-delay=".2s"
                key={index}
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
                      {item.titulo}
                    </a>
                  </h3>
                  <p className="mb-0">{item.descripcion}</p>
                  <span>{item.proyectos} Proyectos</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="view-all mt-80 text-center position-relative w-100">
          <p className="mb-0">
            Want to see what i am going to offer? Click here to{" "}
            <a href="services.html" title="">
              View More services
            </a>
          </p>
        </div> */}
      </div>
    </section>
  );
}

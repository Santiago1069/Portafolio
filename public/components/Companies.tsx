import { useState } from "react";
import { InfoCompanies } from "../models/InfoCompanies";

export default function Companies() {
  const [companies, setCompanies] = useState<InfoCompanies[]>([
    {
      titulo: "Bancolombia",
      linkPagina: "https://www.bancolombia.com/personas",
      logo: "../assets/images/LogoBancolombia.webp",
    },
    {
      titulo: "Nutresa",
      linkPagina: "https://www.gruponutresa.com/",
      logo: "https://download.logo.wine/logo/Grupo_Nutresa/Grupo_Nutresa-Logo.wine.png",
    },
    {
      titulo: "El Hilo Azul",
      linkPagina: "https://elhiloazul.com/",
      logo: "https://elhiloazul.com/wp-content/uploads/2025/02/cropped-logo-el-hilo-azul-1.png",
    },
    {
      titulo: "IkiTech",
      linkPagina: "https://ikitech.com.co/",
      logo: "https://radx.ikitech.com.co/assets/images/logo/IkiTech.jpg",
    }

  ]);

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
                  Compañias
                </span>
                <h2 className="mb-0 sz-40">Trabajé con empresas reconocidas</h2>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-7">
            <div className="comp-boxes round15 position-relative w-100">
              <div className="row mrg">
                {companies.map((item, index) => (
                  <div className="col-md-6 col-sm-6 col-lg-6" key={index}>
                    <div className="comp-box d-flex align-items-center justify-content-center position-relative w-100 text-center">
                      <a href={item.linkPagina} title="">
                        <img
                          className="img-fluid"
                          src={`${item.logo}`}
                          alt="Company Image"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

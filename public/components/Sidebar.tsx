import { useState } from "react";
import { InfoSidebar } from "../models/InfoSidebar";

export default function Sidebar() {
  const [info, setInfo] = useState<InfoSidebar>({
    imagen:
      "https://media.licdn.com/dms/image/v2/D4E03AQEoP8uyWDxBiQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702068770517?e=1753920000&v=beta&t=32Qv8hrznUe6OZmSKd_FIgbZsCTIUX2JPk_0haI1bjE",
    correo: "casaba3131@gmail.com",
    direccion: "Medellín, Colombia",
    redesSociales: [
      {
        icono: "fab fa-linkedin-in",
        enlace: "https://www.linkedin.com/in/santiago-sandoval-arboleda-509335216/",
      }
    ],
  });

  return (
    <div className="resume-sidebar d-flex flex-column position-sticky">
      <div className="theiaStickySidebar">
        <div className="resume-info round50 d-flex flex-column position-relative w-100">
          <div className="user-img round40 overflow-hidden position-relative w-100">
            <img
              className="img-fluid w-100"
              src={info.imagen}
              alt="User Image"
              loading="lazy"
            />
          </div>
          <div className="user-info d-flex flex-column align-items-start w-100">
            <a
              href={`mailto:${info.correo}`}
              title={`Enviar correo a ${info.correo}`}
            >
              {info.correo}
            </a>

            <span>{info.direccion}</span>
            <p className="mb-0">
              &copy; {new Date().getFullYear()}.
              {" "}
              Todos los derechos reservados
            </p>
          </div>
          <div className="user-social-wrap d-flex align-items-center justify-content-between position-relative w-100">
            <span>Sígueme:</span>
            <div className="social-links d-flex align-items-center gap-1">
              {info.redesSociales.map((red, index) => (
                <a
                  key={index}
                  href={red.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Ir a ${red.icono}`}
                >
                  <i className={red.icono}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import AboutMe from "../../public/components/AboutMe";
import Companies from "../../public/components/Companies";
import Education from "../../public/components/Education";
import Experience from "../../public/components/Experience";
import Intro from "../../public/components/Intro";
import Line from "../../public/components/Line";
import Services from "../../public/components/Services";
import Sidebar from "../../public/components/Sidebar";
import Skills from "../../public/components/Skills";

export default function Home() {
  return (
    <>
      <section>
        <div className="w-100 pt-60 pb-130 position-relative">
          <div className="container">
            <div className="resume-wrapper d-flex justify-content-between position-relative w-100">
              <Sidebar />
              <div className="resume-content d-flex flex-column">
                <div className="theiaStickySidebar">
                  <Intro />
                  <AboutMe />
                  <Services />
                  <Companies />
                  <Skills />
                  <Line />
                  <section>
                    <div className="position-relative pt-110 w-100">
                      <div className="edu-exp-wrap position-relative w-100">
                        <div className="row mrg40">
                          <Education />
                          <Experience />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

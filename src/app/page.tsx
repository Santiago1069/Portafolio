'use client'

import { useEffect } from "react";
import AboutMe from "../../public/components/AboutMe";
import Blogs from "../../public/components/Blogs";
import Companies from "../../public/components/Companies";
import Contact from "../../public/components/Contact";
import ContactMe from "../../public/components/ContactMe";
import Education from "../../public/components/Education";
import Experience from "../../public/components/Experience";
import Intro from "../../public/components/Intro";
import Line from "../../public/components/Line";
import Pricing from "../../public/components/Pricing";
import Projects from "../../public/components/Projects";
import Services from "../../public/components/Services";
import Sidebar from "../../public/components/Sidebar";
import Skills from "../../public/components/Skills";
import Testimonial from "../../public/components/Testimonial";

export default function Home() {

  useEffect(() => {
    import("wowjs").then((WOW) => {
      new WOW.WOW().init();
    });
  }, []);


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
                  <Projects />
                  <Testimonial />
                  {/* <Pricing /> */}
                  <ContactMe />
                  <Blogs />
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

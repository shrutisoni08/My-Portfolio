// import React from 'react'
import "./aboutsection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section
      id="about"
        className="about-section"
        //   data-aos="fade-up"
      >
        <h1  data-aos="fade-up" className="heading">ABOUT ME</h1>
        <p  data-aos="fade-up" className="details">
          A Front-End Developer obsessed with crafting pixel-perfect web
          experiences. With a solid foundation in HTML, CSS, and JavaScript, I
          transform designs into seamless, responsive, and visually captivating
          websites. My commitment to clean code, pixel-perfect design, and
          user-centric development ensures that every project I touch combines
          aesthetics and functionality. As an avid learner, I thrive on staying
          ahead of industry trends. Let&#39;s collaborate to turn your ideas into
          dynamic web realities that engage and inspire. Together, we can make
          the web a more beautiful and user-friendly place.
        </p>
      </section>
      <hr />
    </>
  );
};

export default AboutSection;

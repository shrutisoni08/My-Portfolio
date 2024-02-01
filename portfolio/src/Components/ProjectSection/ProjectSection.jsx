// import React from 'react'
import "./projectsection.css";
import QuizLogo from "../../assets/QuizLogo.png";
import EcomLogo from "../../assets/EcomLogo.png";
import AnimationLogo from "../../assets/AnimationLogo.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="project_section_container" data-aos="fade-up">
        <h1 className="heading" data-aos="fade-up">My Projects</h1>
        <p className="details" data-aos="fade-up">
          Here are some of my projects that I have worked on:
        </p>

        <div className="projects_container"  data-aos="zoom-in-up">
          <div className="projectImg">
            <img className="projectLogo" src={QuizLogo} alt="quizLogo" />
          </div>
          <div className="project_description">
            <p className="details">
              I developed a dynamic and engaging quiz application using a
              combination of HTML, CSS, and JavaScript. The project was aimed at
              creating an interactive platform for users to test their knowledge
              on various topics. The app seamlessly integrates user-friendly
              design with responsive elements, ensuring a smooth experience
              across different devices.
            </p>
            <a href="https://shrutisoni08.github.io/Quiz-Buzz/">
              <button
                onClick={() =>
                  window.open(
                    "https://shrutisoni08.github.io/Quiz-Buzz/",
                    "_blank"
                  )
                }
              >
                QuizBuzz
              </button>
            </a>
          </div>
        </div>

        <div className="projects_container" data-aos="zoom-in-up">
          <div className="projectImg">
            <img className="projectLogo" src={EcomLogo} alt="" />
          </div>
          <div className="project_description">
            <p className="details">
              I developed a dynamic and engaging quiz application using a
              combination of HTML, CSS, and JavaScript. The project was aimed at
              creating an interactive platform for users to test their knowledge
              on various topics. The app seamlessly integrates user-friendly
              design with responsive elements, ensuring a smooth experience
              across different devices.
            </p>
            <a href="https://shrutisoni08.github.io/Quiz-Buzz/">
              <button
                onClick={() =>
                  window.open(
                    "https://shrutisoni08.github.io/Quiz-Buzz/",
                    "_blank"
                  )
                }
              >
                Fashion_Plaza
              </button>
            </a>
          </div>
        </div>
        <div className="projects_container" data-aos="zoom-in-up">
          <div className="projectImg">
            <img className="projectLogo" src={AnimationLogo} alt="" />
          </div>
          <div className="project_description">
            <p className="details">
              I developed a dynamic and engaging quiz application using a
              combination of HTML, CSS, and JavaScript. The project was aimed at
              creating an interactive platform for users to test their knowledge
              on various topics. The app seamlessly integrates user-friendly
              design with responsive elements, ensuring a smooth experience
              across different devices.
            </p>
            <a href="https://shrutisoni08.github.io/Quiz-Buzz/">
              <button
                onClick={() =>
                  window.open(
                    "https://shrutisoni08.github.io/Quiz-Buzz/",
                    "_blank"
                  )
                }
              >
                Animation
              </button>
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
    </>
  );
};

export default ProjectSection;

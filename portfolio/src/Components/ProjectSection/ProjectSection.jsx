// import React from 'react'
import "./projectsection.css";
import QuizLogo from "../../assets/QuizLogo.png";
import EcomLogo from "../../assets/EcomLogo.png";
import myTunesLogo from "../../assets/myTunesLogo.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

const ProjectSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div id="projects" className="project_section_container" data-aos="fade-up">

        <h1 className="heading" data-aos="fade-up">
          My Projects
        </h1>
        <p className="para" data-aos="fade-up">
          Here are some of my projects that I have worked on:
        </p>

        <div
          className="projects_container" data-aos="zoom-in-up"
        >
          <div className="projectImg">
            <img className="projectLogo" src={myTunesLogo} alt="" />
          </div>
          <div className="project_description">
            <p className="details">
              Introducing a clone of the popular myTunes web page, meticulously
              crafted with HTML, CSS, and Bootstrap. This web page pays homage
              to the sleek design and intuitive functionality of myTunes,
              offering users a familiar and seamless browsing experience. With
              Bootstrap&#39;s responsive framework, the page adapts effortlessly to
              various screen sizes, ensuring accessibility across devices.
              <Accordion>
                <AccordionSummary
                  id="panel-header"
                  aria-controls="panel-content"
                >
                  <button>Know More</button>
                  <a href="https://shrutisoni08.github.io/myTunes/">
                    <button
                      onClick={() =>
                        window.open(
                          "https://shrutisoni08.github.io/myTunes/",
                          "_blank"
                        )
                      }
                    >
                      myTunes
                    </button>
                  </a>
                </AccordionSummary>
                <AccordionDetails>
                  This project is a clone of the myTunes web page, developed
                  using HTML, CSS, and Bootstrap. The clone replicates the
                  layout, design, and functionality of the myTunes interface,
                  providing users with a familiar browsing experience for
                  discovering and enjoying music.
                </AccordionDetails>
              </Accordion>
            </p>
          </div>
        </div>


        <div className="projects_container" >
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
              across different devices.{" "}
              <Accordion>
                <AccordionSummary
                  id="panel-header"
                  aria-controls="panel-content"
                >
                  <button>Know More</button>
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
                </AccordionSummary>
                <AccordionDetails>
                  The app offers three categories: HTML, CSS, and JavaScript,
                  each comprising 10 thoughtfully crafted questions. Users are
                  presented with 4 options for each question and have 15 seconds
                  to select the correct answer. After completing the quiz, users
                  receive their results, including their name and score.
                  QuizBuzz provides a fun and interactive way for users to test
                  their knowledge in web development while enhancing their
                  understanding of HTML, CSS, and JavaScript concepts.
                </AccordionDetails>
              </Accordion>
            </p>
          </div>
        </div>

        <div
          className="projects_container"
          // data-aos="zoom-in-up"
        >
          <div className="projectImg">
            <img className="projectLogo" src={EcomLogo} alt="" />
          </div>
          <div className="project_description">
            <p className="details">
              Welcome to Fashion_Plaza - Ecommerce website that allows customers
              to browse through various products from different brands at one
              place. Customers can view product details, add it to cart, user
              can login and manage their account as well. Admin panel is
              available for managing inventory, Full responsive design ensures
              seamless experience on all devices.
              <Accordion>
                <AccordionSummary
                  id="panel-header"
                  aria-controls="panel-content"
                >
                  <button>Know More</button>
                  <a href="https://elegan-coissant-84fdf1.netlify.app/">
                    <button
                      onClick={() =>
                        window.open(
                          "https://elegan-coissant-84fdf1.netlify.app/",
                          "_blank"
                        )
                      }
                    >
                      SHOPOHOLIC
                    </button>
                  </a>
                </AccordionSummary>
                <AccordionDetails>
                  A Full stack E-Commerce website using (MERN) React JS,
                  MongoDB, Express and Node JS. The website display products,
                  product cart and login registration page using React JS. The
                  back-end of the website using express, node js, mongo db and
                  react js. Where i have create the APIs to add product, display
                  product, update product, update cart items and login
                  registration API. I have also make the admin panel of the
                  website to add product and update product.
                </AccordionDetails>
              </Accordion>
            </p>
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

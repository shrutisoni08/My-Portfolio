// import React from 'react'
import './skillssection.css'
import HTML from '../../assets/icons8-html-5.svg'
import CSS from '../../assets/icons8-css.svg'
import JAVASCRIPT from '../../assets/icons8-javascript.svg'
import REACT from '../../assets/icons8-react.svg'
import FIGMA from '../../assets/icons8-figma.svg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

const SkillsSection = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <>
    <section id='skills' data-aos="fade-up" className='skills-section'>
        <h1 className='heading'>Skills</h1>
        <div className="skill-container">
            <img src={HTML} alt="html" />
            <img src={CSS} alt="html" />
            <img src={JAVASCRIPT} alt="html" />
            <img src={REACT} alt="html" />
            <img src={FIGMA} alt="html" />
        </div>
    </section>
    <hr />
    </>
  )
}

export default SkillsSection
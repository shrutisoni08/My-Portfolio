// import React from 'react'
import "./App.css";
import AboutSection from "./Components/AboutSection/AboutSection";
import CertificateSection from "./Components/CertificateSection/CertificateSection";
import HeroSection from "./Components/HeroSection/HeroSection";

import Navbar from "./Components/Navigation/Navbar";
import SkillsSection from "./Components/SkillSection/SkillsSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificateSection />
    </>
  );
};

export default App;

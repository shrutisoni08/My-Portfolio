import  { useState } from 'react';
import './navbar.css';
import { SlMenu } from 'react-icons/sl';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="my-name">
          <h1 id="logo">$hruti $oni</h1>
        </div>
        <div className={`navigation-links ${isMenuOpen ? 'active' : ''}`}>
          <ul className="links">
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#certificate">CERTIFICATES</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
          </ul>
        </div>
        <div className='responsive-menu' onClick={handleMenuToggle}>
          {isMenuOpen ? <AiOutlineClose /> : <SlMenu />}
        </div>
      </nav>
      <div className={`responsive-navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#" onClick={handleMenuToggle}>ABOUT</a>
          </li>
          <li>
            <a href="#" onClick={handleMenuToggle}>SKILLS</a>
          </li>
          <li>
            <a href="#" onClick={handleMenuToggle}>CERTIFICATES</a>
          </li>
          <li>
            <a href="#" onClick={handleMenuToggle}>PROJECTS</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

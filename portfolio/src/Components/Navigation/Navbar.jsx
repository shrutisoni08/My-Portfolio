// import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="my-name">
        <h1>$hruti $oni</h1> 
        </div>
        <div className='navigation-links'>
            <ul className='links'>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">SKILLS</a></li>
                <li><a href="#">CERTIFICATES</a></li>
                <li><a href="#">PROJECTS</a></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar
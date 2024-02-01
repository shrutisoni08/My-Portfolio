// import React from 'react'
import './herosection.css'
import image from '../../assets/profile illustration 3.jpeg'
import logoImage from '../../assets/my-logo-name.png'


const HeroSection = () => {
  return (
    <>
    <section className='hero-section'>
        <div className='left-section'>
            <img className='my-logo-img' src={logoImage} alt="" />
        </div>
        <div className='right-section'>
        <img className='my-profile-img' src={image} alt="" />
        </div>
    </section>
    </>
  )
}

export default HeroSection
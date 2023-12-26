// import React from 'react'
import './certificatesection.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination'; 
import 'swiper/css/navigation';
import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules';


import HTMLIMG from '../../assets/Certificates/Certificate - HTML.png'
import CSSIMG from '../../assets/Certificates/Certificate - CSS.png'
import JSIMG from '../../assets/Certificates/Certificate - JAVASCRIPT.png'
import INTERNSHIPIMG from '../../assets/Certificates/Certificate - INTERNSHIP.png'

const CertificateSection = () => {
  return (
    <>
    <div className='container'>
      <h1 className='heading'>My Certifications</h1>
      <Swiper className='swiper-container'
      pagination={{el:'.swiper-pagination',clickable:true}}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow,Pagination,Navigation]}
      effect={ 'coverflow' }
      grabCursor = {true}
      centeredSlides = {true}
      loop = {true}
      slidesPerView={'auto'}
      coverflowEffect={
        {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
        }
      } 
      >
        <SwiperSlide>
          <img src={INTERNSHIPIMG} alt="html" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HTMLIMG} alt="html" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CSSIMG} alt="html" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={JSIMG} alt="html" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name='arrow-back-outline'></ion-icon>
          </div>

          <div className="swiper-button-next slider-arrow">
            <ion-icon name='arrow-forward-outline'></ion-icon>
          </div>
        <div className="swiper-pagination"></div>
        
        </div>


      </Swiper>
    </div>
    </>
  )
}

export default CertificateSection
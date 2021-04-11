import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import banner1 from '../public/images/main/111.jpg';
import banner2 from '../public/images/main/article4.jpg';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Banner = () => {
  return (
    <>
      <section className="banner">
        <Splide
          options={ {
            type: 'loop',
            fixedHeight: '500px',
            autoplay: true,
          }}
        >
          <SplideSlide>
            <img className="banner-img" src={banner1} alt="Image 1"/>
          </SplideSlide>
          <SplideSlide>
            <img className="banner-img" src={banner2} alt="Image 2"/>
          </SplideSlide>
        </Splide>
      </section>
    </>
  )
}

export default Banner;
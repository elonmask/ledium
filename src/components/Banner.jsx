import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import banner1 from '../public/images/main/111.jpg';
import banner2 from '../public/images/main/article4.jpg';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import axios from 'axios';

const Banner = () => {

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    axios.get(`https://admin.ledium.shop/banners`)
      .then(res => {
        const data = res.data;
        setBanners(data[0].img);
      }) 
  }, []);

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
          {
            banners.map(banner => (
              <SplideSlide>
                  <img className="banner-img" src={`https://admin.ledium.shop` + banner.url} key={banner.id}/>
                </SplideSlide>
            ))
          }
        </Splide>
      </section>
    </>
  )
}

export default Banner;
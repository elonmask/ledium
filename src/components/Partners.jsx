import React from 'react';
import '../public/style/main.css';

import partner1 from '../public/images/partners/1.jpg';
import partner2 from '../public/images/partners/2.jpg';
import partner3 from '../public/images/partners/3.jpg';
import partner4 from '../public/images/partners/4.jpg';
import partner5 from '../public/images/partners/5.jpg';
import partner6 from '../public/images/partners/6.jpg';
import partner7 from '../public/images/partners/7.jpg';
import partner8 from '../public/images/partners/8.jpg';
import partner9 from '../public/images/partners/9.jpg';
import partner10 from '../public/images/partners/10.jpg';

const Partners = () => {
  const partnersArray = [
    {
      id: 1,
      img: partner1,
    },
    {
      id: 2,
      img: partner2,
    },
    {
      id: 3,
      img: partner3,
    },
    {
      id: 4,
      img: partner4,
    },
    {
      id: 5,
      img: partner5,
    },
    {
      id: 6,
      img: partner6,
    },
    {
      id: 7,
      img: partner7,
    },
    {
      id: 8,
      img: partner8,
    },
    {
      id: 9,
      img: partner9,
    },
    {
      id: 10,
      img: partner10,
    },
  ]

  return (
    <section className="partners">
      <h2>Нам довіряють</h2>
      <div className="partners-block">
      {partnersArray.map(n => (
        <>
          <img
            alt=""
            className="partners-img"
            src={n.img}
          />
        </>
      ))}
      </div>    
    </section>
  )
}

export default Partners;
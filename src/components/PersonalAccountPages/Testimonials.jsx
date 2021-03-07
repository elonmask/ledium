import React from 'react';

import './style/testimonials.css';
import { useState } from 'react';

const Testimonials = () => {

  const [commentOpen, setCommentOpen] = useState(false);

  return (
    <>
      <main className="personal-info">
        <div className="personal-info__testimonials">
          <div className="testimonials">
            <div className="testimonials__block">
              <img
                alt=""
                src="https://api.ledium.shop/img/?prodname=Лампа LED A55 6W 4100K Е27"
                className="testimonials__img"
              />
              <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, quae.</h3>
              <p className="testimonials__comment">Все отлично</p>
              <p className="testimonials__answer">Ответов: 0</p>
              <i
                className={ commentOpen ? 'fa-sort-up-hidden' : 'fas fa-sort-down' }
                onClick={()=>{setCommentOpen(true)}}
              ></i>
            </div>
            <div
              className={ 
                commentOpen 
                ? "testimonials__form testimonials__form-active " 
                : "testimonials__form" 
              }
            >
              <div className="testimonials__user"></div>
              <textarea
                className="testimonials__textarea"
                type="text"
                placeholder="Спасибо за отзыв!"
              ></textarea>
              <button type="submit" className="testimonials__btn">Ответить</button>
              <i
                className="fas fa-sort-up"
                onClick={()=>{setCommentOpen(false)}}
              ></i>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Testimonials;

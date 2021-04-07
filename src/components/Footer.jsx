import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { getCategories } from '../public/utils';
import categoriesEnglish from '../public/categories.json';

import instagram  from '../public/images/instagram.svg';
import facebook  from '../public/images/facebook.svg';
import youtube  from '../public/images/youtube.svg';
import arrow from '../public/images/arrow.svg';
import logo from '../public/./images/LEDiumLOGO.png';

const Footer = () => {
  const history = useHistory();

  const [categories, setCategories] = useState(getCategories);

  useEffect(() => {
    if( categories == false ) {
      axios
      .get('https://api.ledium.shop/feed')
      .then( response => {
        sessionStorage.setItem("data", JSON.stringify(response.data));
        setCategories(getCategories)
      })
    }
  })

  const setCategoryEng = (id) => {
    let eng = '';
    categoriesEnglish.map(category => {
      if ( category.id === id) {
        console.log(category.name);
        eng = category.name;
      }
    })
    return eng;
  }
 
  if (categories.length > 0) {
    return (
      <footer className="footer">
        <div className="footer__top">
          <div className="footer__section">
            <img className="footer__img" alt="" src={logo} />
            <p className="footer__p">
              г. Запорожье
            </p>
            <a className="footer__p footer__a" href="tel: +380507324444">+38 (050) 732 44 44</a>
            <p className="footer__p">
              Сopyright 2020.<br />
              Все права защищены.
            </p>
          </div>
          <div className="footer__section">
            <h4 className="footer__h4">Продукция</h4>
            <ul>
              {categories.map(category => (
                <li 
                  key={category.id}
                  className="footer__item"
                >
                  <a
                    className="footer__nav-link"
                    onClick={() => {history.push(`/catalog/category/${setCategoryEng(category.id)}`)}}
                  >
                    {category.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__section">
            <h4 className="footer__h4">Общая информация</h4>
            <ul>
              <li className="footer__item"><a href="#" className="footer__nav-link">Свяжитесь с нами</a></li>
              <li className="footer__item"><a href="#" className="footer__nav-link">Политика конфидинциальности</a></li>
              <li className="footer__item"><a href="#" className="footer__nav-link">Условия и положения</a></li>
            </ul>
          </div>
          <div className="footer__section">
            <h4 className="footer__h4">Пресс-центр</h4>
            <ul>
              <li className="footer__item"><a href="#" className="footer__nav-link">Новости</a></li>
              <li className="footer__item"><a href="#" className="footer__nav-link">Фотогалерея</a></li>
              <li className="footer__item"><a href="#" className="footer__nav-link">Видеогалерея</a></li>
            </ul>
          </div>
          <div className="footer__section">
            <h4 className="footer__h4">Партнерам</h4>
            <ul>
              <li className="footer__item"><a href="#" className="footer__nav-link">Обучение</a></li>
              <li className="footer__item"><a href="#" className="footer__nav-link">Каталоги</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__icons">
          <a href="http://instagram.com">
            <img src={instagram} alt="instagram" className="footer__icon" />
          </a>
          <a href="http://facebook.com">
            <img src={facebook} alt="facebook" className="footer__icon" />
          </a>
          <a href="http://youtube.com">
            <img src={youtube} alt="youtube" className="footer__icon" />
          </a>
        </div>
        <a href="#">
          <img className="footer__arrow" alt="" src={arrow} />
        </a>
      </footer>
    )
  } else {
    return (
      <div></div>
    )
  }
};

export default Footer;
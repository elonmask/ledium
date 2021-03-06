import React, { useState } from 'react';
import PersonalMenu from './PersonalAccountPages/PersonalMenu';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { getCategories } from '../public/utils';
import categoriesEnglish from '../public/categories.json';
import Account from './Account/Account'

import mobLogo from '../public/./images/LEDiumLOGO.png'
import lampa  from '../public/images/lampa.png';
import prozector  from '../public/images/prozhektor.png';
import svetilnik  from '../public/images/svetilnik.png';
import nastLampa  from '../public/images/akcent-svetilnik.png';
import phitolampa  from '../public/images/ulichnoe-osveschenie.png';
import instagram  from '../public/images/instagram.svg';
import facebook  from '../public/images/facebook.svg';
import youtube  from '../public/images/youtube.svg';
import supermarket from '../public/images/supermarket.svg';
import phone from '../public/images/phone-call.svg';


const Header = () => {

  const categoriesImg = [
    {
      img: lampa,
      id: '1',
    },
    {
      img: prozector,
      id: '2',
    },
    {
      img: phitolampa,
      id: '3',
    },
    {
      img: svetilnik,
      id: '4',
    },
    {
      img: nastLampa,
      id: '5',
    },
    {
      img: lampa,
      id: '6',
    },
  ]
  const history = useHistory();

  const [categories, setCategories] = useState(getCategories);
  const [burger, setBurger] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  let className = 'header__burger';
  let mobMenu = 'mob-menu';
  if (burger) {
    className += ' active';
    mobMenu += ' active-menu';
  };

  const openMenu = () => {
    setMenuIsOpen(true);
  }

  const closeMenu = (id) => {
    history.push(`/catalog/category/${setCategoryEng(id)}`);
    setBurger(false);
  }

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

  const setPicture = (id) => {
    let img = '';
    categoriesImg.map(categoryImg => {
      if (categoryImg.id == id) {
        img =  categoryImg.img;
      }
    })
    return img;
  }

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
      <header 
       //className={ window.location.pathname.includes('catalog') ? "header header-height" : "header"}
        className="header"
      >
        <section className="header__block">
          <div
            className={className}
            onClick={() => { setBurger(!burger)}}
          >
            <span></span>
          </div>
          <section className={mobMenu}>
            <img alt="" src={mobLogo} className="mob-menu__logo" />
            <ul className="mob-menu__list">
              {categories.map(category => (
                
                <li className="mob-menu__item" key={category.id}>
                  <input 
                    type="checkbox" 
                    name="menu-mob" 
                    className="toggler-arrow" 
                    id="menu-mob-arrow" 
                  />
                  {/*<div className="arrow"></div>*/}
                  <a
                    className="mob-menu__link"
                    onClick={() => {closeMenu(category.id)}}
                  >
                    <img 
                      alt="" 
                      src={setPicture(category.id)} 
                      className="mob-menu__img" 
                    />
                    {category.text}
                  </a>
                  {/*<ul className="mob-menu__list-child">
                    <li className="mob-menu__item-child">
                      <a href="#" className="mob-menu__link-child">
                        <span className="mob-menu__span">Светодиодные лампы(LED)</span>
                      </a>
                    </li>
                  </ul>*/}
                </li>
              ))}
            </ul>
            <ul className="mob-menu__list">
              <li className="mob-menu__item-info"><a href="#" className="mob-menu__link-info">Нравится</a></li>
              <li className="mob-menu__item-info"><a href="#" className="mob-menu__link-info">О компании</a></li>
              <li className="mob-menu__item-info"><a href="#" className="mob-menu__link-info">Новинки</a></li>
              <li className="mob-menu__item-info"><a href="#" className="mob-menu__link-info header__link--active">Акции</a></li>
              <li className="mob-menu__item-info"><a href="#" className="mob-menu__link-info">Где купить</a></li>
              <li className="mob-menu__item-info"><a href="#" className="mob-menu__link-info">Контакты</a></li>
              <ul className="mob-menu__list-icon">
                <li className="mob-menu__item-icon">
                  <a href="http://instagram.com" className="header__link">
                    <img src={instagram} alt="instagram" className="header__menu-icons" />
                  </a>
                </li>
                <li className="mob-menu__item-icon">
                  <a href="http://facebook.com" className="header__link">
                    <img src={facebook} alt="instagram" className="header__menu-icons" />
                  </a>
                </li>
                <li className="mob-menu__item-icon">
                  <a href="http://youtube.com" className="header__link">
                    <img src={youtube} alt="instagram" className="header__menu-icons" />
                  </a>
                </li>
              </ul>
            </ul>
          </section>
          <a href="/" className="header__logo"></a>
          <section className="header__contant">
            <section className="header__menu">
              <ul className="header__list">
                <li className="header__item"><a href="#" className="header__link header__link--action">О компании</a></li>
                <li className="header__item"><a href="#" className="header__link header__link--action">Новинки</a></li>
                <li className="header__item"><a href="#" className="header__link header__link--active header__link--action">Акции</a></li>
                <li className="header__item"><a href="#" className="header__link header__link--action">Где купить</a></li>
                <li className="header__item"><a href="#" className="header__link header__link--action">Контакты</a></li>
                <li className="header__item">
                  <a href="http://instagram.com" className="header__link">
                    <img src={instagram} alt="instagram" className="header__menu-icons" />
                  </a>
                </li>
                <li className="header__item">
                  <a href="http://facebook.com" className="header__link">
                    <img src={facebook} alt="instagram" className="header__menu-icons" />
                  </a>
                </li>
                <li className="header__item">
                  <a href="http://youtube.com" className="header__link">
                    <img src={youtube} alt="instagram" className="header__menu-icons" />
                  </a>
                </li>
              </ul>
              <ul className="header__specs">
                <li><a href="#" className="header__lang">UA/RU</a></li>
              </ul>
            </section>
            <section className="header__action">
              <a href="/catalog" className="header__catalog">Каталог</a>
              <div className="header__search">
                <input className="header__searchbar" type="text" name="search" placeholder="Поиск товаров по каталогу" />
                <button className="header__btn-search">Поиск</button>
              </div>
              <a href="#" className="none header__mob-block header__mob-block--active">
                <img src={phone} alt="" className="header__icon header__icon--white" />
              </a>
              <a 
                className=" header__mob-block header__mob-block--active user-block"
                onClick={()=>{openMenu()}}
              >
                <i className="fas fa-user-alt"></i>
              </a>
              {/*<a href="#" className="header__mob-block" id="block1">
                <img src="images/adjust.svg" alt="" className="header__icon" />
              </a>*/}
              <a href="#" className="header__mob-block">
                <img src={supermarket} alt="" className="header__icon" />
              </a>
            </section>
            <Account
              setMenuIsOpen={setMenuIsOpen}
              menuIsOpen={menuIsOpen}
            />
          </section>
        </section>
      <ul
      /*className={ window.location.pathname.includes('catalog') 
        ? "header__nav-list header__nav-list-none" 
        : "header__nav-list"
      }*/
        className="header__nav-list"
      >
        {categories.map(category => (
          <li className="header__nav-item" key={category.id}>
            <a 
              className="header__nav-link"
              onClick={() => {history.push(`/catalog/category/${setCategoryEng(category.id)}`)}}
            > 
              <img 
                src={setPicture(category.id)}
                alt="" 
                className="header__nav-img" 
              />
                {category.text} 
            </a>
            {/*<div className="header__menu-child">
              <ul className="header__list-child">
                <li className="header__item-child">
                  <a href="#" className="header__link-child">
                    <img className="header__img-child" alt="" src="./images/menu-child/1.1.jpg" />
                      <span className="header__span">Светодиодные(LED) лампы</span>
                  </a>
                </li>
              </ul>
            </div>*/}
          </li>
        ))}
      </ul>
    </header>
    )
  } else {
      return (
        <div></div>
      )
  }
};

export default Header;

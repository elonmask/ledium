import React, { useState } from 'react';
import PersonalMenu from './PersonalAccountPages/PersonalMenu';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { getCategories } from '../public/utils';
import categoriesEnglish from '../public/categories.json';
import Account from './Account/Account';
import ShoppingCart from './PersonalAccountPages/ShoppingCart';

import mobLogo from '../public/./images/LEDiumLOGO.png'
import lampa  from '../public/images/lampa.png';
import panels_  from '../public/images/panels_.png';
import prozector  from '../public/images/prozhektor.png';
import svetilnik  from '../public/images/svetilnik.png';
import nastLampa  from '../public/images/akcent-svetilnik.png';
import phitolampa  from './../public/images/phitolamp.png';
import instagram  from '../public/images/instagram.svg';
import facebook  from '../public/images/facebook.svg';
import youtube  from '../public/images/youtube.svg';
import supermarket from '../public/images/supermarket.svg';
import phone from '../public/images/phone-call.svg';
import HeaderAccount from './HeaderAccount';
import Search from './SearchBody';


const Header = () => {

  const categoriesImg = [
    {
      img: lampa,
      id: '3',
    },
    {
      img: prozector,
      id: '4',
    },
    {
      img: phitolampa,
      id: '5',
    },
    {
      img: svetilnik,
      id: '6',
    },
    {
      img: nastLampa,
      id: '7',
    },
    {
      img: panels_,
      id: '8',
    },
  ]
  const history = useHistory();

  const [categories, setCategories] = useState([]);
  const [burger, setBurger] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);
  const [perMenuIsOpen, setPerMenuIsOpen] = useState(false);

  const openCart = () => {
    setShoppingCartOpen(true);
    setMenuIsOpen(false);
  }

  let className = 'header__burger';
  let mobMenu = 'mob-menu';
  if (burger) {
    className += ' active';
    mobMenu += ' active-menu';
  };

  const closeMenu = (id) => {
    history.push(`/catalog/category/${setCategoryEng(id)}`);
    setBurger(false);
  }

  useEffect(() => {
    axios
      .get('https://admin.ledium.shop/categories')
      .then( response => {
        setCategories(response.data);
      })
  }, []);

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
      if ( category.id === id.toString()) {
        eng = category.name;
      }
    })
    console.log(eng)
    return eng;
  }

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
                    <div className="mob-menu__img" style={ category.id === 8 ? { height: "60px" } : {}} >
                      <img 
                        alt="" 
                        src={setPicture(category.id)} 
                        style={ category.id === 8 ? { height: "60px" } : {}} 
                      />
                    </div>
                    {category.name}
                    <i className="fas fa-chevron-right arrow-menu"></i>
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
              <li className="mob-menu__item-info"><a href="/#popular" className="mob-menu__link-info">Популярні</a></li>
              <li className="mob-menu__item-info"><a href="/#sales" className="mob-menu__link-info header__link--active">Акції</a></li>
              <li className="mob-menu__item-info"><a href="#footer" className="mob-menu__link-info">Контакти</a></li>
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
              </ul>
            </ul>
          </section>
          <a href="/" className="header__logo"></a>
          <section className="header__contant">
            <section className="header__menu">
              <ul className="header__list">
                <li className="header__item"><a href="/#popular" className="header__link header__link--action">Популярні</a></li>
                <li className="header__item"><a href="/#sales" className="header__link header__link--active header__link--action">Акції</a></li>
                <li className="header__item"><a href="#footer" className="header__link header__link--action">Контакти</a></li>
              </ul>
              <ul className="header__menu--icons">
                <li className="header__item">
                  <a href="http://instagram.com" className="header__link">
                    <img src={instagram} alt="instagram" className="header__menu-icons" />
                  </a>
                  <a href="http://facebook.com" className="header__link">
                    <img src={facebook} alt="instagram" className="header__menu-icons" />
                  </a>
                </li>
              </ul>
              <ul className="header__specs">
                <li>{/*<a href="#" className="header__lang">UA/RU</a>*/}</li>
                </ul>
            </section>
            <section className="header__action">
              <a href="/catalog" className="header__catalog">Каталог</a>
              <Search/>
              <HeaderAccount 
                setMenuIsOpen={setMenuIsOpen}
                menuIsOpen={menuIsOpen}
                setPerMenuIsOpen={setPerMenuIsOpen}
                perMenuIsOpen={perMenuIsOpen}
              />
              {/*<a href="#" className="header__mob-block" id="block1">
                <img src="images/adjust.svg" alt="" className="header__icon" />
              </a>*/}
              <a className="header__mob-block"  onClick={()=>{openCart()}}>
                <img src={supermarket} alt="" className="header__icon" />
              </a>
            </section>
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
                style={ category.id === 8 ? { width: "30px", marginBottom: "20px" } : {}} 
              />
                {category.name} 
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
      <ShoppingCart 
        shoppingCartOpen={shoppingCartOpen}
        setShoppingCartOpen={setShoppingCartOpen}
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
      />
    </header>
    )
  
};

export default Header;

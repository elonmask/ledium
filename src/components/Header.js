import React, { useState } from 'react';
import PersonalMenu from '..//components/PersonalAccountPages/PersonalMenu';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { getCategories } from '../public/utils'


const Header = () => {
  const history = useHistory();
  const [categories, setCategories] = useState(getCategories);

  console.log(window.location);

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

  const categoriesImg = [
    {
      img: 'images/lampa.png',
      id: '1',
    },
    {
      img: 'images/prozhektor.png',
      id: '2',
    },
    {
      img: 'images/ulichnoe-osveschenie.png',
      id: '3',
    },
    {
      img: 'images/svetilnik.png',
      id: '4',
    },
    {
      img: 'images/akcent-svetilnik.png',
      id: '5',
    },
    {
      img: 'images/lampa.png',
      id: '6',
    },
  ]

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

  if(categories.length > 0) {
    return (
      <header //class={ window.location.pathname.includes('catalog') ? "header header-height" : "header"}
        className="header"
      >
    <section class="header__block">
        <div
          className={className}
          onClick={() => { setBurger(!burger)}}
        >
          <span></span>
        </div>
        <section className={mobMenu}>
            <img alt="" src="./images/LEDiumLOGO.png" class="mob-menu__logo" />
            {/*<div>
                <input type="checkbox" name="menu-mob" class="toggler-filter" id="filter-mob" />
                <div class="filter__icon"></div>
                <div class="sidebar-filter-mob">
                    <div class="sidebar-filter__item">
                        <h3 class="sidebar-filter__title">Форма/Тип</h3>
                        <input type="checkbox" id="shar" class="custom-checkbox" />
                        <label for="shar">Шар</label>
                    </div>
                    <div class="sidebar-filter__item">
                        <h3 class="sidebar-filter__title">Цоколь</h3>
                        <input type="checkbox" id="e14" class="custom-checkbox" />
                        <label for="e14">Е14</label>
                        <input type="checkbox" id="e27" class="custom-checkbox" />
                        <label for="e27">Е27</label>
                    </div>
                    <div class="sidebar-filter__item">
                        <h3 class="sidebar-filter__title">Цветовая температура</h3>
                        <input type="checkbox" id="3k" class="custom-checkbox" />
                        <label for="3k">3000K</label>
                        <input type="checkbox" id="4k" class="custom-checkbox" />
                        <label for="4k">4100K</label>
                        <input type="checkbox" id="4k" class="custom-checkbox" />
                        <label for="4k">6500K</label>
                    </div>
                    <div class="sidebar-filter__item">
                        <h3 class="sidebar-filter__title">Мощность</h3>
                        <input type="range" min="6" max="12" value="1" />
                    </div>
                    <div class="sidebar-filter__item">
                        <h3 class="sidebar-filter__title">Лампы накаливания</h3>
                        <input type="range" min="6" max="12" value="1" />
                    </div>
                </div>
            </div>*/}
            <ul class="mob-menu__list">
                <li class="mob-menu__item">
                    <input type="checkbox" name="menu-mob" class="toggler-arrow" id="menu-mob-arrow" />
                    {/*<div class="arrow"></div>*/}
                    <a href="LEDlampa" class="mob-menu__link">
                        <img alt="" src="images/lampa.png" class="mob-menu__img" />
                        Лампы(LED)
                    </a>
                    {/*<ul class="mob-menu__list-child">
                        <li class="mob-menu__item-child">
                            <a href="#" class="mob-menu__link-child">
                                <span class="mob-menu__span">Светодиодные лампы(LED)</span>
                            </a>
                        </li>
                      </ul>*/}
                </li>
                <li class="mob-menu__item">
                    <input type="checkbox" name="menu-mob" class="toggler-arrow" id="menu-mob-arrow" />
                    {/*<div class="arrow"></div>*/}
                    <a href="spotlights" class="mob-menu__link">
                        <img alt="" src="images/prozhektor.png" class="mob-menu__img" />
                        Прожекторы(LED)
                    </a>
                    {/*<ul class="mob-menu__list-child">
                        <li class="mob-menu__item-child">
                            <a href="#" class="mob-menu__link-child">
                                <span class="mob-menu__span">Светодиодные лампы(LED)</span>
                            </a>
                        </li>
                    </ul>*/}
                </li>
                <li class="mob-menu__item">
                    <input type="checkbox" name="menu-mob" class="toggler-arrow" id="menu-mob-arrow" />
                    {/*<div class="arrow"></div>*/}
                    <a href="phitolamp" class="mob-menu__link">
                        <img alt="" src="images/ulichnoe-osveschenie.png" class="mob-menu__img" />
                        Фитолампы
                    </a>
                    {/*<ul class="mob-menu__list-child">
                        <li class="mob-menu__item-child">
                            <a href="#" class="mob-menu__link-child">
                                <span class="mob-menu__span">Светодиодные лампы(LED)</span>
                            </a>
                        </li>
                  </ul>*/}
                </li>
                <li class="mob-menu__item">
                    <input type="checkbox" name="menu-mob" class="toggler-arrow" id="menu-mob-arrow" />
                    {/*<div class="arrow"></div>*/}
                    <a href="fixtures" class="mob-menu__link">
                        <img alt="" src="images/svetilnik.png" class="mob-menu__img" />
                        Светильники
                    </a>
                    {/*<ul class="mob-menu__list-child">
                        <li class="mob-menu__item-child">
                            <a href="#" class="mob-menu__link-child">
                                <span class="mob-menu__span">Светодиодные лампы(LED)</span>
                            </a>
                        </li>
                      </ul>*/}
                </li>
                <li class="mob-menu__item">
                    <input type="checkbox" name="menu-mob" class="toggler-arrow" id="menu-mob-arrow" />
                    {/*<div class="arrow"></div>*/}
                    <a href="tableLamp" class="mob-menu__link">
                        <img alt="" src="images/elektrotovary.png" class="mob-menu__img" />
                        Настольные лампы
                    </a>
                    {/*<ul class="mob-menu__list-child">
                        <li class="mob-menu__item-child">
                            <a href="#" class="mob-menu__link-child">
                                <span class="mob-menu__span">Светодиодные лампы(LED)</span>
                            </a>
                        </li>
                    </ul>*/}
                </li>
            </ul>
            <ul class="mob-menu__list">
                <li class="mob-menu__item-info"><a href="#" class="mob-menu__link-info">О компании</a></li>
                <li class="mob-menu__item-info"><a href="#" class="mob-menu__link-info">Новинки</a></li>
                <li class="mob-menu__item-info"><a href="#" class="mob-menu__link-info header__link--active">Акции</a></li>
                <li class="mob-menu__item-info"><a href="#" class="mob-menu__link-info">Где купить</a></li>
                <li class="mob-menu__item-info"><a href="#" class="mob-menu__link-info">Контакты</a></li>
                <ul class="mob-menu__list-icon">
                    <li class="mob-menu__item-icon">
                        <a href="http://instagram.com" class="header__link">
                            <img src="images/instagram.svg" alt="instagram" class="header__menu-icons" />
                        </a>
                    </li>
                    <li class="mob-menu__item-icon">
                        <a href="http://facebook.com" class="header__link">
                            <img src="images/facebook.svg" alt="instagram" class="header__menu-icons" />
                        </a>
                    </li>
                    <li class="mob-menu__item-icon">
                        <a href="http://youtube.com" class="header__link">
                            <img src="images/youtube.svg" alt="instagram" class="header__menu-icons" />
                        </a>
                    </li>
                </ul>
            </ul>
        </section>
        <a href="/" class="header__logo">
        </a>
        <section class="header__contant">
            <section class="header__menu">
                <ul class="header__list">
                    <li class="header__item"><a href="#" class="header__link header__link--action">О компании</a></li>
                    <li class="header__item"><a href="#" class="header__link header__link--action">Новинки</a></li>
                    <li class="header__item"><a href="#" class="header__link header__link--active header__link--action">Акции</a></li>
                    <li class="header__item"><a href="#" class="header__link header__link--action">Где купить</a></li>
                    <li class="header__item"><a href="#" class="header__link header__link--action">Контакты</a></li>
                    <li class="header__item">
                        <a href="http://instagram.com" class="header__link">
                            <img src="images/instagram.svg" alt="instagram" class="header__menu-icons" />
                        </a>
                    </li>
                    <li class="header__item">
                        <a href="http://facebook.com" class="header__link">
                            <img src="images/facebook.svg" alt="instagram" class="header__menu-icons" />
                        </a>
                    </li>
                    <li class="header__item">
                        <a href="http://youtube.com" class="header__link">
                            <img src="images/youtube.svg" alt="instagram" class="header__menu-icons" />
                        </a>
                    </li>
                </ul>
                <ul class="header__specs">
                    <li><a href="#" class="header__lang">UA/RU</a></li>
                </ul>
            </section>
            <section class="header__action">
                <a href="/catalog" class="header__catalog">Каталог</a>
                <div class="header__search">
                    <input class="header__searchbar" type="text" name="search" placeholder="Поиск товаров по каталогу" />
                    <button class="header__btn-search">Поиск</button>
                </div>
                <a href="#" class="none header__mob-block header__mob-block--active">
                    <img src="images/phone-call.svg" alt="" class="header__icon header__icon--white" />
                </a>
                <a 
                  class=" header__mob-block header__mob-block--active user-block"
                  onClick={()=>{openMenu()}}
                >
                  <i class="fas fa-user-alt"></i>
                </a>
                {/*<a href="#" class="header__mob-block" id="block1">
                    <img src="images/adjust.svg" alt="" class="header__icon" />
                  </a>*/}
                <a href="#" class="header__mob-block">
                    <img src="images/supermarket.svg" alt="" class="header__icon" />
                </a>
            </section>
            <PersonalMenu 
      setMenuIsOpen={setMenuIsOpen}
      menuIsOpen={menuIsOpen}
    />
        </section>
    </section>
    <ul
      /*class={ window.location.pathname.includes('catalog') 
        ? "header__nav-list header__nav-list-none" 
        : "header__nav-list"
      }*/
      className="header__nav-list"
    >
      {categories.map(category => (
        <li class="header__nav-item">
          <a 
            class="header__nav-link"
            onClick={() => {history.push(`/catalog/category/${category.id}`)} }
          > 
            {categoriesImg.map(categoryImg => (
              <img 
                src={category.id === categoryImg.id ? categoryImg.img : ''}
                alt="" 
                class="header__nav-img" 
              />
            ))}
                {category.text} 
          </a>
        {/*<div class="header__menu-child">
            <ul class="header__list-child">
                <li class="header__item-child">
                    <a href="#" class="header__link-child">
                        <img class="header__img-child" alt="" src="./images/menu-child/1.1.jpg" />
                        <span class="header__span">Светодиодные(LED) лампы</span>
                    </a>
                </li>
            </ul>
          </div>*/}
        </li>
      ))}
        
    </ul>
</header>
    )
  } else 
 
  return (
    <div></div>
  )
};

export default Header;

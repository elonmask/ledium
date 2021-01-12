import React from 'react';

const Header = () => {
 
  return (
    <header class="header">
    <section class="header__block">
        <input type="checkbox" name="menu-mob" class="toggler" id="menu-mob" />
        <div class="hamburger"><div></div></div>
        <section class="mob-menu">
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
                        <li class="mob-menu__item-child">
                            <a href="#" class="mob-menu__link-child">
                                <span class="mob-menu__span">Светодиодные лампы(LED)</span>
                            </a>
                        </li>
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
                        <li class="mob-menu__item-child">
                            <a href="#" class="mob-menu__link-child">
                                <span class="mob-menu__span">Светодиодные лампы(LED)</span>
                            </a>
                        </li>
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
                        <li class="mob-menu__item-child">
                            <a href="#" class="mob-menu__link-child">
                                <span class="mob-menu__span">Светодиодные лампы(LED)</span>
                            </a>
                        </li>
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
                        <li class="mob-menu__item-child">
                            <a href="#" class="mob-menu__link-child">
                                <span class="mob-menu__span">Светодиодные лампы(LED)</span>
                            </a>
                        </li>
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
                        <li class="mob-menu__item-child">
                            <a href="#" class="mob-menu__link-child">
                                <span class="mob-menu__span">Светодиодные лампы(LED)</span>
                            </a>
                        </li>
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
                    <li><a href="#" class="header__log">Войти</a></li>
                    <li><a href="#" class="header__lang">UA/RU</a></li>
                </ul>
            </section>
            <section class="header__action">
                <a href="catalog" class="header__catalog">Каталог</a>
                <div class="header__search">
                    <input class="header__searchbar" type="text" name="search" placeholder="Поиск товаров по каталогу" />
                    <button class="header__btn-search">Поиск</button>
                </div>
                <a href="#" class="header__mob-block header__mob-block--active">
                    <img src="images/phone-call.svg" alt="" class="header__icon header__icon--white" />
                </a>
                {/*<a href="#" class="header__mob-block" id="block1">
                    <img src="images/adjust.svg" alt="" class="header__icon" />
                  </a>*/}
                <a href="#" class="header__mob-block">
                    <img src="images/supermarket.svg" alt="" class="header__icon" />
                </a>
            </section>
        </section>
    </section>
    <ul class="header__nav-list">
        <li class="header__nav-item">
            <a href="LEDlampa" class="header__nav-link"> <img src="images/lampa.png" alt="" class="header__nav-img" />Лампы(LED) </a>
            {/*<div class="header__menu-child">
                <ul class="header__list-child">
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/1.1.jpg" />
                            <span class="header__span">Светодиодные(LED) лампы</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/1.2.jpg" />
                            <span class="header__span">Светодиодные(LED) лампы-шар</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/1.3.jpg" />
                            <span class="header__span">Светодиодные(LED) лампы-свеча</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/1.4.jpg" />
                            <span class="header__span">Рефлекторные светодиодные(LED) лампы</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/1.5.jpg" />
                            <span class="header__span">Линейные T8 cветодиодные(LED) лампы</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/1.6.jpg" />
                            <span class="header__span">Высокомощные cветодиодные(LED) лампы</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/1.7.jpg" />
                            <span class="header__span">Светодиодные лампы(LED) Низковольтные</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/1.8.jpg" />
                            <span class="header__span">Светодиодные лампы(LED) Globe шар</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/1.9.jpg" />
                            <span class="header__span">Светодиодные лампы(LED) 3-х режимные</span>
                        </a>
                    </li>
                </ul>
              </div>*/}
        </li>
        <li class="header__nav-item">
            <a href="spotlights" class="header__nav-link"> <img src="images/prozhektor.png" alt="" class="header__nav-img" />Прожекторы(LED) </a>
            {/*<div class="header__menu-child">
                <ul class="header__list-child">
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/2.1.jpg" />
                            <span class="header__span">Светодиодные(LED) лампы</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/2.2.jpg" />
                            <span class="header__span">Светодиодные(LED) лампы-шар</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/2.3.jpg" />
                            <span class="header__span">Светодиодные(LED) лампы-свеча</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/2.4.jpg" />
                            <span class="header__span">Рефлекторные светодиодные(LED) лампы</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/2.5.jpg" />
                            <span class="header__span">Линейные T8 cветодиодные(LED) лампы</span>
                        </a>
                    </li>
                </ul>
              </div>*/}
        </li>
        <li class="header__nav-item">
            <a href="fixtures" class="header__nav-link"> <img src="images/svetilnik.png" alt="" class="header__nav-img header__nav-img--1" />Светильники(LED) </a>
            {/*<div class="header__menu-child">
                <ul class="header__list-child">
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/3.1.jpg" />
                            <span class="header__span">Светодиодные(LED) лампы</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/3.2.jpg" />
                            <span class="header__span">Светодиодные(LED) лампы-шар</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/3.3.jpg" />
                            <span class="header__span">Светодиодные(LED) лампы-свеча</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/3.4.jpg" />
                            <span class="header__span">Рефлекторные светодиодные(LED) лампы</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/3.5.jpg" />
                            <span class="header__span">Линейные T8 cветодиодные(LED) лампы</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/3.6.jpg" />
                            <span class="header__span">Высокомощные cветодиодные(LED) лампы</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/3.7.jpg" />
                            <span class="header__span">Светодиодные лампы(LED) Низковольтные</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/3.8.jpg" />
                            <span class="header__span">Светодиодные лампы(LED) Globe шар</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/3.9.jpg" />
                            <span class="header__span">Светодиодные лампы(LED) 3-х режимные</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/3.10.jpg" />
                            <span class="header__span">Светодиодные лампы(LED) 3-х режимные</span>
                        </a>
                    </li>
                </ul>
              </div>*/}
        </li>
        <li class="header__nav-item">
            <a href="phitolamp" class="header__nav-link"> <img src="images/ulichnoe-osveschenie.png" alt="" class="header__nav-img" />Фитолампы </a>
            {/*<div class="header__menu-child">
                <ul class="header__list-child">
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/4.1.jpg" />
                            <span class="header__span">Светодиодные лампы(LED) Globe шар</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/4.2.jpg" />
                            <span class="header__span">Светодиодные лампы(LED) 3-х режимные</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/4.3.jpg" />
                            <span class="header__span">Светодиодные лампы(LED) 3-х режимные</span>
                        </a>
                    </li>
                </ul>
              </div>*/}
        </li>
        <li class="header__nav-item">
            <a href="tableLamp" class="header__nav-link"> <img src="images/akcent-svetilnik.png" alt="" class="header__nav-img" />Настольные лампы </a>
            {/*<div class="header__menu-child">
                <ul class="header__list-child">
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/5.1.jpg" />
                            <span class="header__span">Светодиодные лампы(LED) Globe шар</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/5.2.jpg" />
                            <span class="header__span">Светодиодные лампы(LED) 3-х режимные</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/5.3.jpg" />
                            <span class="header__span">Светодиодные лампы(LED) 3-х режимные</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/5.4.jpg" />
                            <span class="header__span">Светодиодные лампы(LED) Globe шар</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/5.5.jpg" />
                            <span class="header__span">Светодиодные лампы(LED) 3-х режимные</span>
                        </a>
                    </li>
                    <li class="header__item-child">
                        <a href="#" class="header__link-child">
                            <img class="header__img-child" alt="" src="./images/menu-child/5.6.jpg" />
                            <span class="header__span">Светодиодные лампы(LED) 3-х режимные</span>
                        </a>
                    </li>
                </ul>
              </div>*/}
        </li>
    </ul>
</header>

  )
};

export default Header;

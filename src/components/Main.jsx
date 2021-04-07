import React, {useState, useEffect} from 'react';
import axios from 'axios';
import potok from '../public/images/potok.svg';
import flow from '../public/images/temp_svet.svg';
import heart from '../public/images/heart-shape.svg';
import FilterMenu from './FilterMenu';
import { getProducts } from '../public/utils';
import categoriesEng from '../public/categories.json';

const Main = () => {

  return (
    
    <main className="section">
      <section className="section__menu-h2 menu-mob">
          <h2>Наша продукция</h2>
          <a href="catalog">перейти в каталог<i>&gt;</i></a>
        </section>
    {/*<section className="section__first">
        <div className="section__content">
            <h2 className="section__h2">Форма и содержание</h2>
            <p className="section__p">
                В новых лентах мы используем современные диоды 2835, дающие в два раза больше света, чем в лентах предыдущего поколения при той же потребляемой мощности. Мы используем систему креплений с отверстиями, чтобы вы могли
                максимально надежно фиксировать ленту на поверхности.
            </p>
            <a href="#" className="section__read">Читать далее</a>
        </div>
        <div className="section__parallax parallax"></div>
  </section>*/}
    <section className="section__second">
        <div className="section__article1">
            <div className="section__content-1">
                <h2 className="section__h2-1">Абсолютно новое качество света</h2>
                <p className="section__p-1">
                    Сочетание матированной центральной зоны и прозрачного мультисекторного рассеивателя по контуру помогло добиться привычного свечения галогенной лампы и одновременно избавиться от слепящего эффекта, присущего стандартным
                    лампам с прозрачной колбой.
                </p>
                <a href="#" className="section__read section__read--1">Читать далее</a>
            </div>
        </div>
        <div className="section__article2">
            <div className="section__content section__content--2">
                <h2 className="section__h2">Умная упаковка – правильная лампа</h2>
                <p className="section__p p">Для вашего удобства мы разработали систему подсказок и вынесли на упаковку всю информацию, необходимую для подбора лампы.</p>
                <a href="#" className="section__read">Читать далее</a>
            </div>
        </div>
        <div className="section__article3">
            <div className="section__content section__content--3">
                <h2 className="section__h2">Ничего лишнего</h2>
                <p className="section__p">Больше никаких дополнительных деталей и никакой сборки. Не нужно покупать лампы для врезных «точек» — теперь есть новые светильники gauss со встроенной LED-платой.</p>
                <a href="#" className="section__read">Читать далее</a>
            </div>
            <div className="section__parallax1">
                <img className="section__image" alt="" src="images/main/Svetilnik.png" />
            </div>
        </div>
    </section>
    {/*
    <section className="section__third">
        <div className="section__block">
            <div className="section__content section__content--4">
                <h2 className="section__h2 black">Технологии в миниатюре</h2>
                <p className="section__p black">Мы поместили светодиоды в корпус всего 10×37 мм и получили самую компактную лампу gauss.</p>
                <a href="#" className="section__read black">Читать далее</a>
            </div>
            <div className="parallax">
                <img className="section__image" alt="" src="images/main/block-5.png" />
            </div>
        </div>
    </section>
    <section className="section__four">
        <div className="section__article4">
            <div className="section__content section__content--5">
                <h2 className="section__h2 black">Революционное открытие – ЛАМПЫ ГРАФЕН!</h2>
                <p className="section__p black">
                    Почти полтора века назад Томас Эдисон использовал углеродную нить в качестве проводящей для создания первой в мире лампы накаливания. Учёные и сегодня используют этот материал только несколько в другом виде.
                </p>
                <a href="#" className="section__read black">Читать далее</a>
            </div>
        </div>
    </section>
    <section className="section__five">
        <div className="section__article5">
            <div className="section__content section__content--6">
                <h2 className="section__h2">Умный свет – главная часть вашего интерьера.</h2>
                <p className="section__p">Знаете ли вы, как сильно влияет на нас освещение?</p>
                <a href="#" className="section__read">Читать далее</a>
            </div>
        </div>
</section>*/}

<div className="page-content">
        <div className="catalog catalog-main">
        <div className="sidebar">
        </div>
        <div className="catalog-content">
        <div className="catalog-header">
            <h1>Акции</h1>
          </div>
          <div className="catalog-goods"> 
          <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    
          </div>
          </div>
          {/*<a href="#" className="section__read black">Загрузить еще</a>*/}
        
          <div className="catalog-content">
        <div className="catalog-header">
            <h1>Популярные товары</h1>
          </div>
          <div className="catalog-goods"> 
          <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    
          </div>
          </div>

          <div className="catalog-content">
        <div className="catalog-header">
            <h1>Новинки</h1>
          </div>
          <div className="catalog-goods"> 
          <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    
          </div>
          </div>

          <div className="catalog-content">
        <div className="catalog-header">
            <h1>Выгодное предложение</h1>
          </div>
          <div className="catalog-goods"> 
          <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    
          </div>
          </div>

          <div className="catalog-content">
        <div className="catalog-header">
            <h1>Акции</h1>
          </div>
          <div className="catalog-goods"> 
          <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src='https://api.ledium.shop/img/?prodname=Лампа LED A60 15W 4100K  Е27' 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>4000K</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                Lorem, ipsum dolor.
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">100 грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>В наличии</strong></p>
            <p><strong>Мощность:</strong> 10W</p>
            <p><strong>Цветовая температура:</strong> 4000K</p>
            <p><strong>Световой поток, Лм</strong> 4000K</p>
          </div>
          </div>
    </div>
    
          </div>
          </div>
      </div>
    </div>

</main>

  );
};

export default Main;
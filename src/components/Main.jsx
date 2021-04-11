import React, {useState, useEffect} from 'react';
import axios from 'axios';
import potok from '../public/images/potok.svg';
import flow from '../public/images/temp_svet.svg';
import heart from '../public/images/heart-shape.svg';
import Partners from './Partners';
import Banner from './Banner';
import SidebarMenu from './SidebarMenu';

const Main = () => {
  const [array, setArray] = useState([]);

  /*useEffect(() => {
    let data = [];
    if( array.length == 0 ) {
      axios
      .get('https://api.ledium.shop/feed')
      .then( response => {
        console.log(response.data.data.shop.offers.offers);
        console.log(data);
        setArray(response.data.data.shop.offers.offers);
      })
    }
  }, []);

  console.log(array);*/

  return (
    
    <main className="section">
      <section className="section__menu-h2 menu-mob">
        <h2>Наша продукция</h2>
        <a href="catalog">перейти в каталог<i>&gt;</i></a>
      </section>

        <Banner />
        <Partners />

      <div className="page-content">
        <div className="catalog catalog-main">
          <SidebarMenu />
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
      </div>
    </div>

</main>

  );
};

export default Main;
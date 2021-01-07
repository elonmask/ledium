import React from 'react';
import Tabs from './Tabs.jsx';
import '../public/style/product.css';

import tempSvet from '../public/images/temp_svet.svg';
import potok from '../public/images/potok.svg';

const Product = () => {


  return (
    <>
      <main className="product">
        <h2>Лaмпа LED A60 8W 3000K 800Lm Е27 AC165-265V LDM PRO (100)</h2>
        <div className="product__info">
          <div className="product__block-img">
            <img
              src="https://api.ledium.shop/img/?prodname=Лампа LED A60 8W 4100K Е27"
              alt=""
              className="product__img"
            ></img>
          </div>
          <div className="product__info-block">
            <p>Есть в наличии</p>
            <div className="product__card">
              <div className="product__icon">
                <img
                  src={tempSvet}
                  alt=""
                  className="product__icon-img"
                ></img>
                <span>3000K</span>
              </div>
              <div className="product__icon">
                <img
                  src={potok}
                  alt=""
                  className="product__icon-img"
                ></img>
                <span>800Lm</span>
              </div>
            </div>
            <p>Описание</p>
            <p className="product__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ipsam ipsa, praesentium odio porro eveniet. Placeat quod dignissimos iure asperiores!</p>
            <div className="product__buy">
              <div className="product__buy-quantity">
                <label className="quantity-title" htmlFor="input-quantity">Кол-во</label>
                <input className="quantity" type="number" id="input-quantity" name="quantity" min="1" max=""/>
              </div>
              <div className="product__price">
                <p className="quantity-title">Цена</p>
                <p className="poduct__price__text">33 грн</p>
              </div>
              <button className="header__catalog product__btn">Добавить в корзину</button>
            </div>
          </div>
        </div>
        <Tabs />
      </main>
    </>
  )
}

export default Product;
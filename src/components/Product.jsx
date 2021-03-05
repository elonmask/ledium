import React, {useState, useEffect} from 'react';
import Tabs from './Tabs.jsx';
import axios from 'axios';
import { getProduct } from '../public/utils'
import '../public/style/product.css';

import tempSvet from '../public/images/temp_svet.svg';
import potok from '../public/images/potok.svg';

const Product = ({match}) => {

  const [products, setProducts] = useState(getProduct(match.params.id));

  useEffect(() => {
    if( products == false ) {
      axios
      .get('https://api.ledium.shop/feed')
      .then( response => {
        sessionStorage.setItem("data", JSON.stringify(response.data));
        setProducts(getProduct(match.params.id))
      })
    }
  })

  if(Object.keys(products).length !== 0) {
    return (
      <>
      {Object.keys(products).length !== 0 && (
        <main className="product">
        <h2>{products.name}</h2>
        <div className="product__info">
          <div className="product__block-img">
            <img
              src={products.picture}
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
                <span>4000Lm</span>
              </div>
            </div>
            <p>Описание</p>
            <p className="product__description">{products.description.text}</p>
            <div className="product__buy">
              <div className="product__buy-quantity">
                <label className="quantity-title" htmlFor="input-quantity">Кол-во</label>
                <input className="quantity" type="number" id="input-quantity" name="quantity" min="1" max=""/>
              </div>
              <div className="product__price">
                <p className="quantity-title">Цена</p>
                <p className="poduct__price__text">{products.price} грн</p>
              </div>
              <button className="header__catalog product__btn">Добавить в корзину</button>
            </div>
          </div>
        </div>
        <Tabs />
      </main>
      )}
      </>
    )
  } else {
    return (
      <div></div>
    )
  }
  
}

export default Product;
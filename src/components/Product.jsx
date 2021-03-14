import React, {useState, useEffect} from 'react';
import Tabs from './Tabs.jsx';
import axios from 'axios';
import { getProduct } from '../public/utils'
import noPhoto from '../public/images/no_photo.jpg';
import '../public/style/product.css';

import tempSvet from '../public/images/temp_svet.svg';
import potok from '../public/images/potok.svg';

const Product = ({match}) => {

  const [products, setProducts] = useState(getProduct(match.params.id));
  const [descrp, setDescrip] = useState('');

  useEffect(() => {
    if( products == false ) {
      axios
      .get('https://api.ledium.shop/feed')
      .then( response => {
        sessionStorage.setItem("data", JSON.stringify(response.data));
        setProducts(getProduct(match.params.id));
      })
    }
    setDescrip(products.description.text);
  })

  const setName = (str) => {

    const array = [];
    const name = str.split(' ');

    for ( let i = 0; i < name.length; i++ ) {
     if(name[i].includes('W') || name[i].includes('V')) {
       return array.join(' ')
     } else {
       array.push(name[i])
     }
    }

    return array.join(' ')
  }

  const setChar = (str) => {
    let value = '';
    
    if( str == 'K' ) {
      products.param.map(char => {
        if ( char.name == 'Колірна температура') {
          value = char.text;
        }
      })
    } else if ( str == 'Lm' ) {
      products.param.map(char => {
        if ( char.name == 'Світловий потік') {
          value = char.text;
        }
      })
    }

    return value;
  }

  if (Object.keys(products).length !== 0) {
    return (
      <>
        <main className="product">
          <h2>{setName(products.name)}</h2>
          <div className="product__info">
            <div className="product__block-img">
              <img
                src={ products.picture !== 'undefined' ? products.picture : noPhoto} 
                alt=""
                className="product__img"
              ></img>
            </div>
            <div className="product__info-block">
              <p>{products.available == 'true' ? 'Есть в наличии' : 'Нет в наличии'}</p>
              <div className="product__card">
                <div className="product__icon">
                  <img
                    src={tempSvet}
                    alt=""
                    className="product__icon-img"
                  />
                  <span>{setChar('K')}</span>
                </div>
              <div className="product__icon">
                <img
                  src={potok}
                  alt=""
                  className="product__icon-img"
                />
                <span>{setChar('Lm')}</span>
              </div>
              </div>
              <p className="p-descrip">Описание</p>
              <p className="product__description">{descrp}</p>
              <div className="product__buy">
                <div className="product__buy-quantity">
                  <label className="quantity-title" htmlFor="input-quantity">Кол-во</label>
                  <input 
                    className="quantity" 
                    type="number" 
                    id="input-quantity" 
                    name="quantity" 
                    min="1" max=""
                  />
                </div>
                <div className="product__price">
                  <p className="quantity-title">Цена</p>
                  <p className="poduct__price__text">{products.price} грн</p>
                </div>
                <button className="header__catalog product__btn">Добавить в корзину</button>
              </div>
            </div>
          </div>
          <Tabs products={products}/>
        </main>
      </>
    )
  } else {
    return (
      <div></div>
    )
  }
  
}

export default Product;

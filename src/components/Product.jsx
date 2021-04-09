import React, {useState, useEffect} from 'react';
import ShoppingCart from './PersonalAccountPages/ShoppingCart';
import Tabs from './Tabs.jsx';
import axios from 'axios';
import { getProduct } from '../public/utils'
import noPhoto from '../public/images/no_photo.jpg';
import '../public/style/product.css';

import tempSvet from '../public/images/temp_svet.svg';
import potok from '../public/images/potok.svg';

const Product = ({match}) => {

  const goods = sessionStorage.getItem('goods');
  let array = JSON.parse(goods);
  const [products, setProducts] = useState(getProduct(match.params.id));
  const [descrp, setDescrip] = useState('');
  const [product, setProduct] = useState(array);
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);
  const [added, setAdded] = useState(false)

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
  }, [])

  products.count = 1;

  const addProduct = () => {
    if(products.available == 'В наличии') {
      let arr;
      if(goods == null) {
        arr = [];
      } else {
        arr = JSON.parse(sessionStorage.getItem('goods'));
        
      }
      arr.push(products);
      sessionStorage.setItem('goods', JSON.stringify(arr));
      setProduct(arr);
      setAdded(true);
      setShoppingCartOpen(true);
    } else {
      alert('Товара нет в наличии');
    }
  }

  const findProduct = () => {
    let result = false;
    if (  product !== null && product.length !== 0 ) {
      product.map(n => {
        if(n.id == products.id) {
          result = true;
        }
      })
    if (result == true) {
      return (
        <p className="added">Товар в корзине</p>
      )
    } else {
      return (
        <button 
          className="header__catalog product__btn"
          onClick={ () => addProduct()}
        >
          Добавить в корзину
        </button>
      )
    }
    } else {
      return (
      <button 
        className="header__catalog product__btn"
        onClick={ () => addProduct()}
      >
        Добавить в корзину
      </button>
    )}
  }

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
              <p>{products.available}</p>
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
                <div className="product__price">
                  <p className="quantity-title">Цена</p>
                  <p className="poduct__price__text">{products.price} грн</p>
                </div>
                {findProduct()}
              </div>
            </div>
          </div>
          <Tabs products={products}/>
        </main>
        <ShoppingCart 
          shoppingCartOpen={shoppingCartOpen}
          setShoppingCartOpen={setShoppingCartOpen}
      />
      </>
    )
  } else {
    return (
      <div></div>
    )
  }
  
}

export default Product;

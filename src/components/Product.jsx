import React, {useState, useEffect} from 'react';
import ShoppingCart from './PersonalAccountPages/ShoppingCart';
import Tabs from './Tabs.jsx';
import axios from 'axios';
import noPhoto from '../public/images/no_photo.jpg';
import '../public/style/product.css';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import tempSvet from '../public/images/temp_svet.svg';
import potok from '../public/images/potok.svg';

const Product = ({match}) => {

  const goods = sessionStorage.getItem('goods');
  let array = JSON.parse(goods);
  //const [products, setProducts] = useState(getProduct(match.params.id));
  //const [descrp, setDescrip] = useState('');
  //const [product, setProduct] = useState(array);
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);
  const [added, setAdded] = useState(false);
  let location = useLocation();
  const history = useHistory();

  const [good, setGood] = useState(null)

  console.log(good);

  const getItem = (id, data) => {
    let item = null;
    data.forEach(it => {
      if (it.id.toString() === id) {
        item = it;
      }
    })

    return item;
  }

  useEffect(() => {
      axios
      .get('https://admin.ledium.shop/goods')
      .then( response => {
        setGood(getItem(match.params.id, response.data));
      })
  }, [])

  /*useEffect(() => {
    if (products !== false) {
      if (products.id !== match.params.id) {
        setProducts(getProduct(match.params.id));
      }
    }
  }, [location])*/

  const addProduct = () => {
      let arr;
      if(sessionStorage.getItem('goods') === null) {
        arr = [];
      } else {
        arr = JSON.parse(sessionStorage.getItem('goods'));
        
      }
      good.count = 1;
      arr.push(good);
      sessionStorage.setItem('goods', JSON.stringify(arr));
      setAdded(true);
      setShoppingCartOpen(true);
  }

  const findProduct = () => {
    /*
    let result = false;
    if (  product !== null && product.length !== 0 ) {
      product.map(n => {
        if(n.id == good?.id) {
          result = true;
        }
      })
    if (result == true) {
      return (
        <p className="added">В кошику</p>
      )
    } else {
      return (
        <button 
          className="header__catalog product__btn"
          onClick={ () => addProduct()}
        >
          Додати до кошика
        </button>
      )
    }
    } else {
      return (
      <button 
        className="header__catalog product__btn"
        onClick={ () => addProduct()}
      >
        Додати до кошика
      </button>
    )}
    */

    if(added) {
      return (
        <p className="added">У кошику</p>
      )
    } else {
      if (good?.available) {
        return (
          <button 
            className="header__catalog product__btn"
            onClick={ () => addProduct()}
          >
            Додати до кошика
          </button>
        )
      } else {
        return (
          <button 
            className="header__catalog product__btn"
          >
            Немає у наявності
          </button>
        )
      }
    }
  }

  if (good !== null) {
    return (
      <>
        <main className="product">
        <div 
          className="breadcrumbs-product"
          onClick={() => history.goBack()}
        >
          <i class="fas fa-chevron-left"></i>
          <a>Назад</a>
        </div>
          <h2>{good.Name}</h2>
          <div className="product__info">
            <div className="product__block-img">
              <img
                src={ good.picture !== null && typeof good.picture !== 'undefined' ? `https://admin.ledium.shop${good.picture.url}` : noPhoto} 
                alt=""
                className="product__img"
              ></img>
            </div>
            <div className="product__info-block">
              <p className="available">{good.available === true ? "В наявності" : "Немає в наявності"}</p>
              <div className="product__card">
                <div className="product__icon">
                  <img
                    src={tempSvet}
                    alt=""
                    className="product__icon-img"
                  />
                  <span>{good?.ColorTemperature}</span>
                </div>
              <div className="product__icon">
                <img
                  src={potok}
                  alt=""
                  className="product__icon-img"
                />
                <span>{good?.LightFlow}</span>
              </div>
              </div>
              <p className="product__description">{good?.description}</p>
              <div className="product__buy">
                <div className="product__price">
                  <p className="quantity-title">Ціна</p>
                  <p className="poduct__price__text">{good?.price}</p>
                </div>
                {findProduct()}
              </div>
            </div>
          </div>
          <Tabs products={good}/>
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

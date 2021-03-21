import React, {useState} from 'react';
import Order from '../Order'

import './style/shopping-cart.css';

const ShoppingCart = ( {shoppingCartOpen, setShoppingCartOpen} ) => {

  const [makeOrder, setOrder] = useState(false)

  const CloseCart = () => {
    setShoppingCartOpen(false)
  }

  const openOrder = () => {
    setShoppingCartOpen(false);
    setOrder(true);
  }

  return (
    <>
     <div className={ shoppingCartOpen ? 'account-modal' : 'account__disable'}>
    <div className="modal-overlay"></div>
      <div className="account">
        <i 
          className="fas fa-times account-close"
          onClick={()=>{CloseCart()}}
        ></i>
        <h2 className="account__title">Корзина</h2>
        <div>
        <div className="cart-product">
            <img 
              alt=""
              src="https://api.ledium.shop/img/?prodname=Лампа LED A55 6W 4100K Е27"
              className="card-product-img"
            />
            <a className="cart-product-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
            <i className="fas fa-trash-alt trash"></i>
          </div>
          <div className="cart-details">
            <label className="quantity-title" htmlFor="product-quantity">
              <input 
                className="quantity" 
                type="number" 
                id="product-quantity" 
                name="quantity" 
                min="1" max=""
              />
            </label>
            <a className="cart-product-price">289 грн</a>
          </div>
        </div>

        <div>
        <div className="cart-product">
            <img 
              alt=""
              src="https://api.ledium.shop/img/?prodname=Лампа LED A55 6W 4100K Е27"
              className="card-product-img"
            />
            <a className="cart-product-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
            <i className="fas fa-trash-alt trash"></i>
          </div>
          <div className="cart-details">
            <label className="quantity-title" htmlFor="product-quantity">
              <input 
                className="quantity" 
                type="number" 
                id="product-quantity" 
                name="quantity" 
                min="1" max=""
              />
            </label>
            <a className="cart-product-price">289 грн</a>
          </div>
        </div>

        <div>
        <div className="cart-product">
            <img 
              alt=""
              src="https://api.ledium.shop/img/?prodname=Лампа LED A55 6W 4100K Е27"
              className="card-product-img"
            />
            <a className="cart-product-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
            <i className="fas fa-trash-alt trash"></i>
          </div>
          <div className="cart-details">
            <label className="quantity-title" htmlFor="product-quantity">
              <input 
                className="quantity" 
                type="number" 
                id="product-quantity" 
                name="quantity" 
                min="1" max=""
              />
            </label>
            <a className="cart-product-price">289 грн</a>
          </div>
        </div>
          
          <div className="cart-product-btns">
            <button 
              className="cart-product-return"
              onClick={() => CloseCart()}
            >
              Продолжить покупки
            </button>
            <div className="btn-cart-price">
              <p className="cart-product-btns-price">289 грн</p>
              <button 
                className="cart-product-make-order"
                onClick={() => openOrder()}
              >
                Оформить заказ
              </button>
            </div>
          </div>
      </div>
    </div>
      <Order 
        makeOrder={makeOrder}
        setOrder={setOrder}
      />
    </>
  )
}

export default ShoppingCart;

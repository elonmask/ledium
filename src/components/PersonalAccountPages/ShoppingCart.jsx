import React from 'react';

import './style/shopping-cart.css';

const ShoppingCart = ( {shoppingCartOpen, setShoppingCartOpen} ) => {

  const CloseCart = () => {
    setShoppingCartOpen(false)
  }

  return (
    <>
      <div className={ shoppingCartOpen ? "shopping-cart-container" : "" }>
        <div className={ shoppingCartOpen ? "shopping-cart cart-active" : "shopping-cart" }>
          <div className="carts">
            <div className="cart-block">
              <i className="fas fa-times"></i>
              <img
                src="https://api.ledium.shop/img/?prodname=Лампа LED A55 6W 4100K Е27"
                alt="" className="cart__img"
              />
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptatum.</h3>
              <p>33 грн</p>
            </div>    
          </div>
          <div className="carts-btns">
            <button onClick={()=>{CloseCart()}} className="cart-btn" >Продолжить покупки</button>
            <button onClick={()=>{CloseCart()}} className="cart-btn cart-btn-buy" >Купить</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingCart;

import React, {useState} from 'react';
import Order from '../Order'

import './style/shopping-cart.css';

const ShoppingCart = ( {shoppingCartOpen, setShoppingCartOpen} ) => {

  const goods = sessionStorage.getItem('goods');
  let arr = JSON.parse(goods);
  const [makeOrder, setOrder] = useState(false);
  const [product, setProduct] = useState(arr);

  const CloseCart = () => {
    setShoppingCartOpen(false)
  }

  const openOrder = () => {
    setShoppingCartOpen(false);
    setOrder(true);
  }

  const sumProducts = () => {
    let total = 0;
    product.map(n => {
      let price = +n.price;
      total += price;
    });
    return `${total}`;
  }

  const deleteProduct = (obj) => {
    let arr = [...product];
    const index = arr.indexOf(obj);
    if( index > -1 ) {
      arr.splice(index, 1);
      sessionStorage.setItem('goods', JSON.stringify(arr));
      setProduct(arr);
    }
  }

  //console.log(product);

  return (
    <>
    { product !== null ? (
      <>
        <div className={ shoppingCartOpen ? 'account-modal' : 'account__disable'}>
    <div className="modal-overlay"></div>
      <div className="account">
        <i 
          className="fas fa-times account-close"
          onClick={()=>{CloseCart()}}
        ></i>
        <h2 className="account__title">Корзина</h2>
        {product.map(n => (
          <>
             <div>
        <div className="cart-product">
            <img 
              alt=""
              src={n.picture}
              className="card-product-img"
            />
            <a className="cart-product-title">{n.name}</a>
            <i 
              className="fas fa-trash-alt trash"
              onClick={() => deleteProduct(n)}
            ></i>
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
            <a className="cart-product-price">{n.price} грн</a>
          </div>
        </div>
          </>
        ))}
          
          <div className="cart-product-btns">
            <button 
              className="cart-product-return"
              onClick={() => CloseCart()}
            >
              Продолжить покупки
            </button>
            <div className="btn-cart-price">
              <p className="cart-product-btns-price">{sumProducts()} грн</p>
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

    ) : (
      <div className={ shoppingCartOpen ? 'account-modal' : 'account__disable'}>
    <div className="modal-overlay"></div>
      <div className="account">
        <i 
          className="fas fa-times account-close"
          onClick={()=>{CloseCart()}}
        ></i>
        <h2 className="account__title">Корзина</h2>
        <p>У Вас еще нет товаров в корзине</p>
      </div>
    </div>
    )}
     
    </>
  )
}

export default ShoppingCart;

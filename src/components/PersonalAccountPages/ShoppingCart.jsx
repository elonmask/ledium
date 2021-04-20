import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Order from '../Order';
import ProductAmount from './ProductAmount';
import categoriesEng from '../../public/categories.json';
import noPhoto from '../../public/images/no_photo.jpg';

import './style/shopping-cart.css';

const ShoppingCart = ( { shoppingCartOpen, setShoppingCartOpen, setMenuIsOpen, menuIsOpen } ) => {

  const history = useHistory();

  const goods = sessionStorage.getItem('goods');
  let arr = JSON.parse(goods);
  const [makeOrder, setOrder] = useState(false);
  const [product, setProduct] = useState(arr);

  const openProductPage = (product) => {
    categoriesEng.map(n => {
      if ( n.id === product.categoryId ) {
        setShoppingCartOpen(false);
        history.push(`/catalog/category/${n.name}/product/${product.id}`);
      }
    })
  }
  
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
      let price = parseInt(n.price.replace(" ₴", ""));
      let priceProduct = price*n.count;
      total += priceProduct;
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

  useEffect(() => {
    if(shoppingCartOpen === true) {
      setProduct(arr);
    }
  }, [shoppingCartOpen])

  return (
    <>
    { product !== null && product.length >= 1 ? (
      <>
        <div className={ shoppingCartOpen ? 'account-modal' : 'account__disable'}>
          <div 
            className="modal-overlay" 
            onClick={() => CloseCart()}
          ></div>
      <div className="account">
        <i 
          className="fas fa-times account-close"
          onClick={()=>{CloseCart()}}
        ></i>
        <h2 className="account__title">Кошик</h2>
        {product.map(n => (
        
          <>
             <div>
        <div className="cart-product">
            <img 
              alt=""
              src={ typeof n.picture !== 'undefined' ? `https://admin.ledium.shop${n.picture.url}` : noPhoto}
              className="card-product-img"
            />
            <div className="cart-product-content">
            <a 
              className="cart-product-title"
              onClick={() =>openProductPage(n)}
            >
              {n.Name}
            </a>
            <i 
              className="fas fa-trash-alt trash"
              onClick={() => deleteProduct(n)}
            ></i>
            </div>
          </div>
          <div className="cart-details"> 
            <ProductAmount
              product={product}
              setProduct={setProduct}
              n={n}
              shoppingCartOpen={shoppingCartOpen}
            />
          </div>
        </div>
          </>
        ))}
          
          <div className="cart-product-btns">
            <button 
              className="cart-product-return"
              onClick={() => CloseCart()}
            >
              Продовжити покупки
            </button>
            <div className="btn-cart-price">
              <p className="cart-product-btns-price">{sumProducts()} ₴</p>
              <button 
                className="cart-product-make-order"
                onClick={() => openOrder()}
              >
                Оформити замовлення
              </button>
            </div>
          </div>
      </div>
    </div>
      <Order 
        makeOrder={makeOrder}
        setOrder={setOrder}
        product={product}
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
      />
      </>

    ) : (
      <div className={ shoppingCartOpen ? 'account-modal' : 'account__disable'}>
    <div className="modal-overlay" onClick={() => CloseCart()}></div>
      <div className="account">
        <i 
          className="fas fa-times account-close"
          onClick={()=>{CloseCart()}}
        ></i>
        <h2 className="account__title">Кошик</h2>
        <p>У Вас поки що немає товарів у кошику.</p>
      </div>
    </div>
    )}
     
    </>
  )
}

export default ShoppingCart;

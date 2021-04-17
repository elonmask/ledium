import React from 'react'
import { useHistory } from 'react-router-dom';
import categoriesEng from '../public/categories.json';

const OrderProducts = ({product, setOrder}) => {

  const history = useHistory();

  const openProductPage = (product) => {
    categoriesEng.map(n => {
      if ( n.id === product.categoryId ) {
        setOrder(false);
        history.push(`/catalog/category/${n.name}/product/${product.id}`);
      }
    })
  }

  const fullPrice = () => {
    let total = 0;
    product.map(n => {
      total += +n.price*n.count;
    });
    return `${total}`
  }

  const sum = (n) => {
    if ( !n.count ) {
      return n.price;
    } else {
      let price = +n.price; 
      return `${price*n.count}`;
    }
  }

  return (
    <>
      <div className="order__title">
        <h1>Заказ</h1>
        <p>на сумму {fullPrice()} грн</p>
      </div>
      <div className="order-info">
        <div className="order-units">
          <div>1</div>
          <p>Товары</p>
        </div>
        {product.map(n => (
          <>
            <div className="order-product">
              <img 
                alt=""
                src={n.picture}
                className="order-product-img"
              />
              <a 
                className="order-product-title"
                onClick={() =>openProductPage(n)}
              >
                {n.name}
              </a>
              <div className="order-product-blocks">
                <div className="order-product-block-info">
                  <p className="order-product-text">Цена</p>
                  <p className="order-product-price">{n.price} грн</p>
                </div>
                <div className="order-product-block-info">
                  <p className="order-product-text">Количество</p>
                  <p className="order-product-price">{n.count}</p>
                </div>
                <div className="order-product-block-info">
                  <p className="order-product-text">Сумма</p>
                  <p className="order-product-price">{sum(n)} грн</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default OrderProducts

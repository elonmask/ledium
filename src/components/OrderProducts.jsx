import React from 'react'
import { useHistory } from 'react-router-dom';
import categoriesEng from '../public/categories.json';
import noPhoto from '../public/images/no_photo.jpg';

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
      total += parseInt(n.price.replace(" ₴", "")) * n.count;
    });
    return `${total}`
  }

  const sum = (n) => {
    if ( !n.count ) {
      return parseInt(n.price.replace(" ₴", ""));
    } else {
      let price = parseInt(n.price.replace(" ₴", "")); 
      return `${price *n.count}`;
    }
  }

  return (
    <>
      <div className="order__title">
        <h1>Замовлення</h1>
        <p>на сумму {fullPrice()} ₴</p>
      </div>
      <div className="order-info">
        <div className="order-units">
          <div>1</div>
          <p>Товари</p>
        </div>
        {product.map(n => (
          <>
            <div className="order-product">
              <img 
                alt=""
                src={typeof n.picture !== 'undefined' ? `https://admin.ledium.shop${n.picture.url}` : noPhoto}
                className="order-product-img"
              />
              <a 
                className="order-product-title"
                onClick={() =>openProductPage(n)}
              >
                {n.Name}
              </a>
              <div className="order-product-blocks">
                <div className="order-product-block-info">
                  <p className="order-product-text">Ціна</p>
                  <p className="order-product-price">{n.price}</p>
                </div>
                <div className="order-product-block-info">
                  <p className="order-product-text">Кількість</p>
                  <p className="order-product-price">{n.count}</p>
                </div>
                <div className="order-product-block-info">
                  <p className="order-product-text">Сумма</p>
                  <p className="order-product-price">{sum(n)} ₴</p>
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

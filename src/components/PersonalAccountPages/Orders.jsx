import React, { useEffect, useState } from 'react';
import axios from 'axios';
import crypto from 'crypto';
import noPhoto from '../../public/images/no_photo.jpg';

import './style/orders.css'

const Orders = () => {
  const userData = sessionStorage.getItem('currentUser');
  const localData = localStorage.getItem('currentUser');

  const [data, setData] = useState({});
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    if(userData !== null && userData !== undefined) {
      setData(JSON.parse(userData))
    } else if (localData !== null && localData !== undefined) {
      setData(JSON.parse(localData))
    }
    axios
    .get(`https://api.ledium.shop/user/allorders/?userID=${data.ID}`)
      .then(response => {
        console.log(response)
      })
  }, []);


    if (orders == null) {
      const userID = crypto.createHash('sha256').update(data.email + '' + data.password).digest('base64').replace(/\+/g, "").replace(/\=/g, "").replace(/\-/g, "");
      axios
      .get(`https://api.ledium.shop/user/allorders/?userID=${userID}`)
        .then(response => {
          console.log(response.data);
          setOrders(response.data);
        })
    }

    const sum = (n) => {
      if ( !n.count ) {
        return parseInt(n.price.replace(" грн", ""));
      } else {
        let price = parseInt(n.price.replace(" грн", "")); 
        return `${price *n.count}`;
      }
    }

  const date = (str) => {
    let s = [];
    const date = str.slice(0, 10).replace(/-/g, '.');
    const n = date.split('.');

    for ( let i = n.length - 1 ; i >= 0; i-- ) {
      s.push(n[i]);
    }
    return s.join('.')
  } 

  const payment = (str) => {
    console.log(str)
    if ( str == 'cash' ) {
      return 'готівкою';
    } else {
      return 'онлайн';
    }
  }

  return (
    <>
      {orders !== null ? (
        <main className="personal-info">
          <div className="personal-info__testimonials">
            {orders.map(order => (
              <>
                <div className="order">

                  <div className="order__content">
                    <p>{date(order.date)}</p>
                    <div className="block-orders">
                      <p className="title-orders">Статус замовлення:</p>
                      <p>В обробці</p>
                    </div>
                    <div className="block-orders">
                      <p className="title-orders">ID-замовлення:</p>
                      <p>{order.ID.slice(0, 6)}</p>
                    </div>
                    <p className="history-orders">Історія замовлення</p>
                    <div className="block-orders">
                      <p className="title-orders">Адреса доставки:</p>
                      <p>{order.addr}</p>
                    </div>
                    <div className="block-orders">
                      <p className="title-orders">Cпосіб оплати:</p>
                      <p>{payment(order.pay)}</p>
                    </div>
                    <div className="block-orders">
                      <p className="title-orders">Cума замовлення:</p>
                      <p>{order.total} грн</p>
                    </div>
                  </div>

                  <div className="orders-product">
                    {order.goods.map(n => (
                      <>
                        <div className="order-product">
                          <img 
                            alt=""
                            src={typeof n.picture !== 'undefined' ? `https://admin.ledium.shop${n.picture.url}` : noPhoto}
                            className="orders-product-img"
                          />
                          <a 
                            className="order-product-title"
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
                              <p className="order-product-price">{sum(n)} грн</p>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </>  
            ))}
          </div>
        </main>
      ): (
        <main className="personal-info">
          <div className="personal-info__testimonials">
            <h3>Вы еще не сделали ни одного заказа</h3>
          </div>
        </main>
      )}
    </>
  )
}

export default Orders;

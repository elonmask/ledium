import React, { useEffect, useState } from 'react';
import axios from 'axios';
import crypto from 'crypto';

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
      return 'наличными';
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
                 <p className="order-id">N {order.ID}</p>
                 <p>{date(order.date)}</p>
                 <p>Оплата {payment(order.pay)}</p>
                 <p className="order__status">Новый заказ</p>
                 <p className="order__sum">Сумма заказа:<br />{order.total} грн</p>
               </div>
               <img
                 alt=""
                 className="order__img"
                 src={order.goods[0].picture}
               />
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

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import crypto from 'crypto';

import './style/orders.css'

const Orders = () => {
  const userData = sessionStorage.getItem('currentUser');
  const localData = localStorage.getItem('currentUser');

  const [data, setData] = useState({});

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

  /*useEffect(() => {
    const userID = crypto.createHash('sha256').update(data.email + '' + data.password).digest('base64').replace(/\+/g, "").replace(/\=/g, "").replace(/\-/g, "");
    axios
    .get(`https://api.ledium.shop/user/allorders/?userID=${userID}`)
      .then(response => {
        console.log(response)
      })
  });*/

  console.log(data.ID);

  return (
    <>
      <main className="personal-info">
        <div className="personal-info__testimonials">
          <div className="order">
            <div className="order__content">
              <div className="order__color"></div>
              <p>N 345 349 595</p>
              <p>25.07.2020</p>
              <p className="order__status">Выполнен</p>
              <p className="order__sum">Сумма заказа:<br />339грн</p>
            </div>
            <img
              alt=""
              className="order__img"
              src='https://api.ledium.shop/img/?prodname=Лампа LED A55 6W 4100K Е27'
            />
          </div>
          <div className="order">
            <div className="order__content">
              <div className="order__color yellow"></div>
              <p>N 345 349 595</p>
              <p>25.07.2020</p>
              <p className="order__status">В процессе</p>
              <p className="order__sum">Сумма заказа:<br />339грн</p>
            </div>
            <img
              alt=""
              className="order__img"
              src='https://api.ledium.shop/img/?prodname=Лампа LED A55 6W 4100K Е27'
            />
          </div>
          <div className="order">
            <div className="order__content">
              <div className="order__color red"></div>
              <p>N 345 349 595</p>
              <p>25.07.2020</p>
              <p className="order__status">Отменен</p>
              <p className="order__sum">Сумма заказа:<br />339грн</p>
            </div>
            <img
              alt=""
              className="order__img"
              src='https://api.ledium.shop/img/?prodname=Лампа LED A55 6W 4100K Е27'
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Orders;

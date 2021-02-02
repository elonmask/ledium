import React from 'react';

import './style/orders.css'


const Orders = () => {
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

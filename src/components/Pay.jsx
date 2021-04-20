import React from 'react';

const Pay = ({ pay, setPay }) => {

  return (
    <>
      <div className="order-adress">
        <div className="order-units">
          <div>3</div>
          <p>Оплата</p>
        </div>
        <div className="order-delivery">
          <div 
            className={pay == 'cash' ? "order-radio order-radio-active " : "order-radio"}
            onClick={() => setPay('cash')}
          ></div>
          <div>
            <label className="order-delivery-label" htmlFor="pay">Оплата при отриманні товара</label>
          </div>
        </div>
        <div className="order-delivery">
          <div 
            className={pay == 'cart' ? "order-radio order-radio-active " : "order-radio"}
            onClick={() => setPay('cart')}
          ></div>
          <div>
            <label className="order-delivery-label" htmlFor="card">Карткою онлайн</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pay;
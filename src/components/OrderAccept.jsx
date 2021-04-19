import React from 'react';

const OrderAccept = ({orderAccept, setOrderAccept, orderID}) => {

  return (
    <>
     <div className={ orderAccept ? 'account-modal' : 'account__disable'}>
    <div className="modal-overlay" onClick={() => setOrderAccept(false)}></div>
      <div className="account exit-account">
        <i 
          className="fas fa-times account-close"
          onClick={()=>setOrderAccept(false)}
        ></i>
        <div className="exit">
        <h2>Дякуємо, Ваше замовлення прийняте в обробку.</h2>
        <p className="order-number">{`ID Вашого замовлення:\n`}{orderID}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default OrderAccept;
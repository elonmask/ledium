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
        <h2>Спасибо, Ваш заказ принят</h2>
        <p className="order-number">Номер заказа {orderID}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default OrderAccept;
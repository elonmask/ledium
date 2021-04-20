import React from 'react';
import crypto from 'crypto';

const LiqPayPopUp = ({ openLiqPay, setOpenLiqPay, amount, orderID }) => {

  const json_string = {"public_key":"sandbox_i31017939057","version":"3","action":"pay","amount":`${amount}`,"currency":"UAH","description":"test","order_id":`${orderID}`, 'server_url': 'https://api.ledium.shop/pay/result', 'result_url': 'https://ledium.shop'  }
  const data = Buffer.from(JSON.stringify(json_string)).toString('base64');
  const privateKey = 'sandbox_V8YVlIAQaAFXQo7SVz2tXpboCDmSmET3Ommu0g56';
  const sign_string = privateKey+data+privateKey;
  const signature = crypto.createHash('sha1').update(sign_string).digest('base64');

  return (
    <>
      <div className={ openLiqPay ? 'account-modal' : 'account__disable'}>
    <div className="modal-overlay" onClick={() => setOpenLiqPay(false)}></div>
      <div className="account exit-account">
        <i 
          className="fas fa-times account-close"
          onClick={()=>{setOpenLiqPay(false)}}
        ></i>
        <form 
          className="exit"
          method="POST" 
          action="https://www.liqpay.ua/api/3/checkout" 
          acceptCharset="utf-8"
        >
        <h2>Оплатить</h2>
        <input 
          type="hidden" 
          name="data" 
          value={data}
        />
        <input type="hidden" name="signature" value={signature}/> 
        <button className="card__button-buy" type="submit">Перейти к оплате</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default LiqPayPopUp;
import React from 'react'

import '../public/style/order.css'

const Order = ({ makeOrder, setOrder }) => {

  const closeOrder = () => {
    setOrder(false);
  }

  return (
    <>
    <div className={ makeOrder ? 'account-modal' : 'account__disable'}>
    <div className="modal-overlay"></div>
      <div className="account">
        <i 
          className="fas fa-times account-close"
          onClick={()=>{closeOrder()}}
        ></i>
        <h2 className="account__title">Оформление заказа</h2>
          <form className="order__content-block">
              <div className="order-units">
                <div>!</div>
                <p>Ваши контактные данные</p>
              </div>
            <div className="order-per-info-block">
              <div className="order-per-info">
                <div className="order-inputs">
                <label  className="label-order" htmlFor="order-surname">
                  Фамилия
                </label>
                <input 
                  id="order-surname"
                  name="order-surname"
                  className="account__form order__form"
                  required
                  type="text"
                />
                </div>
                <div className="order-inputs">
                <label className="label-order" htmlFor="order-name">
                  Имя
                </label>
                <input 
                  id="order-name"
                  name="order-name"
                  className="account__form order__form"
                  required
                  type="text"
                />
                </div>
              </div>

              <div className="order-per-info">
                <div className="order-inputs">
                <label  className="label-order" htmlFor="order-tel">
                  Мобильный телефон
                </label>
                <input 
                  id="order-tel"
                  name="order-tel"
                  className="account__form order__form"
                  required
                  type="tel"
                />
                </div>
                <div className="order-inputs">
                <label className="label-order" htmlFor="order-city">
                  Город
                </label>
                <input 
                  id="order-city"
                  name="order-city"
                  className="account__form order__form"
                  required
                  type="text"
                />
                </div>
              </div>
            </div>
          </form>
          <div className="order__title">
              <h1>Заказ 1</h1>
              <p>на сумму 289 грн</p>
            </div>
            <div className="order-info">
              <div className="order-units">
                <div>1</div>
                <p>Товары</p>
              </div>
              <div className="order-product">
                <img 
                  alt=""
                  src="https://api.ledium.shop/img/?prodname=Лампа LED A55 6W 4100K Е27"
                  className="order-product-img"
                />
                <a className="order-product-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</a>
                <div className="order-product-blocks">
                  <div className="order-product-block-info">
                    <p className="order-product-text">Цена</p>
                    <p className="order-product-price">289 грн</p>
                  </div>
                  <div className="order-product-block-info">
                    <p className="order-product-text">Количество</p>
                    <p className="order-product-price">1</p>
                  </div>
                  <div className="order-product-block-info">
                    <p className="order-product-text">Сумма</p>
                    <p className="order-product-price">289 грн</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="order-adress">
              <div className="order-units">
                <div>2</div>
                <p>Доставка</p>
              </div>
              <div className="order-delivery">
                <input 
                  type="radio"
                  id="delivery"
                  name="delivery"
                  className="order-radio"
                />
                <div>
                  <label className="order-delivery-label" htmlFor="delivery">Курьер по вашему адресу</label>
                  <span>59 грн</span>
                </div>
              </div>
            </div>

            <div className="order-adress">
              <div className="order-units">
                <div>3</div>
                <p>Оплата</p>
              </div>
              <div className="order-delivery">
                <input 
                  type="radio"
                  id="pay"
                  name="delivery"
                  className="order-radio"
                />
                <div>
                  <label className="order-delivery-label" htmlFor="pay">Оплата при получении товара</label>
                </div>
              </div>
              <div className="order-delivery">
                <input 
                  type="radio"
                  id="card"
                  name="delivery"
                  className="order-radio"
                />
                <div>
                  <label className="order-delivery-label" htmlFor="card">Картой онлайн</label>
                </div>
              </div>
            </div>

            <div className="order-adress">
              <div className="order-units">
                <div>4</div>
                <p>Итого</p>
              </div>
                <div className="order-total-block">
                  <p className="order-total-text">1 товар на сумму</p>
                  <p className="order-price">289 грн</p>
                </div>
                <div className="order-total-block">
                  <p className="order-total-text">стоимость доставки</p>
                  <p className="order-price">59 грн</p>
                </div>
              <div className="order-total">
                <div className="order-total-block">
                  <p className="order-total-text">К оплате</p>
                  <p className="order-total-price">348 грн</p>
                </div>
              </div>
              <div>
                <button className="order-total-btn">Заказ подтверждаю</button>
                <p className="order-total-rules">Подтверждая заказ, я принимаю условия пользовательского соглашения</p>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Order;

import React from 'react'

const Delivery = (
  {
    delivery, 
    setDelivery,
    adress, 
    setAdress, 
    city, 
    setCity, 
    poshtaAdress, 
    setPoshtaAdress 
  }) => {

  return (
    <>
      <div className="order-adress">
        <div className="order-units">
          <div>2</div>
          <p>Доставка</p>
        </div>
        <div className="order-delivery">
        <div 
          className={delivery == 1 ? "order-radio order-radio-active " : "order-radio"}
          onClick={() => setDelivery(1)}
        ></div>
        <div>
          <label className="order-delivery-label">Доставка курьером</label>
        </div>
      </div>
      <div className={delivery == 1 ? "order-per-info" : "order-per-info delivery"}>
        <div className="order-inputs">
          <label  className="label-order">
            Город
          </label>
          <input
            name="city"
            className="account__form order__form"
            required
            type="text"
            value={city}
            onChange={event => setCity(event.target.value)}
          />
        </div>
        <div className="order-inputs">
          <label className="label-order">
            Адрес
          </label>
          <input 
            className='account__form order__form'
            required
            type="text"
            value={adress}
            onChange={event => setAdress(event.target.value)}
          />
        </div>
        </div>

      <div className="order-delivery">
        <div 
          className={delivery == 2 ? "order-radio order-radio-active " : "order-radio"}
          onClick={() => setDelivery(2)}
        ></div>
        <div>
          <label className="order-delivery-label">Самовывоз из Новой Почты</label>
        </div>
      </div>
      <div className={delivery == 2 ? "order-per-info" : "order-per-info delivery"}>
        <div className="order-inputs">
          <label  className="label-order">
            Город
          </label>
          <input
            name="city"
            className="account__form order__form"
            required
            type="text"
            value={city}
            onChange={event => setCity(event.target.value)}
          />
        </div>
        <div className="order-inputs">
          <label className="label-order">
            Отделение Новой Почты
          </label>
          <input 
            className='account__form order__form'
            required
            type="text"
            value={poshtaAdress}
            onChange={event => setPoshtaAdress(event.target.value)}
          />
        </div>
        </div>
      </div>
    </>
  )
}

export default Delivery;
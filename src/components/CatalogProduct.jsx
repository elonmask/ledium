import React from 'react';

const catalogProduct = ( {good} ) => {
  return (
    <>
      <div className="card">
        <img src="images/heart-shape.svg" alt="" className="heart" />
        <img alt="" src={good.img} className="card__img" />
        <div className="card__info">
          <div className="card__icons">
            { good.LightFlow && good.LightTemperature && (
              <>
                <div className="card__icons-box" title="Световой поток"><img src="images/potok.svg" alt="" className="card__icon" /><span>{good.LightFlow}</span></div>
                <div className="card__icons-box" title="Цветовая температура"><img src="images/temp_svet.svg" alt="" className="card__icon" /><span>{good.LightTemperature}</span></div>
              </>
            )}
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                href="product"
                className="card__link"
              >
                {good.name.split(' ').splice(0, 4).join(' ')}
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">{good.Price} грн</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>{good.Available}</strong></p>
            <p><strong>Мощность:</strong> {good.Power}</p>
            <p><strong>Цветовая температура:</strong> {good.LightTemperature}</p>
            <p><strong>Световой поток, Лм</strong> {good.LightFlow}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default catalogProduct;

import React from 'react';
import noPhoto from '../public/images/no_photo.jpg';
import potok from '../public/images/potok.svg';
import flow from '../public/images/temp_svet.svg';
import heart from '../public/images/heart-shape.svg';

const catalogProduct = ( {good} ) => {

  const picture = good.picture?.url;
 
  return (
    <>
      <div className="card">
        <img 
          alt="" 
          src={ typeof picture !== 'undefined' ? `https://admin.ledium.shop${picture}` : noPhoto} 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>{good?.LightFlow}</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>{good?.ColorTemperature}</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                {good.Name}
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">{ good.available !== false ? `${good.price}` : 'Немає у наявності' }</span>
            {
              good.available === true
              ? <button className="card__button-buy">Купити</button>
              : '' 
            }
          </div>
          <div className="card__p">
            <p><strong>{good?.Available}</strong></p>
            <p><strong>Потужність:</strong> {good?.Power}</p>
            <p><strong>Колірна температура:</strong> {good.ColorTemperature}</p>
            <p><strong>Світловий потік, Лм</strong> {good.LightFlow}</p>
          </div>
          </div>
    </div>
    
    </>
  )
}

export default catalogProduct;

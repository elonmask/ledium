import React from 'react';
import noPhoto from '../public/images/no_photo.jpg';
import potok from '../public/images/potok.svg';
import flow from '../public/images/temp_svet.svg';
import heart from '../public/images/heart-shape.svg';

const catalogProduct = ( {good} ) => {

  const getParams = (productName) => {
    
    let lightTemperature = "";
    let lightFlow = "";
    let power = "";
    
    productName.split(" ").forEach(item => {
        if (item.includes("0K")) {
            lightTemperature = item;
        } else if (item.includes("0Lm")) {
            lightFlow = item;
        } else if (item.includes("W")) {
          power = item;
        }
    })

    return { power: power, lightTemperature: lightTemperature, lightFlow: lightFlow };
  }

  const Params = getParams(good.name);
  const picture = `${good.picture}`;
 
  return (
    <>
      <div className="card">
        <img src={heart} alt="" className="heart" />
        <img 
          alt="" 
          src={ picture !== 'undefined' ? picture : noPhoto} 
          className="card__img" 
        />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src={potok} alt="" className="card__icon" />
              <span>{Params.lightFlow}</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src={flow} alt="" className="card__icon" />
              <span>{Params.lightTemperature}</span>
            </div>
          </div>
          <div className="card__title">
            <h3 className="card__h3">
              <a
                className="card__link"
              >
                {good.name.slice(0, 30)}...
              </a>
            </h3>
          </div>
          <div className="card__buy">
            <span className="card__price">{ good.available !== 'false' ? `${good.price} грн` : 'Нет в наличии' }</span>
            <button className="card__button-buy">Купить</button>
          </div>
          <div className="card__p">
            <p><strong>{good.Available}</strong></p>
            <p><strong>Мощность:</strong> {Params.power}</p>
            <p><strong>Цветовая температура:</strong> {Params.lightTemperature}</p>
            <p><strong>Световой поток, Лм</strong> {Params.lightFlow}</p>
          </div>
          </div>
    </div>
    
    </>
  )
}

export default catalogProduct;

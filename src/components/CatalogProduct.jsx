import React from 'react';

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
        <img src="images/heart-shape.svg" alt="" className="heart" />
        <img alt="" src={picture} className="card__img" />
        <div className="card__info">
          <div className="card__icons">
            <div className="card__icons-box" title="Световой поток">
              <img src="images/potok.svg" alt="" className="card__icon" />
              <span>{Params.lightFlow}</span>
            </div>
            <div className="card__icons-box" title="Цветовая температура">
              <img src="images/temp_svet.svg" alt="" className="card__icon" />
              <span>{Params.lightTemperature}</span>
            </div>
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
            <span className="card__price">{good.price} грн</span>
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

import axios from 'axios';

import heart from '../public/images/heart-shape.svg';
import potok from '../public/images/potok.svg';
import flow from '../public/images/temp_svet.svg';

import React, { useEffect, useState } from 'react';

const Sales = () => {

    const [goods, setGoods] = useState([]);

    useEffect(() => {
        axios.get(`https://admin.ledium.shop/sales`)
            .then(res => {
            const data = res.data;
            setGoods(data);
        }) 
    }, []);

    return (
        <div className="catalog-content">
    <div className="catalog-header">
        <h1>Акции</h1>
    </div>
    <div className="catalog-goods">
        {
            goods.length >= 1
            ? (
                goods.map(prod => (
                    <div className="card">
                <img src={heart} alt="" className="heart" />
                <img alt="" src={`https://admin.ledium.shop` + prod.picture.url} className="card__img" />
                <div className="card__info">
                    <div className="card__icons">
                        <div className="card__icons-box" title="Световой поток">
                            <img src={potok} alt="" className="card__icon" />
                            <span>{prod.lightFlow}</span>
                        </div>
                        <div className="card__icons-box" title="Цветовая температура">
                            <img src={flow} alt="" className="card__icon" />
                            <span>{prod.color_temp}</span>
                        </div>
                    </div>
                    <div className="card__title">
                        <h3 className="card__h3">
                            <a className="card__link">
                                {prod.Name.replace("$", "")}
                            </a>
                        </h3>
                    </div>
                    <div className="card__buy">
                        <span className="card__price">{prod.price}</span>
                        <button className="card__button-buy">Купить</button>
                    </div>
                    <div className="card__p">
                        <p><strong>{ prod.available ? "В наличии" : "нет в наличии" }</strong></p>
                        <p><strong>Мощность:</strong> 10W</p>
                        <p><strong>Цветовая температура:</strong>{prod.color_temp}</p>
                        <p><strong>Световой поток, Лм</strong>{prod.lightFlow}</p>
                    </div>
                </div>
            </div>
                ))
            )
            : ''
        }
    </div>
</div>
    )
}

export default Sales;
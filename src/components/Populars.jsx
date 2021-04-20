import axios from 'axios';

import heart from '../public/images/heart-shape.svg';
import potok from '../public/images/potok.svg';
import flow from '../public/images/temp_svet.svg';
import categoriesEnglish from '../public/categories.json';

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Populars = () => {

    const [goods, setGoods] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`https://admin.ledium.shop/populars`)
            .then(res => {
            const data = res.data;
            setGoods(data);
        }) 
    }, []);

    const categoryName = (id) => {
        let cat_name = null
        categoriesEnglish.forEach(item => {
            if (item.id === id.toString()) {
                cat_name = item.name;
            }
        })

        return cat_name;
    }

    return (
        <div className="catalog-content" id="popular">
    <div className="catalog-header">
        <h1>Популярні товари</h1>
    </div>
    <div className="catalog-goods">
        {
            goods.length >= 1
            ? (
                goods.map(prod => (
                    <div className="card"
                    onClick={ () => {history.push(`/catalog/category/${categoryName(prod.Product.category)}/product/${prod.Product.id}`) }}
                    >
                
                <img alt="" src={`https://admin.ledium.shop` + prod.Product.picture.url} className="card__img" />
                <div className="card__info">
                    <div className="card__icons">
                        <div className="card__icons-box" title="Световой поток">
                            <img src={potok} alt="" className="card__icon" />
                            <span>{prod.Product.LightFlow}</span>
                        </div>
                        <div className="card__icons-box" title="Цветовая температура">
                            <img src={flow} alt="" className="card__icon" />
                            <span>{prod.Product.ColorTemperature}</span>
                        </div>
                    </div>
                    <div className="card__title">
                        <h3 className="card__h3">
                            <a className="card__link">
                                {prod.Product.Name}
                            </a>
                        </h3>
                    </div>
                    <div className="card__buy">
                        <span className="card__price">{prod.Product.price}</span>
                        <button className="card__button-buy">Купити</button>
                    </div>
                    <div className="card__p">
                        <p><strong>{ prod.Product.available ? "В наличии" : "нет в наличии" }</strong></p>
                        <p><strong>Потужність:</strong> 10W</p>
                        <p><strong>Колірна температура:</strong>{prod.Product.color_temp}</p>
                        <p><strong>Світловий потік, Лм</strong>{prod.Product.lightFlow}</p>
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

export default Populars;
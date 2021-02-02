import React, {useState} from 'react';
import goods from '..//public/data.json';
import '../public/style/catalog.css';
import Product from './Product';
import { Link } from 'react-router-dom';
import CatalogProduct from './CatalogProduct';

const Catalog = ( ) => {

  const goodsWithImages = goods.filter(good => good.img !== "");

  return (
    <main>
    <div className="page-content">
        <div className="catalog">
            <div className="catalog-header">
                <div className="breadcrumbs">
                    <span>
                        <span>
                            <a href="#">Главная</a> 
                        </span>
                    </span>
                </div>
                <h1>Каталог</h1>
            </div>
            <div className="sidebar">
                <div className="sidebar-menu">
                    <ul className="sidebar-list">
                        <li className="sidebar-item"><a href="LEDlampa" className="sidebar-link">Светодиодные лампы</a></li>
                        <li className="sidebar-item"><a href="spotlights" className="sidebar-link">Прожекторы</a></li>
                        <li className="sidebar-item"><a href="fixtures" className="sidebar-link">Светильники</a></li>
                        <li className="sidebar-item"><a href="phitolamp" className="sidebar-link">Фитолампы</a></li>
                        <li className="sidebar-item"><a href="tableLamp" className="sidebar-link">Настольные лампы</a></li>
                    </ul>
                </div>
                {/*<div className="sidebar-filter">
                    <div className="sidebar-filter__item">
                        <h3 className="sidebar-filter__title">Форма/Тип</h3>
                        <input type="checkbox" id="shar" className="custom-checkbox" />
                        <label for="shar">Шар</label>
                    </div>
                    <div className="sidebar-filter__item">
                        <h3 className="sidebar-filter__title">Цоколь</h3>
                        <input type="checkbox" id="e14" className="custom-checkbox" />
                        <label for="e14">Е14</label>
                        <input type="checkbox" id="e27" className="custom-checkbox" />
                        <label for="e27">Е27</label>
                    </div>
                    <div className="sidebar-filter__item">
                        <h3 className="sidebar-filter__title">Цветовая температура</h3>
                        <input type="checkbox" id="3k" className="custom-checkbox" />
                        <label for="3k">3000K</label>
                        <input type="checkbox" id="4k" className="custom-checkbox" />
                        <label for="4k">4100K</label>
                        <input type="checkbox" id="4k" className="custom-checkbox" />
                        <label for="4k">6500K</label>
                    </div>
                    <div className="sidebar-filter__item">
                        <h3 className="sidebar-filter__title">Мощность</h3>
                        <input type="range" min="6" max="12" value="1" />
                    </div>
                    <div className="sidebar-filter__item">
                        <h3 className="sidebar-filter__title">Лампы накаливания</h3>
                        <input type="range" min="6" max="12" value="1" />
                    </div>
                </div>*/}
              </div>
            <div className="catalog-content">
                <div className="catalog-goods"> 
                  {goodsWithImages.map(good => (
                    <Link to="product">
                      <CatalogProduct good={good}/>
                    </Link>
                  ))}
                    
                </div>
                {/*<a href="#" className="section__read black">Загрузить еще</a>*/}
            </div>
        </div>
    </div>
</main>

  );
};

export default Catalog;
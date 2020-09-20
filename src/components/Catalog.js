import React from 'react';
import '../public/catalog.css';

const Catalog = () => {
  return (
    <main>
    <div className="page-content">
        <div className="catalog">
            <div className="catalog-header">
                <div className="breadcrumbs">
                    <span>
                        <span>
                            <a href="#">Главная</a>>
                            <span>
                                <a href="#">Продукция</a>>
                                <span>
                                    <a href="#">Светодиодные лампы</a>>
                                    <span>
                                        <a href="#">Шар</a>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </div>
                <h1>Шар</h1>
            </div>
            <div className="sidebar">
                <div className="sidebar-menu">
                    <ul className="sidebar-list">
                        <li className="sidebar-item"><a href="#" className="sidebar-link">Светодиодные лампы</a></li>
                        <li className="sidebar-item"><a href="#" className="sidebar-link">Прожекторы</a></li>
                        <li className="sidebar-item"><a href="#" className="sidebar-link">Светильники</a></li>
                        <li className="sidebar-item"><a href="#" className="sidebar-link">Уличные</a></li>
                        <li className="sidebar-item"><a href="#" className="sidebar-link">Промышленные</a></li>
                        <li className="sidebar-item"><a href="#" className="sidebar-link">Кабель-провод</a></li>
                    </ul>
                </div>
                <div className="sidebar-filter">
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
                </div>
            </div>
            <div className="catalog-content">
                <div className="catalog-goods">
                    <div className="card">
                        <img src="images/heart-shape.svg" alt="" className="heart" />
                        <img src="images/scales.svg" alt="" className="scales heart" />
                        <img alt="" src="./images/catalog-img.png" className="card__img" />
                        <div className="card__info">
                            <div className="card__icons">
                                <div className="card__icons-box" title="Световой поток"><img src="images/potok.svg" alt="" className="card__icon" /><span>900Lm</span></div>
                                <div className="card__icons-box" title="Цветовая температура"><img src="images/temp_svet.svg" alt="" className="card__icon" /><span>400K</span></div>
                            </div>
                            <div className="card__title">
                                <h3 className="card__h3">
                                    <a href="#" className="card__link">Лампа LED Lorem ipsum dolor</a>
                                </h3>
                            </div>
                            <div className="card__buy">
                                <span className="card__price">335 грн</span>
                                <button className="card__button-buy">Купить</button>
                            </div>
                            <div className="card__p">
                                <p><strong>Артикул:</strong> 53216</p>
                                <p><strong>Мощность:</strong> 6В</p>
                                <p><strong>Цветовая температура:</strong> 3000K</p>
                                <p><strong>Световой поток, Лм</strong> 420</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/heart-shape.svg" alt="" className="heart" />
                        <img src="images/scales.svg" alt="" className="scales heart" />
                        <span className="label-products label-new">Новинка</span>
                        <img alt="" src="./images/catalog-img.png" className="card__img" />
                        <div className="card__info">
                            <div className="card__icons">
                                <div className="card__icons-box" title="Световой поток"><img src="images/potok.svg" alt="" className="card__icon" /><span>900Lm</span></div>
                                <div className="card__icons-box" title="Цветовая температура"><img src="images/temp_svet.svg" alt="" className="card__icon" /><span>400K</span></div>
                            </div>
                            <div className="card__title">
                                <h3 className="card__h3">
                                    <a href="#" className="card__link">Лампа LED Lorem ipsum dolor sit amet</a>
                                </h3>
                            </div>
                            <div className="card__buy">
                                <span className="card__price">335 грн</span>
                                <button className="card__button-buy">Купить</button>
                            </div>
                            <div className="card__p">
                                <p><strong>Артикул:</strong> 53216</p>
                                <p><strong>Мощность:</strong> 6В</p>
                                <p><strong>Цветовая температура:</strong> 3000K</p>
                                <p><strong>Световой поток, Лм</strong> 420</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/heart-shape.svg" alt="" className="heart" />
                        <img src="images/scales.svg" alt="" className="scales heart" />
                        <span className="label-products label-hit">Хит продаж</span>
                        <img alt="" src="./images/catalog-img.png" className="card__img" />
                        <div className="card__info">
                            <div className="card__icons">
                                <div className="card__icons-box" title="Световой поток"><img src="images/potok.svg" alt="" className="card__icon" /><span>900Lm</span></div>
                                <div className="card__icons-box" title="Цветовая температура"><img src="images/temp_svet.svg" alt="" className="card__icon" /><span>400K</span></div>
                            </div>
                            <div className="card__title">
                                <h3 className="card__h3">
                                    <a href="#" className="card__link">Лампа LED Lorem ipsum dolor</a>
                                </h3>
                            </div>
                            <div className="card__buy">
                                <span className="card__price">335 грн</span>
                                <button className="card__button-buy">Купить</button>
                            </div>
                            <div className="card__p">
                                <p><strong>Артикул:</strong> 53216</p>
                                <p><strong>Мощность:</strong> 6В</p>
                                <p><strong>Цветовая температура:</strong> 3000K</p>
                                <p><strong>Световой поток, Лм</strong> 420</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/heart-shape.svg" alt="" className="heart" />
                        <img src="images/scales.svg" alt="" className="scales heart" />
                        <img alt="" src="./images/catalog-img.png" className="card__img" />
                        <div className="card__info">
                            <div className="card__icons">
                                <div className="card__icons-box" title="Световой поток"><img src="images/potok.svg" alt="" className="card__icon" /><span>900Lm</span></div>
                                <div className="card__icons-box" title="Цветовая температура"><img src="images/temp_svet.svg" alt="" className="card__icon" /><span>400K</span></div>
                            </div>
                            <div className="card__title">
                                <h3 className="card__h3">
                                    <a href="#" className="card__link">Лампа LED Lorem ipsum dolor</a>
                                </h3>
                            </div>
                            <div className="card__buy">
                                <span className="card__price">335 грн</span>
                                <button className="card__button-buy">Купить</button>
                            </div>
                            <div className="card__p">
                                <p><strong>Артикул:</strong> 53216</p>
                                <p><strong>Мощность:</strong> 6В</p>
                                <p><strong>Цветовая температура:</strong> 3000K</p>
                                <p><strong>Световой поток, Лм</strong> 420</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/heart-shape.svg" alt="" className="heart" />
                        <img src="images/scales.svg" alt="" className="scales heart" />
                        <img alt="" src="./images/catalog-img.png" className="card__img" />
                        <div className="card__info">
                            <div className="card__icons">
                                <div className="card__icons-box" title="Световой поток"><img src="images/potok.svg" alt="" className="card__icon" /><span>900Lm</span></div>
                                <div className="card__icons-box" title="Цветовая температура"><img src="images/temp_svet.svg" alt="" className="card__icon" /><span>400K</span></div>
                            </div>
                            <div className="card__title">
                                <h3 className="card__h3">
                                    <a href="#" className="card__link">Лампа LED Lorem ipsum dolor</a>
                                </h3>
                            </div>
                            <div className="card__buy">
                                <span className="card__price">335 грн</span>
                                <button className="card__button-buy">Купить</button>
                            </div>
                            <div className="card__p">
                                <p><strong>Артикул:</strong> 53216</p>
                                <p><strong>Мощность:</strong> 6В</p>
                                <p><strong>Цветовая температура:</strong> 3000K</p>
                                <p><strong>Световой поток, Лм</strong> 420</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/heart-shape.svg" alt="" className="heart" />
                        <img src="images/scales.svg" alt="" className="scales heart" />
                        <img alt="" src="./images/catalog-img.png" className="card__img" />
                        <div className="card__info">
                            <div className="card__icons">
                                <div className="card__icons-box" title="Световой поток"><img src="images/potok.svg" alt="" className="card__icon" /><span>900Lm</span></div>
                                <div className="card__icons-box" title="Цветовая температура"><img src="images/temp_svet.svg" alt="" className="card__icon" /><span>400K</span></div>
                            </div>
                            <div className="card__title">
                                <h3 className="card__h3">
                                    <a href="#" className="card__link">Лампа LED Lorem ipsum dolor</a>
                                </h3>
                            </div>
                            <div className="card__buy">
                                <span className="card__price">335 грн</span>
                                <button className="card__button-buy">Купить</button>
                            </div>
                            <div className="card__p">
                                <p><strong>Артикул:</strong> 53216</p>
                                <p><strong>Мощность:</strong> 6В</p>
                                <p><strong>Цветовая температура:</strong> 3000K</p>
                                <p><strong>Световой поток, Лм</strong> 420</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/heart-shape.svg" alt="" className="heart" />
                        <img src="images/scales.svg" alt="" className="scales heart" />
                        <img alt="" src="./images/catalog-img.png" className="card__img" />
                        <div className="card__info">
                            <div className="card__icons">
                                <div className="card__icons-box" title="Световой поток"><img src="images/potok.svg" alt="" className="card__icon" /><span>900Lm</span></div>
                                <div className="card__icons-box" title="Цветовая температура"><img src="images/temp_svet.svg" alt="" className="card__icon" /><span>400K</span></div>
                            </div>
                            <div className="card__title">
                                <h3 className="card__h3">
                                    <a href="#" className="card__link">Лампа LED Lorem ipsum dolor</a>
                                </h3>
                            </div>
                            <div className="card__buy">
                                <span className="card__price">335 грн</span>
                                <button className="card__button-buy">Купить</button>
                            </div>
                            <div className="card__p">
                                <p><strong>Артикул:</strong> 53216</p>
                                <p><strong>Мощность:</strong> 6В</p>
                                <p><strong>Цветовая температура:</strong> 3000K</p>
                                <p><strong>Световой поток, Лм</strong> 420</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/heart-shape.svg" alt="" className="heart" />
                        <img src="images/scales.svg" alt="" className="scales heart" />
                        <img alt="" src="./images/catalog-img.png" className="card__img" />
                        <div className="card__info">
                            <div className="card__icons">
                                <div className="card__icons-box" title="Световой поток"><img src="images/potok.svg" alt="" className="card__icon" /><span>900Lm</span></div>
                                <div className="card__icons-box" title="Цветовая температура"><img src="images/temp_svet.svg" alt="" className="card__icon" /><span>400K</span></div>
                            </div>
                            <div className="card__title">
                                <h3 className="card__h3">
                                    <a href="#" className="card__link">Лампа LED Lorem ipsum dolor</a>
                                </h3>
                            </div>
                            <div className="card__buy">
                                <span className="card__price">335 грн</span>
                                <button className="card__button-buy">Купить</button>
                            </div>
                            <div className="card__p">
                                <p><strong>Артикул:</strong> 53216</p>
                                <p><strong>Мощность:</strong> 6В</p>
                                <p><strong>Цветовая температура:</strong> 3000K</p>
                                <p><strong>Световой поток, Лм</strong> 420</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/heart-shape.svg" alt="" className="heart" />
                        <img src="images/scales.svg" alt="" className="scales heart" />
                        <img alt="" src="./images/catalog-img.png" className="card__img" />
                        <div className="card__info">
                            <div className="card__icons">
                                <div className="card__icons-box" title="Световой поток"><img src="images/potok.svg" alt="" className="card__icon" /><span>900Lm</span></div>
                                <div className="card__icons-box" title="Цветовая температура"><img src="images/temp_svet.svg" alt="" className="card__icon" /><span>400K</span></div>
                            </div>
                            <div className="card__title">
                                <h3 className="card__h3">
                                    <a href="#" className="card__link">Лампа LED Lorem ipsum dolor</a>
                                </h3>
                            </div>
                            <div className="card__buy">
                                <span className="card__price">335 грн</span>
                                <button className="card__button-buy">Купить</button>
                            </div>
                            <div className="card__p">
                                <p><strong>Артикул:</strong> 53216</p>
                                <p><strong>Мощность:</strong> 6В</p>
                                <p><strong>Цветовая температура:</strong> 3000K</p>
                                <p><strong>Световой поток, Лм</strong> 420</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/heart-shape.svg" alt="" className="heart" />
                        <img src="images/scales.svg" alt="" className="scales heart" />
                        <img alt="" src="./images/catalog-img.png" className="card__img" />
                        <div className="card__info">
                            <div className="card__icons">
                                <div className="card__icons-box" title="Световой поток"><img src="images/potok.svg" alt="" className="card__icon" /><span>900Lm</span></div>
                                <div className="card__icons-box" title="Цветовая температура"><img src="images/temp_svet.svg" alt="" className="card__icon" /><span>400K</span></div>
                            </div>
                            <div className="card__title">
                                <h3 className="card__h3">
                                    <a href="#" className="card__link">Лампа LED Lorem ipsum dolor</a>
                                </h3>
                            </div>
                            <div className="card__buy">
                                <span className="card__price">335 грн</span>
                                <button className="card__button-buy">Купить</button>
                            </div>
                            <div className="card__p">
                                <p><strong>Артикул:</strong> 53216</p>
                                <p><strong>Мощность:</strong> 6В</p>
                                <p><strong>Цветовая температура:</strong> 3000K</p>
                                <p><strong>Световой поток, Лм</strong> 420</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/heart-shape.svg" alt="" className="heart" />
                        <img src="images/scales.svg" alt="" className="scales heart" />
                        <img alt="" src="./images/catalog-img.png" className="card__img" />
                        <div className="card__info">
                            <div className="card__icons">
                                <div className="card__icons-box" title="Световой поток"><img src="images/potok.svg" alt="" className="card__icon" /><span>900Lm</span></div>
                                <div className="card__icons-box" title="Цветовая температура"><img src="images/temp_svet.svg" alt="" className="card__icon" /><span>400K</span></div>
                            </div>
                            <div className="card__title">
                                <h3 className="card__h3">
                                    <a href="#" className="card__link">Лампа LED Lorem ipsum dolor</a>
                                </h3>
                            </div>
                            <div className="card__buy">
                                <span className="card__price">335 грн</span>
                                <button className="card__button-buy">Купить</button>
                            </div>
                            <div className="card__p">
                                <p><strong>Артикул:</strong> 53216</p>
                                <p><strong>Мощность:</strong> 6В</p>
                                <p><strong>Цветовая температура:</strong> 3000K</p>
                                <p><strong>Световой поток, Лм</strong> 420</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/heart-shape.svg" alt="" className="heart" />
                        <img src="images/scales.svg" alt="" className="scales heart" />
                        <img alt="" src="./images/catalog-img.png" className="card__img" />
                        <div className="card__info">
                            <div className="card__icons">
                                <div className="card__icons-box" title="Световой поток"><img src="images/potok.svg" alt="" className="card__icon" /><span>900Lm</span></div>
                                <div className="card__icons-box" title="Цветовая температура"><img src="images/temp_svet.svg" alt="" className="card__icon" /><span>400K</span></div>
                            </div>
                            <div className="card__title">
                                <h3 className="card__h3">
                                    <a href="#" className="card__link">Лампа LED Lorem ipsum dolor</a>
                                </h3>
                            </div>
                            <div className="card__buy">
                                <span className="card__price">335 грн</span>
                                <button className="card__button-buy">Купить</button>
                            </div>
                            <div className="card__p">
                                <p><strong>Артикул:</strong> 53216</p>
                                <p><strong>Мощность:</strong> 6В</p>
                                <p><strong>Цветовая температура:</strong> 3000K</p>
                                <p><strong>Световой поток, Лм</strong> 420</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" className="section__read black">Загрузить еще</a>
            </div>
        </div>
    </div>
</main>

  );
};

export default Catalog;
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CatalogProduct from './CatalogProduct';
import axios from 'axios';
import FilterMenu from './FilterMenu';
import { getProducts } from '../public/utils'
import '../public/style/catalog.css';

const Catalog = ({match}) => {

  const [category, setCategory] = useState([]);
  const [array, setArray] = useState([]);

  const [categoryId, setCategoryId] = useState(match.params.id);
  const [goods, setGoods] = useState(getProducts(categoryId));

  const [categoryText, setCategoryText] = useState('');

  const history = useHistory();

  useEffect(() => {
    if( goods == false ) {
      axios
      .get('https://api.ledium.shop/feed')
      .then( response => {
        sessionStorage.setItem("data", JSON.stringify(response.data));
        setGoods(getProducts(match.params.id));
      })
    } else if (match.params.id != categoryId) {
      setCategoryId(match.params.id);
  }
  });

/*********************************** */
/**Вот этот Юзэфект это костыль, что бы меню работало. Его нужно будет убрать*/
  useEffect(() => { 
    if (sessionStorage.getItem("data") != null && typeof sessionStorage.getItem("data") !== "undefined") {
      setCategory(JSON.parse(sessionStorage.getItem("data"))?.data?.categories?.category);
    }
   }, [goods]);

   /************************* */

  useEffect(() => {
    setGoods(getProducts(categoryId));
  }, [categoryId]);

  if(goods.length > 0) {
    return (
      <main>
      <div className="page-content">
        <div className="catalog">
          <div className="catalog-header">
            <div className="breadcrumbs">
              <span>
                <span>
                  <a href="/">Главная  </a> 
                </span>
                <span>
                  <a href="/catalog">Каталог  </a> 
                </span>
                <span>
                  <a >{categoryText}</a> 
                </span>
              </span>
            </div>
            <h1>Каталог</h1>
          </div>
        <div className="sidebar">
          <FilterMenu
            category={category}
            goods={goods}
            setGoods={setGoods}
            setCategoryId={setCategoryId}
            setArray={setArray}
            setCategoryText={setCategoryText}
          />
        </div>
        <div className="catalog-content">
          <div className="catalog-goods"> 
            { goods.map(good => (
              good.price !== '0' && good.picture !== 'undefined' && good.description.text !== 'undefined' && (
                <>
                <div onClick={() => {history.push(`/catalog/category/${match.params.id}/product/${good.id}`)} }>
                  <CatalogProduct good={good}/>
                </div>
                </>
              )
            ))}
          </div>
          {/*<a href="#" className="section__read black">Загрузить еще</a>*/}
        </div>
      </div>
    </div>
  </main>
    )
  } else {
    return (
      <div></div>
    )
  }
    };

export default Catalog;

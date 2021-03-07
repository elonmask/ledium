import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CatalogProduct from './CatalogProduct';
import axios from 'axios';
import FilterMenu from './FilterMenu';
import { getProducts } from '../public/utils'
import categoriesEng from '../public/categories.json';
import '../public/style/catalog.css';

const Category = ({match}) => {

  const findCategoryId = (text) => {
    let n = '';
    categoriesEng.map(category => {
      if ( category.name == text ) {
        n = category.id
      }
    })
    return n;
  }

  //const [category, setCategory] = useState([]);
  const [array, setArray] = useState([]);
  const [categoryId, setCategoryId] = useState(findCategoryId(match.params.id));
  const [goods, setGoods] = useState(getProducts(categoryId));
  const [categoryText, setCategoryText] = useState('');

  const history = useHistory();

  useEffect(() => {
    if( goods == false ) {
      axios
      .get('https://api.ledium.shop/feed')
      .then( response => {
        sessionStorage.setItem("data", JSON.stringify(response.data));
        setGoods(getProducts(findCategoryId(match.params.id)));
      })
    } else if (findCategoryId(match.params.id) != categoryId) {
      setCategoryId(findCategoryId(match.params.id));
    }
  });

/*********************************** */
/**Вот этот Юзэфект это костыль, что бы меню работало. Его нужно будет убрать*/
 /* useEffect(() => { 
    if (sessionStorage.getItem("data") != null && typeof sessionStorage.getItem("data") !== "undefined") {
      setCategory(JSON.parse(sessionStorage.getItem("data"))?.data?.categories?.category);
    }
   }, [goods]);

   /************************* */

  useEffect(() => {
    if ( goods !== false ) {
      setGoods(getProducts(categoryId));
    }
  }, [categoryId]);

  const openProductCard = (obj) => {
    if ( obj.available == 'false' &&  obj.description.text <= 1  || obj.available == 'false' &&  obj.description.text.includes('undefined') ) {
      console.log('нет в наличии')
    } else {
      history.push(`/catalog/category/${match.params.id}/product/${obj.id}`);
    }
  }

  if(goods.length > 0) {
    return (
      <main>
      <div className="page-content">
        <div className="catalog">
          <div className="catalog-header">
            <div className="breadcrumbs">
              <span>
                <span>
                  <a className="opacity" href="/">Главная > </a> 
                </span>
                <span>
                  <a className="opacity" href="/catalog">Каталог > </a> 
                </span>
                <span>
                  <a href="/catalog">{goods[0].text}</a> 
                </span>
                <span>
                  <a >{categoryText}</a> 
                </span>
              </span>
            </div>
            <h1>{goods[0].text}</h1>
          </div>
        <div className="sidebar">
          <FilterMenu
            goods={goods}
            setArray={setArray}
          />
        </div>
        <div className="catalog-content">
          <div className="catalog-goods"> 
            { goods[1].map(good => (
              <>
                <div onClick={() => {openProductCard(good)} }>
                  <CatalogProduct good={good}/>
                </div>
              </>
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

export default Category;

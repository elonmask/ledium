import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CatalogProduct from './CatalogProduct';
import axios from 'axios';
import FilterMenu from './FilterMenu';
import categoriesEng from '../public/categories.json';
import '../public/style/catalog.css';
import SidebarMenu from './SidebarMenu';

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

  const getProducts = (categoryId, products) => {
    const filteredArray = [];
    if (typeof products !== "undefined") {
      products.forEach(item => {
        console.log(item.category.id, categoryId)
      if (item.category.id.toString() === categoryId) {
        filteredArray.push(item);
      };
    });
    }

    return filteredArray;
  }

  const [array, setArray] = useState([]);
  const [categoryId, setCategoryId] = useState(findCategoryId(match.params.id));
  const [goods, setGoods] = useState([]);

  const history = useHistory();

  useEffect(() => {
    axios
      .get('https://admin.ledium.shop/goods')
      .then( response => {
        setGoods(getProducts(categoryId, response.data));
      })
  }, [categoryId])

  useEffect(() => {
      setCategoryId(findCategoryId(match.params.id))
  });

  const openProductCard = (obj) => {
    if ( obj.available == 'false' &&  obj.description.text <= 1 || 
         obj.available == 'false' &&  obj.description.text.includes('undefined') 
    ) {
      console.log('нет в наличии')
    } else {
      history.push(`/catalog/category/${match.params.id}/product/${obj.id}`);
    }
  }

  return (
      <main>
      <div className="page-content">
        <div className="catalog catalog-category">
          <div className="catalog-header">
            <div className="breadcrumbs">
              <span>
                <span>
                  <a className="opacity" href="/">Головна / </a> 
                </span>
                <span>
                  <a className="opacity" href="/catalog">Каталог  / </a> 
                </span>
                <span>
                  <a>{goods[0]?.category.name}</a>  
                </span>
              </span>
            </div>
            <h1>{goods[0]?.category.name}</h1>
          </div>
        <div className="sidebar">
          <SidebarMenu/>
        </div>
        <div className="catalog-content">
          <div className="catalog-goods"> 
            {goods.map(good => (
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
};

export default Category;

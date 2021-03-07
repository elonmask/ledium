import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { getCategories } from '../public/utils';
import categoriesEnglish from '../public/categories.json';

const FilterMenu = ({ goods, setArray }) => {

  const history = useHistory();
  const [categories, setCategories] = useState(getCategories)

  const filterByCategory = (item) => {
    history.push(`/catalog/category/${setCategoryEng(item.id)}`);
  
    let newArr = [...goods];
    const n = newArr.filter( elem => elem.categoryId === item.id);

    setArray([...n]);
  }

  useEffect(() => {
    if( categories == false ) {
      axios
      .get('https://api.ledium.shop/feed')
      .then( response => {
        sessionStorage.setItem("data", JSON.stringify(response.data));
        setCategories(getCategories)
      })
    }
  })

  const setCategoryEng = (id) => {
    let eng = '';
    categoriesEnglish.map(category => {
      if ( category.id === id) {
        console.log(category.name);
        eng = category.name;
      }
    })
    return eng;
  }

  return (
    <>
      <div className="sidebar-menu">
        <ul className="sidebar-list">
          {categories.map(category => (
            <li className="sidebar-item" key={category.id}>
              <button
                className="sidebar-link"
                onClick={() => {filterByCategory(category)}}
              >
                {category.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default FilterMenu;

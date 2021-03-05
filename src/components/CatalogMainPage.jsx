import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { getCategories } from '../public/utils'

const CatalogMainPage = () => {
  const history = useHistory();
  const [categories, setCategories] = useState(getCategories);

  const categoriesImg = [
    {
      img: 'https://api.ledium.shop/img/?prodname=Лампа LED A55 6W 4100K Е27',
      id: '1',
    },
    {
      img: 'https://api.ledium.shop/img/?prodname=Світлодіодний_прожектор_30W_LEDium_EXCELLENT',
      id: '2',
    },
    {
      img: 'https://api.ledium.shop/img/?prodname=Лампа LED A60 FITO 11W 4100K Е27',
      id: '3',
    },
    {
      img: 'https://api.ledium.shop/img/?prodname=protect',
      id: '4',
    },
    {
      img: 'https://api.ledium.shop/img/?prodname=Настольная лампа LEDium RAINBOW',
      id: '5',
    },
    {
      img: 'https://api.ledium.shop/img/?prodname=Лампа LED A55 6W 4100K Е27',
      id: '6',
    },
  ]

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

  return (
    <>
      <section className="section__menu">
        <section className="section__menu-h2">
          <h2>Каталог</h2>
        </section>
        <ul className="section__list">
          {categories.map(category => (
            <>
            <li className="section__item">
              <a
                className="section__link"
                onClick={() => {history.push(`/catalog/category/${category.id}`)} }>
                  {categoriesImg.map(categoryImg => (
                    <img
                      className="section__menu-img" 
                      alt="" 
                      src={category.id === categoryImg.id ? categoryImg.img : ''} 
                    />
                  ))}
                <span>{category.text}</span>
              </a>
            </li>
            </>
          ))}
        </ul>
      </section>
    </>
  )
}

export default CatalogMainPage;

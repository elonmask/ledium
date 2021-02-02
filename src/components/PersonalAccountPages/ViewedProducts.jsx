import React from 'react';
import goods from '..//..//public/data.json';
import CatalogProduct from '..//CatalogProduct';
import { Link } from 'react-router-dom';

import './style/viewed-products.css';

const ViewedProducts = () => {
  const goodsWithImages = goods.filter(good => good.img !== "");
  return (
    <>
      <main className="personal-info">
        <div className="personal-info__testimonials">
          <div className="viewed-products">
            {goodsWithImages.map(good => (
              <Link to="product">
                <CatalogProduct good={good}/>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default ViewedProducts;

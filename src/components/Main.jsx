import React, {useState, useEffect} from 'react';
import axios from 'axios';
import potok from '../public/images/potok.svg';
import flow from '../public/images/temp_svet.svg';
import heart from '../public/images/heart-shape.svg';
import Partners from './Partners';
import Banner from './Banner';
import SidebarMenu from './SidebarMenu';
import Sales from './Sales';
import Populars from './Populars';
import PreLamp from './PreLamp';

const Lamp = React.lazy(() => import('./Lamp'));

const Main = () => {
  const [array, setArray] = useState([]);

  /*useEffect(() => {
    let data = [];
    if( array.length == 0 ) {
      axios
      .get('https://api.ledium.shop/feed')
      .then( response => {
        console.log(response.data.data.shop.offers.offers);
        console.log(data);
        setArray(response.data.data.shop.offers.offers);
      })
    }
  }, []);

  console.log(array);*/

  return (
    <main className="section">
      <section className="section__menu-h2 menu-mob">
        <h2>Наша продукция</h2>
        <a href="catalog">перейти в каталог<i>&gt;</i></a>
      </section>

        <Banner />
        <Partners />
        <React.Suspense fallback={<PreLamp/>}>
          <Lamp/>
        </React.Suspense>

      <div className="page-content">
        <div className="catalog catalog-main">
          <SidebarMenu />
          <Sales/>
          <Populars/>
        </div>
      </div>
    </main>
  );
};

export default Main;
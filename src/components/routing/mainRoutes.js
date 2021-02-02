import React from 'react'
import { Redirect } from 'react-router-dom'
import Main from '../Main'
import  Catalog  from '../Catalog';
import  Spotlights  from '../CatalogFilter/Spotlights.jsx';
import  Lampa  from '../CatalogFilter/Lampa.jsx';
import  Fixtures  from '../CatalogFilter/Fixtures.jsx';
import  Phitolamp  from '../CatalogFilter/Phitolamp.jsx';
import TableLamp from '../CatalogFilter/TableLamp';
import Product from '..//Product.jsx';
import PersonalInfo from '..//PersonalAccountPages/PersonalInfo.jsx';
import ViewedProducts from '..//PersonalAccountPages/ViewedProducts.jsx';
import Orders from '..//PersonalAccountPages/Orders';
import Testimonials from '..//PersonalAccountPages/Testimonials';

export const routes = [
  {
    path: '/catalog',
    component: Catalog,
    exact: true,
  },
  {
    path: '/',
    component: Main,
    exact: true,
  },
  {
    path: '/spotlights',
    component: Spotlights,
    exact: true,
  },
  {
    path: '/LEDlampa',
    component: Lampa,
    exact: true,
  },
  {
    path: '/fixtures',
    component: Fixtures,
    exact: true,
  },
  {
    path: '/phitolamp',
    component: Phitolamp,
    exact: true,
  },
  {
    path: '/tableLamp',
    component: TableLamp,
    exact: true,
  },
  {
    path: '/info',
    component: PersonalInfo,
    exact: true,
  },
  {
    path: '/viewed',
    component: ViewedProducts,
    exact: true,
  },
  {
    path: '/orders',
    component: Orders,
    exact: true,
  },
  {
    path: '/testimonials',
    component: Testimonials,
    exact: true,
  },
  {
    path: '/product',
    component: Product,
    exact: true,
  },
  {
    component: () => <Redirect to="/" />,
  },
]
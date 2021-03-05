import React from 'react'
import { Redirect } from 'react-router-dom'
import Main from '../Main'
import  Catalog  from '../Catalog';
import Product from '..//Product.jsx';
import PersonalInfo from '..//PersonalAccountPages/PersonalInfo.jsx';
import ViewedProducts from '..//PersonalAccountPages/ViewedProducts.jsx';
import Orders from '..//PersonalAccountPages/Orders';
import Testimonials from '..//PersonalAccountPages/Testimonials';
import CatalogMainPage from '../CatalogMainPage';

export const routes = [
  {
    path: '/catalog/category/:id',
    component: Catalog,
    render: ({match}) => {
      return <Catalog match={match}/>
    },
    exact: true,
  },
  {
    path: '/catalog',
    component: CatalogMainPage,
    exact: true,
  },
  {
    path: '/',
    component: Main,
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
    path: '/catalog/category/:id/product/:id',
    component: Product,
    render: ({match}) => {
      return <Product match={match}/>
    },
    exact: true,
  },
  {
    component: () => <Redirect to="/" />,
  },
]
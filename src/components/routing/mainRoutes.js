import React from 'react'
import { Redirect } from 'react-router-dom'
import Main from '../Main.jsx'
import  Category  from '../Category.jsx';
import Product from '..//Product.jsx';
import PersonalInfo from '..//PersonalAccountPages/PersonalInfo.jsx';
import ViewedProducts from '..//PersonalAccountPages/ViewedProducts.jsx';
import Orders from '..//PersonalAccountPages/Orders';
import Testimonials from '..//PersonalAccountPages/Testimonials';
import Catalog from '../Catalog.jsx';

export const routes = [
  {
    path: '/catalog/category/:id',
    component: Category,
    render: ({match}) => {
      return <Category match={match}/>
    },
    exact: true,
  },
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
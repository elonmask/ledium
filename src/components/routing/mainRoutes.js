import React from 'react'
import { Redirect } from 'react-router-dom'
import Main from '../Main'
import  Catalog  from '../Catalog';

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
    component: () => <Redirect to="/" />,
  },
]
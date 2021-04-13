import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import Header from './components/Header.jsx';
import Navigate from './components/routing/Navigate'
import Footer from './components/Footer.jsx';
import { routes } from './components/routing/mainRoutes'
import './public/style/style.css';

import store from './redux/store/store'


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Navigate {...{ routes }} />
        <Footer />
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;

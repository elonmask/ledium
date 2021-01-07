import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Navigate from './components/routing/Navigate'
import Footer from './components/Footer';
import { routes } from './components/routing/mainRoutes'
import './public/style/style.css';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navigate {...{ routes }} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

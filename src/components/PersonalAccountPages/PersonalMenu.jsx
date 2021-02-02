import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Exit from './Exit';
import ShoppingCart from './ShoppingCart';

const PersonalMenu = ({ setMenuIsOpen, menuIsOpen }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    setMenuIsOpen(false);
  }

  const openCart = () => {
    setShoppingCartOpen(true);
    setMenuIsOpen(false);
  }

  return (
    <>
      <div
        className={ 
        menuIsOpen 
          ? 'personal-menu-block personal-info-active'
          : 'personal-menu-block'
        }
      >
        <i 
          class="fas fa-times"
          onClick={()=>{setMenuIsOpen(false)}}
        ></i>
        <Link to="info">
          <div className="personal-info__user-section">
            <i class="far fa-user-circle"></i>
            <div>
              <h2>Пользователь</h2>
              <p>spacedev@gmail.com</p>
            </div>
          </div>
          </Link>
          <div className="personal-info__sections">
            <ul>
              <li className="personal-info__section">
                <i class="fas fa-shopping-cart"></i>
                <a 
                  onClick={()=>{openCart()}}
                  className="btn-after"
                >
                  Корзина
                </a>
              </li>
              <li className="personal-info__section">
                <i class="fas fa-history"></i>
                <a href="orders">Мои заказы</a>
              </li>
              <li className="personal-info__section">
                <i class="far fa-comment"></i>
                <a href="testimonials">Мои отзывы</a>
              </li>
              <li className="personal-info__section">
                <i class="far fa-eye"></i>
                <a href="viewed">Просмотрено</a>
              </li>
              <li className="personal-info__section">
                <i class="fas fa-sign-in-alt"></i>
                <button onClick={()=>{openModal()}}>Выход</button>
              </li>
            </ul>
          </div>
        </div>
        <Exit 
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
        <ShoppingCart 
          shoppingCartOpen={shoppingCartOpen}
          setShoppingCartOpen={setShoppingCartOpen}
        />
    </>
  )
}

export default PersonalMenu;

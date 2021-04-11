import React, { useState, useEffect } from 'react';
import Exit from './Exit';
import ShoppingCart from './ShoppingCart';

const PersonalMenu = ({ setPerMenuIsOpen, perMenuIsOpen }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);
  const [data, setData] = useState({});

  const userData = sessionStorage.getItem('currentUser');
  const localData = localStorage.getItem('currentUser');

  useEffect(() => {
    if(perMenuIsOpen == true) {
      if(userData !== null && userData !== undefined) {
        setData(JSON.parse(userData))
      } else if (localData !== null && localData !== undefined) {
        setData(JSON.parse(localData))
      }
    }
  }, [perMenuIsOpen]);

  const openModal = () => {
    setModalIsOpen(true);
    setPerMenuIsOpen(false);
  }

  const openCart = () => {
    setShoppingCartOpen(true);
    setPerMenuIsOpen(false);
  }

  

  return (
    <>
    {/*<div
      className={perMenuIsOpen 
      ? 'wrapper wrapper-active'
      : 'wrapper'
    }
    >
  <div className='menu-overlay' onClick={()=>{setPerMenuIsOpen(false)}}></div>*/}
    <div
        className={ 
        perMenuIsOpen 
          ? 'personal-menu-block personal-info-active'
          : 'personal-menu-block'
        }
      >
        <i 
          className="fas fa-times"
          onClick={()=>{setPerMenuIsOpen(false)}}
        ></i>
          <div className="personal-info__user-section">
            <i className="far fa-user-circle"></i>
            <div>
              <p>{data.first_name} {data.surname}</p>
              <p className="small-text">{data.email}</p>
            </div>
          </div>
          <div className="personal-info__sections">
            <ul>
              <li className="personal-info__section">
                <i className="fas fa-user-circle"></i>
                <a href="/info">Личные данные</a>
              </li>
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
                <i className="fas fa-history"></i>
                <a href="/orders">Мои заказы</a>
              </li>
              {/*<li className="personal-info__section">
                <i className="far fa-comment"></i>
                <a href="testimonials">Мои отзывы</a>
              </li>
              <li className="personal-info__section">
                <i className="far fa-eye"></i>
                <a href="viewed">Просмотрено</a>
              </li>*/}
              <li className="personal-info__section">
                <i className="fas fa-sign-in-alt"></i>
                <button onClick={()=>{openModal()}}>Выход</button>
              </li>
            </ul>
          </div>
        </div>
    {/*</div>*/}
      
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

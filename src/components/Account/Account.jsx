import React, {useState} from 'react';

import './account.css'
import Registration from './Registration';
import ChangePassword from './ChangePassword'

const Account = ({ setMenuIsOpen, menuIsOpen }) => {

  const [regPopUp, setRegPopUp] = useState(false);
  const [changePassword, setChangePassword] = useState(false)

  const closeAccount = () => {
    setMenuIsOpen(false);
  }

  const openRegPopUp = () => {
    setRegPopUp(true);
    setMenuIsOpen(false);
  }

  const setPassword = () => {
    setChangePassword(true)
    setMenuIsOpen(false);
  }

  return (
    <>
    <div className={ menuIsOpen ? 'account-modal' : 'account__disable'}>
    <div className="modal-overlay"></div>
      <div className="account">
        <i 
          className="fas fa-times account-close"
          onClick={()=>{closeAccount()}}
        ></i>
        <h2 className="account__title">Вход</h2>
          <form className="account__content">
              <label  className="label-content" htmlFor="email">Эл. почта</label>
              <input 
                id="email"
                name="email"
                className="account__form"
                required
                type="email"
              />
              <label className="label-content" htmlFor="password">Пароль</label>
              <input 
                id="password"
                name="password"
                className="account__form"
                required
                type="password"
              />
            <div className="account__more-info">
              <div>
                <input 
                  id="remember-user"
                  type="checkbox"
                />
                <label className="account__checkbox" htmlFor="remember-user">Запомнить меня</label>
              </div>
              <a 
                className="account__link"
                onClick={()=>{setPassword()}}
              >
                Забыли пароль
              </a>
            </div>
            <button className="account__btn" type="submit">Войти</button>
            <a 
              className="account__link"
              onClick={()=>{openRegPopUp()}}
            >
              Зарегистрироваться
            </a>
          </form>
      </div>
    </div>
    <Registration 
      regPopUp={regPopUp}
      setRegPopUp={setRegPopUp}
      setMenuIsOpen={setMenuIsOpen}
    />
    <ChangePassword 
      changePassword={changePassword}
      setChangePassword={setChangePassword}
    />
    </>
  )
}

export default Account;

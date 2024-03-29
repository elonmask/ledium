import React, {useEffect} from 'react';

import './account.css'

const ChangePassword = ({ changePassword, setChangePassword }) => {

  const closeChangePassword = () => {
    setChangePassword(false);
  }

  console.log(changePassword)

  return (
    <>
    <div className={ changePassword ? 'account-modal' : 'account__disable'}>
    <div className="modal-overlay" onClick={() => closeChangePassword()}></div>
      <div className="account">
        <i 
          className="fas fa-times account-close"
          onClick={()=>{closeChangePassword()}}
        ></i>
        <h2 className="account__title">Забыли пароль</h2>
          <form className="account__content">
              <label  className="label-content">Эл. почта</label>
              <input 
                name="email"
                className="account__form"
                required
                type="email"
              />
            <button className="account__btn" type="submit">Отправить новый пароль</button>
          </form>
      </div>
    </div>
    </>
  )
}

export default ChangePassword;

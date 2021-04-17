import React, {useState} from 'react';
import axios from 'axios';
import './account.css'
import Registration from './Registration';
import ChangePassword from './ChangePassword'

const Account = ({ setMenuIsOpen, menuIsOpen }) => {

  const [regPopUp, setRegPopUp] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [emailUser, setEmailUser] = useState('');
  const [passwordUser, setPasswordUser] = useState('');
  const [error, setError] = useState('');
  const [local, setLocal] = useState(false);

  const userData = sessionStorage.getItem('currentUser');
  const localData = localStorage.getItem('currentUser');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const user = {
      email: emailUser,
      password: passwordUser,
    };

    axios
      .post(`https://api.ledium.shop/user/login/`, user )
        .then(response => {
          console.log(response);
          if(response.data.status == false) {
            setError('Неправильная почта или пароль');
          } else if (response.data.status == true) {
            console.log(response);
            if(local == true) {
              localStorage.setItem('currentUser', JSON.stringify(response.data.userData) );
              closeAccount();
            } else {
              sessionStorage.setItem('currentUser', JSON.stringify(response.data.userData) );
              closeAccount();
            }
          } else {
            alert('Попробуйте позже');
          }
        });
  };

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

  const handleChange = (e) => {
    const checked = e;
    console.log(checked);
    if(checked == true) {
      setLocal(true);
    }
  }

  return (
    <>
    <div className={ menuIsOpen ? 'account-modal' : 'account__disable'}>
    <div className="modal-overlay" onClick={() => closeAccount()}></div>
      <div className="account">
        <i 
          className="fas fa-times account-close"
          onClick={()=>{closeAccount()}}
        ></i>
        <h2 className="account__title">Вход</h2>
          <form 
            className="account__content" 
            onSubmit={handleSubmit}
            action='https://api.ledium.shop/user/login/'
          >
              <label  className="label-content">Эл. почта</label>
              <input 
                name="email"
                className={ error ? 'account__form account__form-error' : 'account__form'}
                required
                type="email"
                value={emailUser}
                onChange={event => setEmailUser(event.target.value.trim())}
              />
              <label className="label-content">Пароль</label>
              <input 
                name="password"
                className={ error ? 'account__form account__form-error' : 'account__form'}
                required
                type="password"
                value={passwordUser}
                onChange={event => setPasswordUser(event.target.value.trim())}
              />
            <div className="account__more-info">
              <div>
                <input 
                  type="checkbox"
                  name="checkbox"
                  onChange={event => handleChange(event.target.checked)}
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
            <p className="error">{error}</p>
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

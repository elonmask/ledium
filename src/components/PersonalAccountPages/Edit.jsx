import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Edit = ({ type, edit, setEdit, data, setData }) => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [lastName, setLastName] = useState('');

  const userData = sessionStorage.getItem('currentUser');

  const closeEdit = () => {
    setEdit(false);
  }

  const changeData = (property, info) => {
    let obj = {...data};
  
    if(obj.hasOwnProperty(property)) {
      switch(property) {
        case 'first_name' :
          obj.first_name = info;
          sessionStorage.setItem('currentUser', JSON.stringify(obj));
          setData(obj);
        case 'last_name' :
          obj.last_name = info;
          sessionStorage.setItem('currentUser', JSON.stringify(obj));
          setData(obj);
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(data.first_name !== name) {
      axios
      .post(`https://api.ledium.shop/user/change_user/`, { 
        param: 'first_name',
        old: data.first_name,
        change: name
      })
        .then(response => {
          console.log(response);
          changeData('first_name', name);
      });
    }
    if(data.last_name !== lastName) {
      axios
      .post(`https://api.ledium.shop/user/change_user/`, { 
        param: 'last_name',
        old: data.last_name,
        change: lastName
      })
        .then(response => {
          console.log(response);
          changeData('last_name', lastName);
      });
    }

    if ( name && lastName && surname ) {
      setName('');
      setLastName('');
      setSurname('');
    }
  }; 


    switch(type) {
      case 'change-name':
        return (
          <>
            <div className={ edit ? 'edit-modal' : 'account__disable'}>
              <div className="modal-overlay"></div>
              <div className="account">
                <i 
                  className="fas fa-times account-close"
                  onClick={()=>{closeEdit()}}
                ></i>
                <h2 className="account__title">Личный данные</h2>
                <form 
                  className="account__content"
                  onSubmit={handleSubmit}
                >
                    <label  className="surname-edit" htmlFor="email">Фамилия:</label>
                    <input 
                      id="surname-edit"
                      className="account__form"
                      required
                      type="text"
                      value={surname}
                      onChange={event => setSurname(event.target.value.trim())}
                    />
                    <label  className="first-name-edit" htmlFor="email">Имя:</label>
                    <input 
                      id="first-name-edit"
                      className="account__form"
                      required
                      type="text"
                      value={name}
                      onChange={event => setName(event.target.value.trim())}
                    />
                    <label  className="last-name-edit" htmlFor="email">Отчество:</label>
                    <input 
                      id="last-name-edit"
                      className="account__form"
                      required
                      type="text"
                      value={lastName}
                      onChange={event => setLastName(event.target.value.trim())}
                    />
                  <button className="account__btn" type="submit">Сохранить</button>
                  <a 
                    className="account__link"
                    onClick={()=>{closeEdit()}}
                  >
                    Отмена
                  </a>
                </form>
              </div>
            </div>
          </>
        );

      case 'change-email':
        return (
          <>
            <div className={ edit ? 'edit-modal' : 'account__disable'}>
              <div className="modal-overlay"></div>
              <div className="account">
                <i 
                  className="fas fa-times account-close"
                  onClick={()=>{closeEdit()}}
                ></i>
                <h2 className="account__title">Контакты</h2>
                <form 
                  className="account__content"
                >
                  <label  className="label-content" htmlFor="phone-edit">Подтвержденный телефон:</label>
                  <input 
                    id="phone-edit"
                    className="account__form"
                    required
                    type="number"
                    //value={emailUser}
                    //onChange={event => setEmailUser(event.target.value.trim())}
                  />
                  <label  className="label-content" htmlFor="email-edit">Электронная почта:</label>
                  <input 
                    id="email-edit"
                    className="account__form"
                    required
                    type="email"
                    //value={emailUser}
                    //onChange={event => setEmailUser(event.target.value.trim())}
                  />
                  <button className="account__btn" type="submit">Сохранить</button>
                  <a 
                    className="account__link"
                    onClick={()=>{closeEdit()}}
                  >
                    Отмена
                  </a>
                </form>
              </div>
            </div>
          </>
        );

      case 'change-adres':
        return (
          <>
            <div className={ edit ? 'edit-modal' : 'account__disable'}>
              <div className="modal-overlay"></div>
              <div className="account">
                <i 
                  className="fas fa-times account-close"
                  onClick={()=>{closeEdit()}}
                ></i>
                <h2 className="account__title">Адрес доставки:</h2>
                <form 
                  className="account__content"
                >
                  <input 
                    className="account__form"
                    required
                    type="text"
                    //value={emailUser}
                    //onChange={event => setEmailUser(event.target.value.trim())}
                  />
                  <button className="account__btn" type="submit">Сохранить</button>
                  <a 
                    className="account__link"
                    onClick={()=>{closeEdit()}}
                  >
                    Отмена
                  </a>
                </form>
              </div>
            </div>
          </>
        );

      case 'change-login':
        return (
          <>
            <div className={ edit ? 'edit-modal' : 'account__disable'}>
              <div className="modal-overlay"></div>
              <div className="account">
                <i 
                  className="fas fa-times account-close"
                  onClick={()=>{closeEdit()}}
                ></i>
                <h2 className="account__title">Логин</h2>
                <form 
                  className="account__content"
                >
                  <label  className="label-content" htmlFor="login-edit">Логин(пароль):</label>
                  <input 
                    id="login-edit"
                    className="account__form"
                    required
                    type="password"
                    //value={emailUser}
                    //onChange={event => setEmailUser(event.target.value.trim())}
                  />
                  <label className="label-content" htmlFor="login-email-edit">Логин (электронная почта):</label>
                  <input 
                    id="login-email-edit"
                    className="account__form"
                    required
                    type="password"
                    //value={passwordUser}
                    //onChange={event => setPasswordUser(event.target.value.trim())}
                  />
                  <button className="account__btn" type="submit">Сохранить</button>
                  <a 
                    className="account__link"
                    onClick={()=>{closeEdit()}}
                  >
                    Отмена
                  </a>
                </form>
              </div>
            </div>
          </>
        );
      default: 
        return (
          <div></div>
        )
    }

}

export default Edit;

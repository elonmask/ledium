import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
const Edit = ({ type, edit, setEdit, data, setData }) => {

  const [user, setUser] = useState({});
  const [adress, setAdress] = useState('');
  const [validatePass, setValidatePass] = useState(true);

  const userData = sessionStorage.getItem('currentUser');
  const localData = localStorage.getItem('currentUser');

  useEffect(() => {
    if(userData !== null && userData !== undefined) {
      setUser(JSON.parse(userData))
    } else if (localData !== null && localData !== undefined) {
      setUser(JSON.parse(localData))
    }
  }, []);

  const changeUser = (name, info) => {
    let obj = {...user}
    switch(name) {
      case 'name':
        obj.first_name = info;
        setUser({...obj});
        break
      case 'lastname':
        obj.last_name = info;
        setUser({...obj});
        break
      case 'surname':
        obj.surname = info;
        setUser({...obj});
        break
      case 'number':
        obj.number = info;
        setUser({...obj});
        break
      case 'email':
        obj.email = info;
        setUser({...obj});
        break
      case 'password':
        obj.password = info;
        setUser({...obj});
        break
    }
  }

  const validate = (str) => {
    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,32}$/;
    const test = reg.test(user.password);
    if (test) {
        console.log('pass');
        setValidatePass(true)
    } else{
        console.log('fail');
        setValidatePass(false)
    }
  }

  const closeEdit = () => {
    setEdit(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (  user.first_name !== data.first_name ||
          user.last_name !== data.last_name ||
          user.surname !== data.surname
    ) {
      axios
      .post(`https://api.ledium.shop/user/change_user/`, { 
        param: 'first_name',
        old: data.first_name,
        change: user.first_name
      })
        .then(response => {
          console.log(response);
          let obj = {...data};
          obj.first_name = user.first_name;
          sessionStorage.setItem('currentUser', JSON.stringify(obj));
          setData({...obj});

          axios
            .post(`https://api.ledium.shop/user/change_user/`, { 
              param: 'last_name',
              old: data.last_name,
              change: user.last_name
            })
              .then(response => {
                console.log(response);
                obj.last_name = user.last_name;
                sessionStorage.setItem('currentUser', JSON.stringify(obj));
                setData({...obj});
                

                axios
                  .post(`https://api.ledium.shop/user/change_user/`, { 
                  param: 'surname',
                  old: data.surname,
                  change: user.surname
                })
                  .then(response => {
                    console.log(response);
                    obj.surname = user.surname;
                    sessionStorage.setItem('currentUser', JSON.stringify(obj));
                    setData({...obj});
                });
                });
          });
    }
  }; 
  
  const handleSubmitContact = (event) => {
    event.preventDefault();

    if (  user.number !== data.number ||
      user.email !== data.email
    ) {
      axios
      .post(`https://api.ledium.shop/user/change_user/`, { 
        param: 'number',
        old: data.number,
        change: user.number
      })
        .then(response => {
          console.log(response);
          let obj = {...data};
          obj.number = user.number;
          sessionStorage.setItem('currentUser', JSON.stringify(obj));
          setData({...obj});

          axios
          .post(`https://api.ledium.shop/user/change_user/`, { 
            param: 'email',
            old: data.email,
            change: user.email,
            password: data.password
          })
            .then(response => {
              console.log(response);
              obj.email = user.email;
              sessionStorage.setItem('currentUser', JSON.stringify(obj));
              setData({...obj});
              })
          });
        }
  }; 

  const handleSubmitAdress= (event) => {
    event.preventDefault();

      axios
      .post(`https://api.ledium.shop/user/set_address/`, { 
        address: adress,
      })
        .then(response => {
          console.log(response);
          let obj = {...data};
          obj.address = adress;
          sessionStorage.setItem('currentUser', JSON.stringify(obj));
          setData({...obj});
        });
  }; 

  const handleSubmitPassword = (event) => {
    event.preventDefault();

    if (  user.password !== data.password ) {
      axios
      .post(`https://api.ledium.shop/user/change_user/`, { 
        param: 'password',
        old: data.password,
        change: user.password,
        email: data.email
      })
        .then(response => {
          console.log(response);
          let obj = {...data};
          obj.password = user.password;
          sessionStorage.setItem('currentUser', JSON.stringify(obj));
          setData({...obj});
        });
      }
  };

    switch(type) {
      case 'change-name':
        return (
          <>
            <div className={ edit ? 'edit-modal' : 'account__disable'}>
              <div className="modal-overlay" onClick={() => closeEdit()}></div>
              <div className="account">
                <i 
                  className="fas fa-times account-close"
                  onClick={()=>{closeEdit()}}
                ></i>
                <h2 className="account__title">Особисті дані</h2>
                <form 
                  className="account__content"
                  onSubmit={handleSubmit}
                >
                    <label  className="surname-edit" htmlFor="email">Прізвище:</label>
                    <input 
                      id="surname-edit"
                      className="account__form"
                      required
                      type="text"
                      value={user.surname}
                      onChange={event => changeUser('surname', event.target.value)}
                    />
                    <label  className="first-name-edit" htmlFor="email">Ім'я:</label>
                    <input 
                      id="first-name-edit"
                      className="account__form"
                      required
                      type="text"
                      value={user.first_name}
                      onChange={event => changeUser('name', event.target.value)}
                    />
                    <label  className="last-name-edit" htmlFor="email">По батькові:</label>
                    <input 
                      id="last-name-edit"
                      className="account__form"
                      required
                      type="text"
                      value={user.last_name}
                      onChange={event => changeUser('lastname', event.target.value)}
                    />
                  <button className="account__btn" type="submit" onClick={()=>{closeEdit()}}>Сохранить</button>
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
                <h2 className="account__title">Контакти</h2>
                <form 
                  className="account__content"
                  onSubmit={handleSubmitContact}
                >
                  <label  className="label-content" htmlFor="phone-edit">Телефон:</label>
                  <InputMask
                    type='tel'
                    id="phone-edit"
                    className="account__form"
                    mask="+38 (999) 999 99 99" 
                    required
                    value={user.number}
                    onChange={event => changeUser('number', event.target.value)}
                  />
                  <label  className="label-content" htmlFor="email-edit">E-Mail:</label>
                  <input 
                    id="email-edit"
                    className="account__form"
                    required
                    type="email"
                    value={user.email}
                    onChange={event => changeUser('email', event.target.value)}
                  />
                  <button className="account__btn" type="submit" onClick={()=>{closeEdit()}}>Сохранить</button>
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
                  onSubmit={handleSubmitAdress}
                >
                  <input
                    className="account__form"
                    required
                    value={adress}
                    onChange={event => setAdress(event.target.value)}
                  />
                  <button className="account__btn" type="submit" onClick={()=>{closeEdit()}}>Сохранить</button>
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
                  onSubmit={handleSubmitPassword}
                >
                  <label  className="label-content" htmlFor="login-edit">Сменить пароль:</label>
                  <input 
                    id="login-edit"
                    className={validatePass ? "account__form-pass" : "account__form-pass disable"}
                    required
                    type="password"
                    value={user.password}
                    onChange={event => validate(changeUser('password', event.target.value))}
                  />
                  <p className="account__text">
                    Пароль должен быть не менее 6 символов, содержать цифры и латинские буквы, в том числе заглавные, и не должен совпадать с именем и эл. почтой
                  </p>
                  <button className="account__btn" type="submit" onClick={()=>{closeEdit()}}>Сохранить</button>
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

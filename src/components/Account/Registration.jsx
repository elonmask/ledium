import React, {useState} from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import InputMask from 'react-input-mask';

import './account.css'

const Registration = ({ regPopUp, setRegPopUp, setMenuIsOpen }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [validatePass, setValidatePass] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = { 
      first_name: firstName,
      last_name: lastName,
      surname: surname,
      number: number,
      email: email,
      password: password,
    };

    //const userEmail = {
     // email: email,
    //}

    axios
      .post(`https://api.ledium.shop/user/email_exist/`, { "email": email })
        .then(response => {
          console.log(response);
          if(response.data.status == true) {
            alert('Пользователь с такой почтой уже существует')
          } else if (response.data.status == false) {
            axios.post('https://api.ledium.shop/adduser', data)
              .then(response => {
                console.log(response);
                openAccount();
            });
          } else {
            alert('Попробуйте позже');
          }
        });
    
    //axios.post('https://api.ledium.shop/adduser', data)
     //.then(response => console.log(response));

    if (firstName && lastName && surname && number && email && password) {
  
      setFirstName('');
      setLastName('');
      setSurname('');
      setNumber('');
      setEmail('');
      setPassword('');
    }
  };

  const closeRegPopUp = () => {
    setRegPopUp(false);
  }

  const openAccount = () => {
    setMenuIsOpen(true);
    setRegPopUp(false);
  }

  const validate = (str) => {
    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    const test = reg.test(password);
    if (test) {
        console.log('pass');
        setValidatePass(true)
    } else{
        console.log('fail');
        setValidatePass(false)
    }
  }

  return (
    <>
    <div className={ regPopUp ? 'account-modal' : 'account__disable'}>
      <div className="modal-overlay"></div>
      <div className="account">
        <i 
          className="fas fa-times account-close"
          onClick={()=>{closeRegPopUp()}}
        ></i>
        <h2 className="account__title">Регистрация</h2>
          <form className="account__content" onSubmit={handleSubmit}>
              <label  className="label-content" htmlFor="name">Имя</label>
              <input 
                id="name"
                name="name"
                className="account__form"
                required
                type="text"
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
              />
              <label className="label-content" htmlFor="surname">Фамилия</label>
              <input 
                id="surname"
                name="surname"
                className="account__form"
                required
                type="text"
                value={surname}
                onChange={event => setSurname(event.target.value)}
              />
              <label className="label-content" htmlFor="second-name">Отчество</label>
              <input 
                id="second-name"
                name="second-name"
                className="account__form"
                required
                type="text"
                value={lastName}
                onChange={event => setLastName(event.target.value)}
              />
              <label className="label-content" htmlFor="telephone">Номер телефона</label>
              <InputMask
                type='tel'
                id="telephone"
                name="telephone"
                className="account__form"
                mask="+38 (999) 999 99 99" 
                required
                value={number}
                onChange={event => setNumber(event.target.value)}
              />
              <label  className="label-content" htmlFor="email">Эл. почта</label>
              <input 
                id="email-reg"
                name="email"
                className="account__form"
                required
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <label className="label-content" htmlFor="password">Придумайте пароль</label>
              <input 
                id="password-reg"
                name="password"
                className={validatePass ? "account__form" : "account__form disable"}
                required
                type="password"
                value={password}
                onChange={event => 
                  validate(setPassword(event.target.value))
                }
              />
              <p className="account__text">
                Пароль должен быть не менее 6 символов, содержать цифры и латинские буквы, в том числе заглавные, и не должен совпадать с именем и эл. почтой
              </p>
              <p className="account__text">
                <br/>Регистрируясь, вы соглашаетесь с  
                <a className="account__link"> пользовательским соглашением</a>
              </p>
            <button 
              className="account__btn" type="submit"
              disabled={ !validatePass }
            >
              Зарегистрироваться
            </button>
            <a 
              className="account__link"
              onClick={() => openAccount()}
            >
              Я уже зарегистрирован
            </a>
          </form>
      </div>
    </div>
    </>
  )
}

export default Registration;

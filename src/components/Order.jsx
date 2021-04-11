import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import crypto from 'crypto';
import Account from '../components/Account/Account';
import categoriesEng from '../public/categories.json';

import '../public/style/order.css'

const Order = ({ makeOrder, setOrder, product, setMenuIsOpen, menuIsOpen }) => {
  const [amount, setAmount] = useState('');
  const [user, setUser] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [validatePass, setValidatePass] = useState(null);
  const [error, setError] = useState('');
  const history = useHistory();

  const userData = sessionStorage.getItem('currentUser');
  const localData = localStorage.getItem('currentUser');

  const openProductPage = (product) => {
    categoriesEng.map(n => {
      if ( n.id === product.categoryId ) {
        setOrder(false);
        history.push(`/catalog/category/${n.name}/product/${product.id}`);
      }
    })
  }

  const validate = (str) => {
    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,32}$/;
    const test = reg.test(password);
    if (test) {
        console.log('pass');
        setValidatePass(true)
    } else{
        console.log('fail');
        setValidatePass(false)
    }
  }

  const sum = (n) => {
      if ( !n.count ) {
        return n.price;
      } else {
        let price = +n.price; 
        return `${price*n.count}`;
      }
  }

  const fullPrice = () => {
    let total = 0;
    product.map(n => {
      total += +n.price*n.count;
    });
    return `${total}`
  }

  const closeOrder = () => {
    setOrder(false);
  };

  const openAccount = () => {
    setOrder(false);
    setMenuIsOpen(true);
  }

  useEffect(() => {
    let total = 0;
    product.map(n => {
      total += +n.price*n.count;
    });
    let sum = total + 59;
    setAmount(`${sum}`)
  })

  useEffect(() => {
    if(makeOrder == true) {
      if(userData !== null && userData !== undefined) {
        setUser(JSON.parse(userData))
      } else if (localData !== null && localData !== undefined) {
        setUser(JSON.parse(localData))
      }
    }
  }, [makeOrder])

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

  const addOrder = () => {
    if ( user.hasOwnProperty('email') ) {
      const date = new Date();
      const userID = crypto.createHash('sha256').update(email + '' + password).digest('base64');
      axios.post('https://api.ledium.shop/user/addorder/', [ userID, product, amount, date ] )
        .then(response => {
          console.log(response);
          alert('Ваш заказ принят');
        })
    } else {
      const data = { 
        first_name: firstName,
        last_name: lastName,
        surname: surname,
        number: number,
        email: email,
        password: password,
      };
  
      axios
        .post(`https://api.ledium.shop/user/email_exist/`, { "email": email })
          .then(response => {
            console.log(response);
            if(response.data.status == true) {
              setError('Пользователь с такой почтой уже существует. Пожалуйста войдите в личный кабинет');
              console.log(error);
            } else if (response.data.status == false) {
              axios.post('https://api.ledium.shop/adduser', data)
                .then(response => {
                  console.log(response);
                  const date = new Date();
                  const userID = crypto.createHash('sha256').update(email + '' + password).digest('base64');
                  axios.post('https://api.ledium.shop/user/addorder/', [ userID, product, amount, date ] )
                    .then(response => {
                      console.log(response);
                      alert('Ваш заказ принят');
                    })
              });
            } else {
              alert('Попробуйте позже');
            }
          });
    }
  }

  return (
    <>
    <div className={ makeOrder ? 'account-modal' : 'account__disable'}>
    <div className="modal-overlay" onClick={() => closeOrder()}></div>
      <div className="account">
      
        <i 
          className="fas fa-times account-close"
          onClick={()=>{closeOrder()}}
        ></i>
        <h2 className="account__title">Оформление заказа</h2>
          { user.hasOwnProperty('email') ? (
            <div className="order__content-block">
              <form className="order__content-block">
            <div className="order-units">
              <div>!</div>
              <p>Ваши контактные данные</p>
            </div>
          <div className="order-per-info-block">
            <div className="order-per-info">
              <div className="order-inputs">
              <label  className="label-order" htmlFor="order-surname">
                Фамилия
              </label>
              <input 
                id="order-surname"
                name="order-surname"
                className="account__form order__form"
                required
                type="text"
                value={user.surname}
                onChange={event => changeUser('surname', event.target.value)}
              />
              </div>
              <div className="order-inputs">
              <label className="label-order" htmlFor="order-name">
                Имя
              </label>
              <input 
                id="order-name"
                name="order-name"
                className="account__form order__form"
                required
                type="text"
                value={user.first_name}
                onChange={event => changeUser('name', event.target.value)}
              />
              </div>
            </div>

            <div className="order-per-info">
              <div className="order-inputs">
              <label className="label-order" htmlFor="order-email">
                Почта
              </label>
              <input 
                id="order-email"
                name="order-email"
                className="account__form order__form"
                required
                type="email"
                value={user.email}
                onChange={event => changeUser('email', event.target.value)}
              />
              </div>
            </div>

            <div className="order-per-info">
              <div className="order-inputs">
              <label  className="label-order" htmlFor="order-tel">
                Мобильный телефон
              </label>
              <InputMask
                id="order-tel"
                name="order-tel"
                className="account__form order__form"
                mask="+38 (999) 999 99 99" 
                required
                value={user.number}
                onChange={event => changeUser('number', event.target.value)}
                type="tel"
              />
              </div>
              <div className="order-inputs">
              <label className="label-order" htmlFor="order-city">
                Адрес
              </label>
              <input 
                id="order-city"
                name="order-city"
                className="account__form order__form"
                required
                type="text"
              />
              </div>
            </div>
          </div>
          </form>
          </div>
          ) : (
            <form className="order__content-block">
              <div className="order-units">
                <div>!</div>
                <p>Ваши контактные данные</p>
              </div>
              <p className="enter-title"><a 
                  className="enter"
                  onClick={() => openAccount()}
                >
                  Войти
                </a>
              </p>
              <p className="error">{error}</p>
            <div className="order-per-info-block">
              <div className="order-per-info">
                <div className="order-inputs">
                <label  className="label-order" htmlFor="order-surname">
                  Фамилия
                </label>
                <input 
                  id="order-surname"
                  name="order-surname"
                  className="account__form order__form"
                  required
                  type="text"
                  value={surname}
                  onChange={event => setSurname(event.target.value)}
                />
                </div>
                <div className="order-inputs">
                <label className="label-order" htmlFor="order-name">
                  Имя
                </label>
                <input 
                  id="order-name"
                  name="order-name"
                  className="account__form order__form"
                  required
                  type="text"
                  value={firstName}
                  onChange={event => setFirstName(event.target.value)}
                />
                </div>
              </div>

              <div className="order-per-info">
                <div className="order-inputs">
                <label  className="label-order" htmlFor="order-tel">
                  Мобильный телефон
                </label>
                <InputMask
                  id="order-tel"
                  name="order-tel"
                  className="account__form order__form"
                  mask="+38 (999) 999 99 99" 
                  required
                  type="tel"
                  value={number}
                  onChange={event => setNumber(event.target.value)}
                />
                </div>
                <div className="order-inputs">
                <label className="label-order" htmlFor="order-city">
                  Адрес
                </label>
                <input 
                  id="order-city"
                  name="order-city"
                  className="account__form order__form"
                  required
                  type="text"
                />
                </div>
              </div>

              <div className="order-per-info">
                <div className="order-inputs">
                <label  className="label-order" htmlFor="order-email">
                  Почта
                </label>
                <input
                  id="order-email"
                  name="order-email"
                  className="account__form order__form"
                  required
                  type="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
                </div>
                <div className="order-inputs">
                <label className="label-order" htmlFor="order-pass">
                  Придумайте пароль
                </label>
                <input 
                  id="order-pass"
                  name="order-pass"
                  className={validatePass !== false ? "account__form-pass" : "account__form-pass disable"}
                  required
                  type="password"
                  value={password}
                  onChange={event => validate(setPassword(event.target.value))}
                />
                </div>
              </div>
            </div>
          </form>
          )}
          
          <div className="order__title">
              <h1>Заказ</h1>
              <p>на сумму {fullPrice()} грн</p>
            </div>
            <div className="order-info">
              <div className="order-units">
                <div>1</div>
                <p>Товары</p>
              </div>
              {product.map(n => (
                <>
                  <div className="order-product">
                <img 
                  alt=""
                  src={n.picture}
                  className="order-product-img"
                />
                <a 
                  className="order-product-title"
                  onClick={() =>openProductPage(n)}
                >
                  {n.name}
                </a>
                <div className="order-product-blocks">
                  <div className="order-product-block-info">
                    <p className="order-product-text">Цена</p>
                    <p className="order-product-price">{n.price} грн</p>
                  </div>
                  <div className="order-product-block-info">
                    <p className="order-product-text">Количество</p>
                    <p className="order-product-price">{n.count}</p>
                  </div>
                  <div className="order-product-block-info">
                    <p className="order-product-text">Сумма</p>
                    <p className="order-product-price">{sum(n)} грн</p>
                  </div>
                </div>
                </div>
                </>
              ))}
                
            </div>
            <div className="order-adress">
              <div className="order-units">
                <div>2</div>
                <p>Доставка</p>
              </div>
              <div className="order-delivery">
                <input 
                  type="radio"
                  id="delivery"
                  name="delivery"
                  className="order-radio"
                />
                <div>
                  <label className="order-delivery-label" htmlFor="delivery">Курьер по вашему адресу</label>
                  <span>59 грн</span>
                </div>
              </div>
            </div>

            <div className="order-adress">
              <div className="order-units">
                <div>3</div>
                <p>Оплата</p>
              </div>
              <div className="order-delivery">
                <input 
                  type="radio"
                  id="pay"
                  name="delivery"
                  className="order-radio"
                />
                <div>
                  <label className="order-delivery-label" htmlFor="pay">Оплата при получении товара</label>
                </div>
              </div>
              <div className="order-delivery">
                <input 
                  type="radio"
                  id="card"
                  name="delivery"
                  className="order-radio"
                />
                <div>
                  <label className="order-delivery-label" htmlFor="card">Картой онлайн</label>
                </div>
              </div>
            </div>

            <div className="order-adress">
              <div className="order-units">
                <div>4</div>
                <p>Итого</p>
              </div>
                <div className="order-total-block">
                  <p className="order-total-text">Всего</p>
                  <p className="order-price">{fullPrice()}</p>
                </div>
                <div className="order-total-block">
                  <p className="order-total-text">стоимость доставки</p>
                  <p className="order-price">59 грн</p>
                </div>
              <div className="order-total">
                <div className="order-total-block">
                  <p className="order-total-text">Итого</p>
                  <p className="order-total-price">{amount} грн</p>
                </div>
              </div>
              <div>
                <button 
                  className="order-total-btn"
                  type='button'
                  onClick={() => addOrder()}
                >
                  Заказ подтверждаю
                </button>
                <p className="order-total-rules">Подтверждая заказ, я принимаю условия пользовательского соглашения</p>
              </div>
            </div>
            
          </div>
      </div>
      <Account
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
      />
    </>
  )
}

export default Order;

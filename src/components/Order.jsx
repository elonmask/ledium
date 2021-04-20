import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import crypto from 'crypto';
import Account from '../components/Account/Account';
import Delivery from './Delivery';
import Pay from './Pay';
import OrderProducts from './OrderProducts';
import OrderAccept from './OrderAccept'
import LiqPayPopUp from './LiqPayPopUp';

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
  const [delivery, setDelivery] = useState(2);
  const [pay, setPay] = useState('cash');
  const [city, setCity] = useState('')
  const [adress, setAdress] = useState('');
  const [poshtaAdress, setPoshtaAdress] = useState('')
  const [orderAccept, setOrderAccept] = useState(false)
  const [orderID, setOrderID] = useState('');
  const [openLiqPay, setOpenLiqPay] = useState(false)

  const userData = sessionStorage.getItem('currentUser');
  const localData = localStorage.getItem('currentUser');

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
      total += parseInt(n.price.replace(" ₴", "")) * n.count;
    });
    let sum = total;
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
        console.log(user)
        const userID = crypto.createHash('sha256').update(user.email + '' + user.password).digest('base64').replace(/\+/g, "").replace(/\=/g, "").replace(/\-/g, "");
        axios.post('https://api.ledium.shop/user/addorder/', 
        delivery == 1 ? 
        { 
          userID: userID, 
          goods: product, 
          total: amount, 
          date: new Date(), 
          addr: city+' '+adress, 
          pay: pay 
        } : { 
          userID: userID, 
          goods: product, 
          total: amount, 
          date: new Date(), 
          addr: city+' '+poshtaAdress, 
          pay: pay 
        }
        )
          .then(response => {
            if ( pay == 'cart' ) {
              console.log(response.data);
              setOrderID(response.data.ID);
              setOrder(false);
              setOpenLiqPay(true);
            } else {
            console.log(response.data);
            setOrderID(response.data.ID);
            setOrder(false);
            setOrderAccept(true);
            sessionStorage.removeItem('goods')
            }
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
                    const userID = crypto.createHash('sha256').update(email + '' + password).digest('base64').replace(/\+/g, "").replace(/\=/g, "").replace(/\-/g, "");
                    axios.post('https://api.ledium.shop/user/addorder/', 
                      delivery == 1 ? 
                        { 
                          userID: userID, 
                          goods: product, 
                          total: amount, 
                          date: new Date(), 
                          addr: city+' '+adress, 
                          pay: pay 
                        } : { 
                          userID: userID, 
                          goods: product, 
                          total: amount, 
                          date: new Date(), 
                          addr: city+' '+poshtaAdress, 
                          pay: pay 
                        }
                    )
                      .then(response => {
                        if ( pay == 'cart' ) {
                          setOrderID(response.data.ID);
                          setOrder(false);
                          setOpenLiqPay(true);
                        } else {
                        console.log(response.data);
                        setOrderID(response.data.ID)
                        setOrder(false);
                        setOrderAccept(true);
                        sessionStorage.removeItem('goods')
                        }
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
        <h2 className="account__title">Замовлення</h2>
          { user.hasOwnProperty('email') ? (
            <div className="order__content-block">
              <form className="order__content-block">
            <div className="order-units">
              <div>!</div>
              <p>Ваші контактні дані</p>
            </div>
          <div className="order-per-info-block">
            <div className="order-per-info">
              <div className="order-inputs">
              <label  className="label-order">
                Прізвище
              </label>
              <input 
                name="order-surname"
                className="account__form order__form"
                required
                type="text"
                value={user.surname}
                onChange={event => changeUser('surname', event.target.value)}
              />
              </div>
              <div className="order-inputs">
              <label className="label-order">
                Ім'я
              </label>
              <input 
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
              <label className="label-order">
                E-mail
              </label>
              <input 
                name="order-email"
                className="account__form order__form"
                required
                type="email"
                value={user.email}
                onChange={event => changeUser('email', event.target.value)}
              />
              </div>

              <div className="order-inputs">
              <label  className="label-order">
                Мобільний телефон
              </label>
              <InputMask
                name="order-tel"
                className="account__form order__form"
                mask="+38 (999) 999 99 99" 
                required
                value={user.number}
                onChange={event => changeUser('number', event.target.value)}
                type="tel"
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
                <p>Ваші контактні дані</p>
              </div>
              <p className="enter-title"><a 
                  className="enter"
                  onClick={() => openAccount()}
                >
                  Увійти
                </a>
              </p>
              <p className="error">{error}</p>
            <div className="order-per-info-block">
              <div className="order-per-info">
                <div className="order-inputs">
                <label  className="label-order">
                  Прізвище
                </label>
                <input 
                  name="order-surname"
                  className="account__form order__form"
                  required
                  type="text"
                  value={surname}
                  onChange={event => setSurname(event.target.value)}
                />
                </div>
                <div className="order-inputs">
                <label className="label-order">
                  Ім'я
                </label>
                <input 
                  name="order-name"
                  className="account__form order__form"
                  required
                  type="text"
                  value={firstName}
                  onChange={event => setFirstName(event.target.value)}
                />
                </div>

                <div className="order-inputs">
                <label  className="label-order">
                  Мобільний телефон
                </label>
                <InputMask
                  name="order-tel"
                  className="account__form order__form"
                  mask="+38 (999) 999 99 99" 
                  required
                  type="tel"
                  value={number}
                  onChange={event => setNumber(event.target.value)}
                />
                </div>
              </div>

              <div className="order-per-info">
                <div className="order-inputs">
                <label  className="label-order">
                  E-mail
                </label>
                <input
                  name="order-email"
                  className="account__form order__form"
                  required
                  type="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
                </div>
                <div className="order-inputs">
                <label className="label-order">
                  Вигадайте пароль
                </label>
                <input 
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
          
            <OrderProducts 
              product={product}
              setOrder={setOrder}
            />
            
            <Delivery 
              delivery={delivery}
              setDelivery={setDelivery}
              adress={adress}
              setAdress={setAdress}
              city={city}
              setCity={setCity}
              poshtaAdress={poshtaAdress}
              setPoshtaAdress={setPoshtaAdress}
            />

            <Pay
             pay={pay}
             setPay={setPay} 
            />

            <div className="order-adress">
              <div className="order-units">
                <div>4</div>
                <p>Разом</p>
              </div>
                <div className="order-total-block">
                  <p className="order-total-text">Всього</p>
                  <p className="order-price">{amount} ₴</p>
                </div>
                <div className="order-total-block">
                  <p className="order-total-text">Вартість доставки</p>
                  <p className="order-price">Згідно з тарифами перевізника</p>
                </div>
              <div className="order-total">
                <div className="order-total-block">
                  <p className="order-total-text">Разом</p>
                  <p className="order-total-price">{amount} ₴</p>
                </div>
              </div>
              <div>
                <button 
                  className="order-total-btn"
                  type='button'
                  onClick={() => addOrder()}
                >
                  Підтвердити замовлення
                </button>
              </div>
            </div>
            
          </div>
      </div>
      <Account
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
      />
      <OrderAccept 
        orderAccept={orderAccept}
        setOrderAccept={setOrderAccept}
        orderID={orderID}
      />
      <LiqPayPopUp 
        openLiqPay={openLiqPay}
        setOpenLiqPay={setOpenLiqPay}
        amount={amount}
        orderID={orderID}
      />
    </>
  )
}

export default Order;

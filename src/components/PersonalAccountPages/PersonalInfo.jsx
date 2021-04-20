import React, { useEffect, useState } from 'react';
import Edit from './Edit';
import './style/personal-info.css';

const PersonalInfo = () => {
  const [data, setData] = useState({});
  const [type, setType] = useState('');
  const [edit, setEdit] = useState(false);

  const [pass_visible, setVisible] = useState(false);
  
  const userData = sessionStorage.getItem('currentUser');
  const localData = localStorage.getItem('currentUser');

  useEffect(() => {
    if(userData !== null && userData !== undefined) {
      setData(JSON.parse(userData))
    } else if (localData !== null && localData !== undefined) {
      setData(JSON.parse(localData))
    }
  }, []);

  const handleClick = () => {
    setVisible(!pass_visible);
  }

  return (
    <>
      <main className="personal-info">
        <div className="personal-info__testimonials">
          <div className="personal-info__user-details">
            <div className="personal-info__block">
              <i className="far fa-user-circle"></i>
              <h1>Особисті дані</h1>
              <div className="personal-info__content">
                <div>
                  <p className="personal-info__content-title">Прізвище:</p>
                  <p>{data.surname}</p>
                </div>
                <div>
                  <p className="personal-info__content-title">Ім'я:</p>
                  <p>{data.first_name}</p>
                </div>
                <div>
                  <p className="personal-info__content-title">По батькові:</p>
                  <p>{data.last_name}</p>
                </div>
              </div>
              <div className="edit">
                <i className="far fa-edit"></i>
                <span
                  onClick={()=> {
                    setType('change-name')
                    setEdit(true)
                  }}
                >
                  Редагрувати
                </span>
              </div>
            </div>
          </div>
          <div className="personal-info__user-details">
            <div className="personal-info__block">
              <i className="fas fa-id-card"></i>
              <h1>Контакти</h1>
              <div className="personal-info__content">
                <div className="personal-contact">
                  <p className="personal-contact-title personal-info__content-title">Телефон:</p>
                  <p>{data.number}</p>
                </div>
                <div>
                  <p className="personal-info__content-title">E-Mail:</p>
                  <p className="personal-contact-email">{data.email}</p>
                </div>
              </div>
              <div className="edit">
                <i className="far fa-edit"></i>
                <span
                  onClick={()=> {
                    setType('change-email')
                    setEdit(true)
                  }}
                >
                  Редагрувати
                </span>
              </div>
            </div>
          </div>
          {/*<div className="personal-info__user-details">
            <div className="personal-info__block">
              <i className="fas fa-truck"></i>
              <h1>Адрес доставки:</h1>
              <div className="personal-info__content">
                <div>
                  <p>-</p>
                </div>
              </div>
              <div className="edit">
                <i className="far fa-edit"></i>
                <span
                  onClick={()=> {
                    setType('change-adres')
                    setEdit(true)
                  }}
                >
                  Редагрувати
                </span>
              </div>
            </div>
                </div>*/}
          <div className="personal-info__user-details">
            <div className="personal-info__block">
              <i className="fas fa-sign-in-alt"></i>
              <h1>Пароль</h1>
              <div className="personal-info__content">
                <div>
                  <p className="personal-info__content-title" style={{marginBottom: "5px"}}>Поточний пароль:</p>
                  <div class="col-md-6">
                    <input id="password-field" type={pass_visible ? "text" : "password"} class="form-control" name="password" value={data.password} style={{width: "auto"}}/>
                    <span style={{ paddingTop: "28px", marginRight: "5px" }} onClick={() => {handleClick()}} toggle="#password-field" class={`${pass_visible ? "fa fa-fw fa-eye fa-eye-slash" : "fa fa-fw fa-eye" } field-icon toggle-password`}></span>
                </div>
                </div>
              </div>
              <div className="edit">
                <i className="far fa-edit"></i>
                <span
                  onClick={()=> {
                    setType('change-login')
                    setEdit(true)
                  }}
                >
                  Змінити пароль
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Edit 
        data={data}
        setData={setData}
        type={type} 
        edit={edit}
        setEdit={setEdit}
      />
    </>
  )
}

export default PersonalInfo;

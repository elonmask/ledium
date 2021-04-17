import React, { useEffect, useState } from 'react';
import Edit from './Edit';
import './style/personal-info.css';

const PersonalInfo = () => {
  const [data, setData] = useState({});
  const [type, setType] = useState('');
  const [edit, setEdit] = useState(false);
  
  const userData = sessionStorage.getItem('currentUser');
  const localData = localStorage.getItem('currentUser');

  useEffect(() => {
    if(userData !== null && userData !== undefined) {
      setData(JSON.parse(userData))
    } else if (localData !== null && localData !== undefined) {
      setData(JSON.parse(localData))
    }
  }, []);

  return (
    <>
      <main className="personal-info">
        <div className="personal-info__testimonials">
          <div className="personal-info__user-details">
            <div className="personal-info__block">
              <i className="far fa-user-circle"></i>
              <h1>Личный данные</h1>
              <div className="personal-info__content">
                <div>
                  <p className="personal-info__content-title">Фамилия:</p>
                  <p>{data.surname}</p>
                </div>
                <div>
                  <p className="personal-info__content-title">Имя:</p>
                  <p>{data.first_name}</p>
                </div>
                <div>
                  <p className="personal-info__content-title">Отчество:</p>
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
                  Редактировать
                </span>
              </div>
            </div>
          </div>
          <div className="personal-info__user-details">
            <div className="personal-info__block">
              <i className="fas fa-id-card"></i>
              <h1>Контакты</h1>
              <div className="personal-info__content">
                <div className="personal-contact">
                  <p className="personal-contact-title personal-info__content-title">Подтвержденный телефон:</p>
                  <p>{data.number}</p>
                </div>
                <div>
                  <p className="personal-info__content-title">Электронная почта:</p>
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
                  Редактировать
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
                  Редактировать
                </span>
              </div>
            </div>
                </div>*/}
          <div className="personal-info__user-details">
            <div className="personal-info__block">
              <i className="fas fa-sign-in-alt"></i>
              <h1>Логин</h1>
              <div className="personal-info__content">
                <div>
                  <p className="personal-info__content-title">Текущий пароль:</p>
                  <p>Сменить пароль</p>
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
                  Редактировать
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

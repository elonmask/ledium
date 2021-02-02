import React from 'react';

import './style/personal-info.css';

const PersonalInfo = () => {
  return (
    <>
      <main className="personal-info">
        <div className="personal-info__testimonials">
          <div className="personal-info__user-details">
            <div className="personal-info__block">
              <i class="far fa-user-circle"></i>
              <h1>Личный данные</h1>
              <div className="personal-info__content">
                <div>
                  <p>Фамилия:</p>
                  <p>Не указано</p>
                </div>
                <div>
                  <p>Имя:</p>
                  <p>Не указано</p>
                </div>
                <div>
                  <p>Отчество:</p>
                  <p>Не указано</p>
                </div>
              </div>
              <div className="edit">
                <i class="far fa-edit"></i>
                <span>Редактировать</span>
              </div>
            </div>
          </div>
          <div className="personal-info__user-details">
            <div className="personal-info__block">
              <i class="fas fa-id-card"></i>
              <h1>Контакты</h1>
              <div className="personal-info__content">
                <div>
                  <p>Подтвержденный телефон:</p>
                  <p>+380 63 468 78 89</p>
                </div>
                <div>
                  <p>Электронная почта:</p>
                  <p>spacedev@gmail.com</p>
                </div>
              </div>
              <div className="edit">
                <i class="far fa-edit"></i>
                <span>Редактировать</span>
              </div>
            </div>
          </div>
          <div className="personal-info__user-details">
            <div className="personal-info__block">
              <i class="fas fa-truck"></i>
              <h1>Адрес доставки:</h1>
              <div className="personal-info__content">
                <div>
                  <p>ул Киевская 18</p>
                </div>
              </div>
              <div className="edit">
                <i class="far fa-edit"></i>
                <span>Редактировать</span>
              </div>
            </div>
          </div>
          <div className="personal-info__user-details">
            <div className="personal-info__block">
              <i class="fas fa-sign-in-alt"></i>
              <h1>Логин</h1>
              <div className="personal-info__content">
                <div>
                  <p>Логин(пароль):</p>
                  <p>+380 63 468 78 89</p>
                </div>
                <div>
                  <p>Логин (электронная почта):</p>
                  <p>spacedev@gmail.com</p>
                </div>
              </div>
              <div className="edit">
                <i class="far fa-edit"></i>
                <span>Редактировать</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default PersonalInfo;

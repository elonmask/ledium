import React from 'react';

const Footer = () => {
 
  return (
    <footer className="footer">
    <div className="footer__top">
        <div className="footer__section">
            <img className="footer__img" alt="" src="images/LEDiumLOGO.png" />
            <p className="footer__p">
                г. Запорожье<br />
                +380507324444
            </p>
            <p className="footer__p">
                Сopyright 2020.<br />
                Все права защищены.
            </p>
        </div>
        <div className="footer__section">
            <h4 className="footer__h4">Продукция</h4>
            <ul>
                <li className="footer__item"><a href="#" className="footer__nav-link">Лампы</a></li>
                <li className="footer__item"><a href="#" className="footer__nav-link">Прожекторы</a></li>
                <li className="footer__item"><a href="#" className="footer__nav-link">Светильники</a></li>
                <li className="footer__item"><a href="#" className="footer__nav-link">Уличные</a></li>
                <li className="footer__item"><a href="#" className="footer__nav-link">Промышленные</a></li>
                <li className="footer__item"><a href="#" className="footer__nav-link">Кабель-провод</a></li>
            </ul>
        </div>
        <div className="footer__section">
            <h4 className="footer__h4">Общая информация</h4>
            <ul>
                <li className="footer__item"><a href="#" className="footer__nav-link">Свяжитесь с нами</a></li>
                <li className="footer__item"><a href="#" className="footer__nav-link">Политика конфидинциальности</a></li>
                <li className="footer__item"><a href="#" className="footer__nav-link">Условия и положения</a></li>
            </ul>
        </div>
        <div className="footer__section">
            <h4 className="footer__h4">Пресс-центр</h4>
            <ul>
                <li className="footer__item"><a href="#" className="footer__nav-link">Новости</a></li>
                <li className="footer__item"><a href="#" className="footer__nav-link">Фотогалерея</a></li>
                <li className="footer__item"><a href="#" className="footer__nav-link">Видеогалерея</a></li>
            </ul>
        </div>
        <div className="footer__section">
            <h4 className="footer__h4">Партнерам</h4>
            <ul>
                <li className="footer__item"><a href="#" className="footer__nav-link">Обучение</a></li>
                <li className="footer__item"><a href="#" className="footer__nav-link">Каталоги</a></li>
            </ul>
        </div>
    </div>
    <div className="footer__icons">
        <a href="http://instagram.com">
            <img src={require("../public/images/instagram.svg")} alt="instagram" className="footer__icon" />
        </a>
        <a href="http://facebook.com">
            <img src="images/facebook.svg" alt="facebook" className="footer__icon" />
        </a>
        <a href="http://youtube.com">
            <img src="images/youtube.svg" alt="youtube" className="footer__icon" />
        </a>
    </div>
    <a href="#">
        <img className="footer__arrow" alt="" src="images/arrow.svg" />
    </a>
</footer>

  );
};

export default Footer;
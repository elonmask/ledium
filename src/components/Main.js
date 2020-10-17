import React from 'react';

const Main = () => {
 
  return (
    
    <main classNameName="section">
    <section className="section__menu">
        <section className="section__menu-h2">
            <h2>Наша продукция</h2>
            <a href="catalog">перейти<i>></i></a>
        </section>
        <ul className="section__list">
            <li className="section__item">
                <a className="section__link" href="#">
                    <img className="section__menu-img" alt="" src="images/menu/Montazhnaya-oblast-1.png" />
                    <span>Лампы</span>
                </a>
            </li>
            <li href="catalog" className="section__item">
                <a className="section__link" href="#">
                    <img className="section__menu-img" alt="" src="images/menu/Montazhnaya-oblast-2.png" />
                    <span>Прожекторы</span>
                </a>
            </li>
            <li href="catalog" className="section__item">
                <a className="section__link" href="#">
                    <img className="section__menu-img" alt="" src="images/menu/Montazhnaya-oblast-3.png" />
                    <span>Светильники</span>
                </a>
            </li>
            <li href="catalog" className="section__item">
                <a className="section__link" href="#">
                    <img className="section__menu-img" alt="" src="images/menu/Montazhnaya-oblast-4.png" />
                    <span>Уличные</span>
                </a>
            </li>
            <li href="catalog" className="section__item">
                <a className="section__link" href="#">
                    <img className="section__menu-img" alt="" src="images/menu/Montazhnaya-oblast-5.png" />
                    <span>Промышленные</span>
                </a>
            </li>
            <li href="catalog" className="section__item">
                <a className="section__link" href="#">
                    <img className="section__menu-img" alt="" src="images/menu/Montazhnaya-oblast-1.png" />
                    <span>Кабель-провод</span>
                </a>
            </li>
        </ul>
    </section>
    <section className="section__first">
        <div className="section__content">
            <h2 className="section__h2">Форма и содержание</h2>
            <p className="section__p">
                В новых лентах мы используем современные диоды 2835, дающие в два раза больше света, чем в лентах предыдущего поколения при той же потребляемой мощности. Мы используем систему креплений с отверстиями, чтобы вы могли
                максимально надежно фиксировать ленту на поверхности.
            </p>
            <a href="#" className="section__read">Читать далее</a>
        </div>
        <div className="section__parallax parallax"></div>
    </section>
    <section className="section__second">
        <div className="section__article1">
            <div className="section__content-1">
                <h2 className="section__h2-1">Абсолютно новое качество света</h2>
                <p className="section__p-1">
                    Сочетание матированной центральной зоны и прозрачного мультисекторного рассеивателя по контуру помогло добиться привычного свечения галогенной лампы и одновременно избавиться от слепящего эффекта, присущего стандартным
                    лампам с прозрачной колбой.
                </p>
                <a href="#" className="section__read section__read--1">Читать далее</a>
            </div>
        </div>
        <div className="section__article2">
            <div className="section__content section__content--2">
                <h2 className="section__h2">Умная упаковка – правильная лампа</h2>
                <p className="section__p p">Для вашего удобства мы разработали систему подсказок и вынесли на упаковку всю информацию, необходимую для подбора лампы.</p>
                <a href="#" className="section__read">Читать далее</a>
            </div>
        </div>
        <div className="section__article3">
            <div className="section__content section__content--3">
                <h2 className="section__h2">Ничего лишнего</h2>
                <p className="section__p">Больше никаких дополнительных деталей и никакой сборки. Не нужно покупать лампы для врезных «точек» — теперь есть новые светильники gauss со встроенной LED-платой.</p>
                <a href="#" className="section__read">Читать далее</a>
            </div>
            <div className="section__parallax1">
                <img className="section__image" alt="" src="images/main/Svetilnik.png" />
            </div>
        </div>
    </section>
    <section className="section__third">
        <div className="section__block">
            <div className="section__content section__content--4">
                <h2 className="section__h2 black">Технологии в миниатюре</h2>
                <p className="section__p black">Мы поместили светодиоды в корпус всего 10×37 мм и получили самую компактную лампу gauss.</p>
                <a href="#" className="section__read black">Читать далее</a>
            </div>
            <div className="parallax">
                <img className="section__image" alt="" src="images/main/block-5.png" />
            </div>
        </div>
    </section>
    <section className="section__four">
        <div className="section__article4">
            <div className="section__content section__content--5">
                <h2 className="section__h2 black">Революционное открытие – ЛАМПЫ ГРАФЕН!</h2>
                <p className="section__p black">
                    Почти полтора века назад Томас Эдисон использовал углеродную нить в качестве проводящей для создания первой в мире лампы накаливания. Учёные и сегодня используют этот материал только несколько в другом виде.
                </p>
                <a href="#" className="section__read black">Читать далее</a>
            </div>
        </div>
    </section>
    <section className="section__five">
        <div className="section__article5">
            <div className="section__content section__content--6">
                <h2 className="section__h2">Умный свет – главная часть вашего интерьера.</h2>
                <p className="section__p">Знаете ли вы, как сильно влияет на нас освещение?</p>
                <a href="#" className="section__read">Читать далее</a>
            </div>
        </div>
    </section>
</main>

  );
};

export default Main;
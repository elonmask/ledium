import React, {useState} from 'react';

import '../public/style/tabs.css';

const Tabs = ({ products }) => {

  const tabs = [
    {
      id: 1,
      title: 'Характеристики',
      content: 'Гарантийный срок на светильник составляет 1 год с момента приобретения. В гарантийный период данная продукция может быть заменена, в случае выявления ненадлежащего качества товара, что сделало невозможным дальнейшую его эксплуатацию и если это случилось не по вине покупателя. Для выполнения гарантийных обязательств, необходимо получить от продавца Гарантийный талон с обозначением места и даты покупки. Более детальные условия возврата продукции и предоставления гарантийных обязательств смотрите в разделе Гарантии.',
    },
    {
      id: 2,
      title: 'Детальніше',
      content: [`${products.description}`],
    },
    {
      id: 3,
      title: 'Доставка',
      content: ['Всі замовлення, оформлені на сайті інтернет-магазину "LEDium" до 11:00, відправляються в день оформлення замовлення.', 'Замовлення доставляються протягом 1-3 днів в залежності від регіону, в який відправляється товар. Документи, що підтверджують факт купівлі товару, направляються разом з товаром.', 'Доставка товарів відбуваеться за допомогою компанії «Нова пошта»:', '- доставка в відділення перевізника «Нова пошта»;', '- aдресна доставка по Україні - згідно з діючими тарифами перевізника, може бути узгоджена індивідуально.'],
    },
    {
      id: 4,
      title: 'Замовлення',
      content: ['Мінімальне замовлення в Інтернет-магазині "LEDium" становить 200,00 ₴ При замовленні від 200,00 до 1000,00 ₴ послугу доставки сплачує клієнт.', 'При замовленні від 1000,00 ₴ послуги доставки товару і повернення платежу безкоштовні.', 'Для зручності покупців, Інтернет-магазин "LEDium" приймає замовлення в режимі on-line цілодобово, без вихідних.', 'Замовлення обробляються до 10 хвилин з 8:00 до 17:00 в робочі дні.', 'Замовлення, що надходять в неробочий час (в тому числі у вихідні та святкові дні) обробляються в найближчий робочий день до 10:00.'],
    },
    {
      id: 5,
      title: 'Гарантії',
      content: ["Відповідно до Закону України «Про захист прав споживачів» (розділ 2, стаття 7) Інтернет-магазин LEDium зобов'язується забезпечити належну роботу (застосування, використання) світлотехнічної продукції в тому числі комплектуючих виробів, протягом гарантійного терміну, встановленого нормативними документами або договором.", 'Cвітлодіодні лампи', 'На світлодіодні лампи діє гарантія від 1 до 2 років, в залежності від моделі виробу.', 'Світлодіодні світильники та панелі', 'На все світлодіодні світильники і панелі діє гарантія, тривалістю 1-2 роки, в залежності від моделі виробу.', 'Cвітлодіодні прожектори', 'Гарантійний термін на всі світлодіодні прожектори становить 1-2-3 роки, в залежності від моделі виробу.', 'Умови надання гарантії', 'Початком гарантійного терміну є дата продажу товару, яка вказана в заповненому гарантійне талоні на конкретний виріб. У разі неналежно роботи світлотехнічного обладнання покупець може звернутися в Сервісний центр для усунення неполадок в течение усього гарантійного терміну служби.', 'Гарантія LEDium не поширюється на товари:', '- з видимими ознаками втручання в їх конструкцію і слідами механічних пошкоджень;', '- з ознаками порушення умов експлуатації та слідами перегріву, руйнування електронних компонентів;', '- без чека (товарної накладної) і заповненого гарантійного талона;', '- без збереженої фірмової упаковки;', '-  з простроченим гарантійний термін служби.'],
    },
    {
      id: 6,
      title: 'Обмін',
      content: ['Умови обміну продукції', 'Відповідно до Закону України «Про захист прав споживачів» (розділ 2, стаття 9), покупець може обміняти товар, Набутий в інтернет-магазині світлотехніки LEDium, протягом 14 днів. Заміна відбувається тільки при дотримання покупцем всіх правил експлуатації, вказаних в супровідній документації від бренду LEDium. До обміну приймається товар, який:', '- не був у вживанні і не має слідів експлуатації, механічних пошкоджень і т.д.;', '- має повністю Збережені товарний вигляд, упаковку і повну комплектність;', '- має документи, що підтверджують його покупку в інтернет-магазині LEDium.', 'Обмін товару проводиться тільки після отримання експертного висновку технічної служби компанії в стані вироби.'],
    },
    {
      id: 7,
      title: 'Повернення',
      content: ['Умови повернення продукції LEDium', 'Покупець може повернути продукт при дотримання наступних умов:', '- протягом 14 днів з дня покупки;', '- при наявності товарного чека і супровідної документації;', '- при збереженні товарного вигляду, цілісності упаковки;', '- при відсутності слідів використання.'],
    },
  ]

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <div className="tabs">
        <div className="tabs__btns">
          {tabs.map((tab, i) => (
            <>
              <button
                className={currentTab === i ? 'tabs__btn tabs__btn-active' : 'tabs__btn'}
                onClick={() => {
                  setCurrentTab(i)
                }}
              >
                {tab.title}
              </button>
            </>
          ))}
        </div>
        { currentTab === 0 ? (
          <div className="tabs__content">
            <ul>
              {
                products.PackWidth !== null
                ? (
                  <li className="tabs-char">
                    <div className="char-item">
                      <span className="char-span">Ширина упаковки</span>
                    </div>
                    <span className="blue">{products.PackWidth}</span>
                  </li>
                )
                : ''
              }
              {
                products.PackLength !== null
                ? (
                  <li className="tabs-char">
                    <div className="char-item">
                      <span className="char-span">Довжина упаковки</span>
                    </div>
                    <span className="blue">{products.PackLength}</span>
                  </li>
                )
                : ''
              }
              {
                products.Len !== null
                ? (
                  <li className="tabs-char">
                    <div className="char-item">
                      <span className="char-span">Довжина</span>
                    </div>
                    <span className="blue">{products.Len}</span>
                  </li>
                )
                : ''
              }
              {
                products.Width !== null
                ? (
                  <li className="tabs-char">
                    <div className="char-item">
                      <span className="char-span">Ширина</span>
                    </div>
                    <span className="blue">{products.Width}</span>
                  </li>
                )
                : ''
              }
              {
                products.Material !== null
                ? (
                  <li className="tabs-char">
                    <div className="char-item">
                      <span className="char-span">Матеріал</span>
                    </div>
                    <span className="blue">{products.Material}</span>
                  </li>
                )
                : ''
              }
              {
                products.Power !== null
                ? (
                  <li className="tabs-char">
                    <div className="char-item">
                      <span className="char-span">Потужність</span>
                    </div>
                    <span className="blue">{products.Power}</span>
                  </li>
                )
                : ''
              }
              {
                products.Voltage !== null
                ? (
                  <li className="tabs-char">
                    <div className="char-item">
                      <span className="char-span">Вольтаж</span>
                    </div>
                    <span className="blue">{products.Voltage}</span>
                  </li>
                )
                : ''
              }
              {
                products.ColorTemperature !== null
                ? (
                  <li className="tabs-char">
                    <div className="char-item">
                      <span className="char-span">Колірна температура</span>
                    </div>
                    <span className="blue">{products.ColorTemperature}</span>
                  </li>
                )
                : ''
              }
              {
                products.LightFlow !== null
                ? (
                  <li className="tabs-char">
                    <div className="char-item">
                      <span className="char-span">Світловий потік</span>
                    </div>
                    <span className="blue">{products.LightFlow}</span>
                  </li>
                )
                : ''
              }
              {
                products.ServiceLife !== null
                ? (
                  <li className="tabs-char">
                    <div className="char-item">
                      <span className="char-span">Тривалість роботи</span>
                    </div>
                    <span className="blue">{products.ServiceLife}</span>
                  </li>
                )
                : ''
              }
              {
                products.SocleType !== null
                ? (
                  <li className="tabs-char">
                    <div className="char-item">
                      <span className="char-span">Тип цоколя</span>
                    </div>
                    <span className="blue">{products.SocleType}</span>
                  </li>
                )
                : ''
              }
              {
                products.LightScattering !== null
                ? (
                  <li className="tabs-char">
                    <div className="char-item">
                      <span className="char-span">Розсіювання</span>
                    </div>
                    <span className="blue">{products.LightScattering}</span>
                  </li>
                )
                : ''
              }
            </ul>
          </div>
        ) : (
          <div className="tabs__content">
            {tabs[currentTab].content.map(n => (
              <>
               <p className="tabs-p">{n}</p>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Tabs;

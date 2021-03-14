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
      title: 'Описание',
      content: `${products.description.text}`,
    },
    {
      id: 3,
      title: 'Доставка',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quo illo mollitia quae, porro dolorum, saepe excepturi totam voluptas, qui culpa molestias id! Mollitia aspernatur iure nulla. Ut delectus recusandae in odit? Voluptatum, sapiente sunt mollitia aliquid tempora facere alias.',
    },
    {
      id: 4,
      title: 'Оплата',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio illo repellendus, architecto eveniet repudiandae ea magnam, eligendi dignissimos qui repellat vero neque soluta laborum animi nihil amet aut eum temporibus quam exercitationem similique. Sed ratione rerum, maiores corrupti qui ipsam nostrum quos, ipsa modi molestias porro beatae totam excepturi.',
    },
    {
      id: 5,
      title: 'Отзывы',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, repellat!'
    },
    {
      id: 6,
      title: 'Гарантии',
      content: 'Гарантийный срок на светильник составляет 1 год с момента приобретения. В гарантийный период данная продукция может быть заменена, в случае выявления ненадлежащего качества товара, что сделало невозможным дальнейшую его эксплуатацию и если это случилось не по вине покупателя. Для выполнения гарантийных обязательств, необходимо получить от продавца Гарантийный талон с обозначением места и даты покупки. Более детальные условия возврата продукции и предоставления гарантийных обязательств смотрите в разделе Гарантии.',
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
                className="tabs__btn"
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
              {products.param.map(p => (
                <>
                  <li className="tabs-char">
                    <div className="char-item">
                      <span className="char-span">{p.name}</span>
                    </div>
                    <span className="blue">{p.text}</span>
                  </li>
                </>
              ))}
            </ul>
          </div>
        ) : (
          <div className="tabs__content">{tabs[currentTab].content}</div>
        )}
      </div>
    </>
  )
}

export default Tabs;

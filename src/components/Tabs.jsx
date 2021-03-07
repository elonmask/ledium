import React, {useState} from 'react';

import '../public/style/tabs.css';

const Tabs = () => {

  const tabs = [
    {
      title: 'Характеристики',
      content: 'Гарантийный срок на светильник составляет 1 год с момента приобретения. В гарантийный период данная продукция может быть заменена, в случае выявления ненадлежащего качества товара, что сделало невозможным дальнейшую его эксплуатацию и если это случилось не по вине покупателя. Для выполнения гарантийных обязательств, необходимо получить от продавца Гарантийный талон с обозначением места и даты покупки. Более детальные условия возврата продукции и предоставления гарантийных обязательств смотрите в разделе Гарантии.',
    },
    {
      title: 'Гарантии',
      content: 'Гарантийный срок на светильник составляет 1 год с момента приобретения. В гарантийный период данная продукция может быть заменена, в случае выявления ненадлежащего качества товара, что сделало невозможным дальнейшую его эксплуатацию и если это случилось не по вине покупателя. Для выполнения гарантийных обязательств, необходимо получить от продавца Гарантийный талон с обозначением места и даты покупки. Более детальные условия возврата продукции и предоставления гарантийных обязательств смотрите в разделе Гарантии.',
    },
    {
      title: 'Доставка',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quo illo mollitia quae, porro dolorum, saepe excepturi totam voluptas, qui culpa molestias id! Mollitia aspernatur iure nulla. Ut delectus recusandae in odit? Voluptatum, sapiente sunt mollitia aliquid tempora facere alias.',
    },
    {
      title: 'Оплата',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio illo repellendus, architecto eveniet repudiandae ea magnam, eligendi dignissimos qui repellat vero neque soluta laborum animi nihil amet aut eum temporibus quam exercitationem similique. Sed ratione rerum, maiores corrupti qui ipsam nostrum quos, ipsa modi molestias porro beatae totam excepturi.',
    },
    {
      title: 'Отзывы',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, repellat!'
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
        <div className="tabs__content">{tabs[currentTab].content}</div>
      </div>
    </>
  )
}

export default Tabs;
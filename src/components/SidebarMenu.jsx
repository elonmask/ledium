import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const SidebarMenu = () => {

  const history = useHistory();
  const [categories, setCategories] = useState([]);

  const transformData = (UA_Name) => {
    
    let result;

    categoriesCache.forEach(cat => {
      if (cat.text === UA_Name) {
        result = cat.name;
      }
    })

    return result;
  }

  const categoriesCache = [
    {
      id: 1,
      name: "lamps",
      text: "Лампи"
    },
    {
      id: 2,
      name: "spotlights",
      text: 'Прожектори',
    },
    {
      id: 3,
      name: "phytolamps",
      text: "Фітолампи",
    },
    {
      id: 4,
      name: "fixtures",
      text: "Світильники",
    },
    {
      id: 5,
      name: "table_lamps",
      text: "Настільні лампи",
    },
    {
      id: 6,
      name: "beams",
      text: "Панелі",
    }
  ]

  useEffect(() => {
    axios.get(`https://admin.ledium.shop/categories`)
      .then(res => {
        const data = res.data;
        setCategories(data);
      })  
  }, []);

  return (
    <>
      <div className="sidebar">
      <div className="sidebar-menu">
        <ul className="sidebar-list">
          {categories.map(category => (
            <li className="sidebar-item" key={category.id}>
              <button
                className="sidebar-link"
                onClick={() => history.push(`/catalog/category/${transformData(category.name)}`)}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </>
  )
}

export default SidebarMenu;

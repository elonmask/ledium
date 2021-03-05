import React from 'react';
import { useHistory } from 'react-router-dom';

const FilterMenu = ({category, goods, setCategoryId, setArray, setCategoryText}) => {

  const history = useHistory();

  const filterByCategory = (item) => {
    history.push(`/catalog/${item.id}`);
  
    setCategoryId(item.id);
    setCategoryText(item.text)
    let newArr = [...goods];
    const n = newArr.filter( elem => elem.categoryId === item.id);

    setArray([...n]);
  }

  return (
    <>
      <div className="sidebar-menu">
        <ul className="sidebar-list">
          {category.map(item => (
            <li className="sidebar-item" key={item.id}>
              <button
                className="sidebar-link"
                onClick={() => {filterByCategory(item)}}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default FilterMenu;

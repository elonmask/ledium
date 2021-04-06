import React from 'react';

import './style/exit.css';

const Exit = ({ modalIsOpen, setModalIsOpen }) => {

  const userData = sessionStorage.getItem('currentUser');

  const closeModal = () => {
    setModalIsOpen(false)
  }

  /*const exit = () => {
    sessionStorage.clear();
    setModalIsOpen(false);
  }*/

  return (
    <>
      <div className={ modalIsOpen ? 'exit-container' : 'none-exit'}>
        <div className={ modalIsOpen ? 'exit exit-active' : 'exit'}>
          <h2>Выйти?</h2>
          <div className="exit__btns">
            <button
              className="exit__btn"
              onClick={()=>{closeModal()}}
            >
              Да
            </button>
            <button
              className="exit__btn"
              onClick={()=>{closeModal()}}
            >
              Нет
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exit;

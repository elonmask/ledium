import React from 'react';

import './style/exit.css';

const Exit = ({ modalIsOpen, setModalIsOpen }) => {

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <div className={ modalIsOpen ? 'exit-container' : ''}>
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

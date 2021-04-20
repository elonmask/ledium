import React from 'react';

import './style/exit.css';

const Exit = ({ modalIsOpen, setModalIsOpen }) => {

  const userData = sessionStorage.getItem('currentUser');
  const localData = localStorage.getItem('currentUser');

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const exit = () => {
    localStorage.clear();
    sessionStorage.clear();
    setModalIsOpen(false);
    window.location.replace('/');
  }

  return (
    <>
    <div className={ modalIsOpen ? 'account-modal' : 'account__disable'}>
    <div className="modal-overlay" onClick={() => closeModal()}></div>
      <div className="account exit-account">
        <i 
          className="fas fa-times account-close"
          onClick={()=>{closeModal()}}
        ></i>
        <div className="exit">
        <h2>Бажаете вийти?</h2>
          <div className="exit__btns">
            <button
              className="exit__btn"
              onClick={()=>{exit()}}
            >
              Так
            </button>
            <button
              className="exit__btn"
              onClick={()=>{closeModal()}}
            >
              Ні
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Exit;

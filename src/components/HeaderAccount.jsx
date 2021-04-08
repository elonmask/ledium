import React, { useEffect, useState } from 'react';
import Account from './Account/Account';
import PersonalMenu from './PersonalAccountPages/PersonalMenu';

const HeaderAccount = ({ menuIsOpen, setMenuIsOpen, perMenuIsOpen, setPerMenuIsOpen}) => {
  const [login, setLogin] = useState(false);

  const userData = sessionStorage.getItem('currentUser');
  const localData = localStorage.getItem('currentUser');

  const userLogin = () => {
    console.log(userData);
    if (userData !== null && userData !== undefined) {
      setLogin(true);
      setPerMenuIsOpen(true);
    } else if (localData !== null && localData !== undefined) {
      setLogin(true);
      setPerMenuIsOpen(true);
    } else {
      setMenuIsOpen(true);
    }
  }
  
  return (
    <>
      <a 
        className=" header__mob-block header__mob-block--active user-block"
        onClick={()=>{userLogin()}}
      >
        <i className="fas fa-user-alt"></i>
      </a>

      
      <Account
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
      />
      <PersonalMenu
        setPerMenuIsOpen={setPerMenuIsOpen}
        perMenuIsOpen={perMenuIsOpen}
      />
      
    </>
  )
}

export default HeaderAccount;

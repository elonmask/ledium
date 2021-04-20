import React from 'react';

const SearchBody = () => {
    return (
        <>
        <div className="header__search">
                <input className="header__searchbar" type="text" name="search" placeholder="Пошук товарів у каталозі" />
                <button className="header__btn-search">Пошук</button>
        </div>
        </>
    )
}

export default SearchBody;
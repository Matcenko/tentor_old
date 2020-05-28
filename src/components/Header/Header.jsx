import React from 'react';
import style from './Header.module.css';

export default () => {
    return (
        <header className={style.header}>
            <img src={require('./img/logo.svg')} alt='tentor'/>
            <nav className={style.menuWrapper}>
                <ul className={style.menu}>
                    <li className={style.active}>Главная</li>
                    <li>Товары</li>
                    <li>Доставка</li>
                    <li>Контакты</li>
                </ul>
            </nav>
            <div className={style.rightMenu}>
                <div className={style.search}>
                    <img className={style.binoculars} src={require('./img/binoculars.svg')} alt='binoculars'/>
                    <span>Поиск...</span>
                </div>
                <img className={style.cart}
                     src={require('./img/cart.svg')}
                     alt='bag vector'/>
                <div>
                    <p className={style.active}>UA</p>
                    <p>RU</p>
                </div>
            </div>
        </header>)
};

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import classNames from 'classnames';

import propOr from "../../../../utils/propOr";
import setLang from "../../../redux/actions/setLang";
import style from './Header.module.css';

const mapStateToProps = ({application}) => {
    return {
        lang: application.lang,
        langMap: application.langMap,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setLang: payload => dispatch(setLang(payload))
    };
};

const Header = props => {
    const [inputValue, setInputValue] = useState('');
    const [searchIsActive, setSearchIsActive] = useState(false);
    const {lang, langMap, setLang} = props;
    const texts = propOr(langMap, [lang, 'header'], '');

    return (
        <header className={style.header}>
            <NavLink exact to='/'>
                <img src={require('./img/logo.svg')} alt='tentor'/>
            </NavLink>
            <nav className={style.menuWrapper}>
                <ul className={style.menu}>
                    {texts.links.map(link => {
                        return (
                            <li key={link.link}>
                                <NavLink exact to={link.link}
                                         activeClassName={style.active}>
                                    {link.name}
                                </NavLink>
                            </li>)
                    })}
                </ul>
            </nav>
            <div className={style.rightMenu}>
                <div className={style.search}>
                    <div onClick={() => setSearchIsActive(!searchIsActive)}>
                        <img className={style.binoculars}
                             src={require('./img/binoculars.svg')}
                             alt='binoculars'/>
                        <span>{texts.search}...</span>
                    </div>
                    {searchIsActive &&
                    <input className={style.searchInput}
                           value={inputValue}
                           onChange={e => setInputValue(e.target.value)}
                           type="text"
                    />}
                </div>
                <img className={style.cart}
                     src={require('./img/cart.svg')}
                     alt='bag vector'/>
                <div>
                    <p className={classNames(style.lang, {[style.active]: lang === 'ua'})}
                       onClick={() => setLang('ua')}
                    >
                        UA
                    </p>
                    <p className={classNames(style.lang, {[style.active]: lang === 'ru'})}
                       onClick={() => setLang('ru')}
                    >
                        RU
                    </p>
                </div>
            </div>
        </header>)
};

Header.propTypes = {
    lang: PropTypes.string.isRequired,
    setLang: PropTypes.func.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);

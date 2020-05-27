import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <a href="https://www.facebook.com/tentorinua">
                <img src={require('./img/facebook.svg')} alt="facebook"/>
            </a>
            <a href='https://www.linkedin.com/in/pavelmatcenko'
               rel='noopener noreferrer'
               target="_blank"
               className={style.developer}
            >
                <p>Разработано</p>
                <p className={style.developerName}>Pavel Matsenko</p>
            </a>
            <div>
                <p className={style.contacts}>
                    <a href="tel:+38(066)8174117">0668174117</a>
                    <a href="tel:+38(066)8174117">0668174117</a>
                </p>
                <p className={style.contacts}>
                    <a href="mailto:tenkor.kilev@gmail.com">tenkor.kilev@gmail.com</a>
                    <a href="tel:+38(066)8174117">0668174117</a>
                </p>
            </div>
        </footer>)
};

export default Footer;

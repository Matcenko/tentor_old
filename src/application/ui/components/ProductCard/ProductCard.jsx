import React from 'react';
import style from './ProductCard.module.css';

const ProductCard = () => {
    return (
        <article className={style.productCardWrapper}>
            <div className={style.productCard}>
                <img className={style.productAvatar}
                     src={require('./img/productAvatar.png')}
                     alt="case"/>
                <p className={style.productName}>
                    Чехол на капот лодочного мотороа PARSUN 2.6
                </p>
                <div className={style.buySection}>
                    <div>
                        <img className={style.cart} src={require("../Header/img/cart.svg")} alt="bag"/>
                        <span>Купить</span>
                    </div>
                    <p className={style.price}>1999 ₴</p>
                </div>
            </div>
        </article>)
};

export default ProductCard

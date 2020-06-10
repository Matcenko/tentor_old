import React from 'react';
import PropTypes from 'prop-types';

import style from './ProductCard.module.css';

const ProductCard = props => {
    const {name, price, img} = props;
    return (
        <article className={style.productCardWrapper}>
            <div className={style.productCard}>
                <img className={style.productAvatar}
                     src={require('./img/i0m7TsA.png')}
                     alt="case"/>
                <p className={style.productName}>
                    {name}
                </p>
                <div className={style.buySection}>
                    <div>
                        <img className={style.cart} src={require("../Header/img/cart.svg")} alt="bag"/>
                        <span>Купить</span>
                    </div>
                    <p className={style.price}>{price} ₴</p>
                </div>
            </div>
        </article>)
};

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]).isRequired,
    img: PropTypes.string,
}

ProductCard.defaultProps = {
    img: ''
}

export default ProductCard

import React, { useState} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';

import ProductCard from "../ProductCard/ProductCard";
import style from './TopProductsSection.module.css';

const mapStateToProps = ({application, products}) => {
    return {
        lang: application.lang,
        products: products.products
    };
};

const TopProductsSection = props => {
    const onChange = value => {
        setActiveProduct(activeProduct + value)
    };

    const [activeProduct, setActiveProduct] = useState(0);
    const topProducts = props.products
        .filter(product => product.isTop)
        .map(topProduct => <ProductCard
            name={topProduct[props.lang].name}
            img={topProduct.img}
            price={topProduct.price}
        />)

    return (
        <section>
            <header className={style.header}>
                <h1>ТОП ТОВАРОВ</h1>
            </header>
            <div className={style.topProducts}>
                <Carousel
                    value={activeProduct}
                    draggable={false}
                    slides={topProducts}
                    slidesPerPage={3}
                    infinite
                    arrowLeft={
                        <img onClick={() => onChange(-3)}
                             className={style.leftArrow}
                             src={require('./img/arrow.svg')}
                             alt='arrow'
                        />}
                    arrowRight={
                        <img onClick={() => onChange(3)}
                             className={style.rightArrow}
                             src={require('./img/arrow.svg')}
                             alt="arrow"
                        />}
                />
                <button className={style.allProducts}>
                    <NavLink to='/products'>
                        Смотреть весь ассортимент...
                    </NavLink>
                </button>
            </div>
        </section>)
};

export default connect(mapStateToProps)(TopProductsSection);

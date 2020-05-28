import React, {Component} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import ProductCard from "../../components/ProductCard/ProductCard";
import style from './TopProductsSection.module.css';

const topProducts = [<ProductCard/>, <ProductCard/>, <ProductCard/>, <ProductCard/>, <ProductCard/>];

export default class TopProductsSection extends Component {
    state = {
        activeProduct: 0
    };

    onChange = value => {
        const activeProduct = this.state.activeProduct + value;
        this.setState({activeProduct});
    };

    render() {
        const {activeProduct} = this.state;
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
                            <img onClick={() => this.onChange(-3)}
                                 className={style.leftArrow}
                                 src={require('./img/arrow.svg')}
                                 alt='arrow'
                            />}
                        arrowRight={
                            <img onClick={() => this.onChange(3)}
                                 className={style.rightArrow}
                                 src={require('./img/arrow.svg')}
                                 alt="arrow"/>}
                    />
                    <button className={style.allProducts}>
                        <a href="#"> Смотреть весь ассортимент...</a>
                    </button>
                </div>
            </section>)
    }
};

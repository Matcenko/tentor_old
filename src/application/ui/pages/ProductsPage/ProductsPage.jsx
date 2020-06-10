import React, {Component} from 'react';
import InputRange from 'react-input-range';
import {connect} from 'react-redux';
import classNames from 'classnames';

import ProductCard from "../../components/ProductCard/ProductCard";
import style from './ProductsPage.module.css';

const mapStateToProps = ({application, products, filters, categories}) => {
    return {
        lang: application.lang,
        products: products.products,
        filters: filters.filters,
        categories: categories.categories,
    };
};

class ProductsPage extends Component {
    state = {
        priceRangeValue: {min: 0, max: 0},
        priceRangeBorders: {min: 0, max: 0},
        categoryProducts: [],
        filteredProducts: [],
        activeFilters: [],
        activeCategoryId: this.props.categories[0].id
    }

    filterProducts(activeCategoryId = this.state.activeCategoryId) {
        const {products} = this.props;
        const categoryProducts = products.filter(product => product.categoryId === activeCategoryId)
        const priceRangeValue = this.findMinAndMaxPrices(categoryProducts);

        this.setState({
            categoryProducts,
            filteredProducts: categoryProducts,
            priceRangeValue,
            priceRangeBorders: priceRangeValue,
            activeCategoryId
        })
    }

    UNSAFE_componentWillMount() {
        this.filterProducts()
    }

    findMinAndMaxPrices = products => {
        let min = 0;
        let max = 0;

        if (products.length) {
            min = products[0].price;
            max = min;
        }

        products.forEach(product => {
            if (parseInt(product.price) > max) max = +product.price;
            else if (parseInt(product.price) < min) min = +product.price;
        })

        return {min, max}
    }

    setPriceRangeValue = priceRangeValue => {
        const filteredProducts = this.state.categoryProducts.filter(product => {
            return product.price >= priceRangeValue.min && product.price <= priceRangeValue.max
        })
        this.setState({
            priceRangeValue,
            filteredProducts
        })
    }

    inputChangePrice = type => e => {
        const value = +e.target.value;

        if (!isNaN(value)) {
            this.setPriceRangeValue({...this.state.priceRangeValue, [type]: value})
        } else e.preventDefault();
    };

    inputPriceOnBlur = type => {
        const {priceRangeValue, priceRangeBorders} = this.state;
        const currentValue = priceRangeValue[type];
        const borderValue = priceRangeBorders[type];

        if (type === 'min' && currentValue < borderValue) {
            this.setState({priceRangeValue: {...priceRangeValue, min: +borderValue}})
        } else if (type === 'max' && currentValue > borderValue) {
            this.setState({priceRangeValue: {...priceRangeValue, max: +borderValue}})
        }
    }

    render() {
        const {lang, filters, categories} = this.props;
        const {filteredProducts, priceRangeValue, priceRangeBorders: {min, max}, activeCategoryId} = this.state;

        return (
            <div className={style.productsPage}>
                <nav>
                    <ul className={style.categories}>
                        {categories.map(category => {
                            return (
                                <li className={classNames(style.category,
                                    {[style.activeCategory]: activeCategoryId === category.id})}
                                    onClick={() => this.filterProducts(category.id)}
                                    key={category.id}
                                >
                                    {category[lang]}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div className={style.productsAndFilters}>
                    <nav className={style.filtersWrapper}>
                        <div className={style.filter}>
                            <p className={style.filterName}>
                                Цена:
                            </p>
                            <InputRange
                                classNames={{
                                    sliderContainer: style.sliderContainer,
                                    inputRange: style.inputRange,
                                    track: style.track,
                                    slider: style.slider,
                                    minLabel: style.hidden,
                                    maxLabel: style.hidden
                                }}
                                maxValue={max}
                                minValue={min}
                                value={priceRangeValue}
                                onChange={priceRangeValue => this.setPriceRangeValue(priceRangeValue)}
                            />
                            <div className={style.priceInputs}>
                                <input onChange={this.inputChangePrice('min')}
                                       value={priceRangeValue.min}
                                       onBlur={() => this.inputPriceOnBlur('min')}
                                       type="text"/>
                                <input onChange={this.inputChangePrice('max')}
                                       value={priceRangeValue.max}
                                       onBlur={() => this.inputPriceOnBlur('max')}
                                       type="text"/>
                            </div>
                        </div>
                        {filters.map(filter => {
                            return (
                                <ul className={style.filter} id={filter.id} key={filter.id}>
                                    <p className={style.filterName}>
                                        {filter.name}
                                    </p>
                                    {filter.values.map((value, i) => {
                                        return (
                                            <li className={style[filter.type]} key={filter.id + value}>
                                                <input className={style.hidden} type={filter.type} id={value + i}/>
                                                <label htmlFor={value + i}>
                                                    {value}
                                                </label>
                                            </li>)
                                    })}
                                </ul>)
                        })}
                    </nav>
                    <section className={style.products}>
                        {filteredProducts.map(product => {
                            return (
                                <ProductCard
                                    name={product[lang].name}
                                    price={product.price}
                                    img={product.img}
                                    key={product.id}
                                />
                            )
                        })}
                    </section>
                </div>
            </div>)
    }
}

export default connect(mapStateToProps)(ProductsPage);

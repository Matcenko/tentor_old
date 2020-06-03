import React, {Component} from 'react';
import ProductCard from "../../components/ProductCard/ProductCard";
import InputRange from 'react-input-range';
import style from './ProductsPage.module.css';

const products = [<ProductCard/>, <ProductCard/>, <ProductCard/>, <ProductCard/>, <ProductCard/>];
const filters = [
    {
        type: 'radio',
        values: ['Носовые тенты со стеклом', 'Стояночные тенты', 'Тенты на лодки ПВХ'], //проверять на бэке длину строки < 30
        name: 'Тип:',
        id: 'fPe4Fe'
    },
    {
        type: 'radio',
        values: ['Камуфляж', 'Хаки', 'Черный'],
        name: 'Цвет:',
        id: 'fZe4Fe'
    }
];

export default class ProductsPage extends Component {
    state = {
        priceRangeValue: {min: 700, max: 9000},
    };

    inputChange = type => e => {
        this.setState({priceRangeValue: {...this.state.priceRangeValue, [type]: e.target.value}})
    };

    render() {
        const {priceRangeValue, priceRangeValue: {min, max}} = this.state;
        return (
            <div className={style.productsPage}>
                <nav>
                    <ul className={style.categories}>
                        <li>Тенты на лодки</li>
                        <li>Чехлы на лодочные моторы</li>
                        <li>Стояночные жилеты</li>
                        <li>Сумки и рюкзаки для надувных лодок</li>
                        <li>Аксессуары для охоты и рыбалки</li>
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
                                maxValue={9000}
                                minValue={700}
                                value={priceRangeValue}
                                onChange={priceRangeValue => this.setState({priceRangeValue})}/>
                            <div className={style.priceInputs}>
                                <input onChange={this.inputChange('min')} value={min} type="text"/>
                                <input onChange={this.inputChange('max')} value={max} type="text"/>
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
                        {products}
                    </section>
                </div>
            </div>)
    }
};

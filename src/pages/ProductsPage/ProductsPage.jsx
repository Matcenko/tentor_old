import React, {Component} from 'react';
import ProductCard from "../../components/ProductCard/ProductCard";
import style from './ProductsPage.module.css';

const products = [<ProductCard/>, <ProductCard/>, <ProductCard/>, <ProductCard/>, <ProductCard/>];
const filters = [
    {
        type: 'radio',
        values: ['Носовые тенты со стеклом', 'Стояночные тенты', 'Тенты на лодки ПВХ'], //проверять на бэке длину строки < 30
        name: '', // необязательный параметр
        id: 'fPe4Fe'
    },
    {
        type: 'radio',
        values: ['Камуфляж', 'Хаки', 'Черный'],
        name: 'Цвет:',
        id: 'fZe4Fe'
    },
];

export default class ProductsPage extends Component {
    render() {
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
                        {filters.map(filter => {
                            return (
                                <ul className={style.filter} id={filter.id} key={filter.id}>
                                    <p className={style.filterName}>
                                        {filter.name}
                                    </p>
                                    {filter.values.map(value => {
                                        return (
                                            <li className={style[filter.type]}>
                                                <input className={style.hidden} type={filter.type} id={value}/>
                                                <label htmlFor={value}>
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

import React from 'react'
import style from './ProductsSection.module.css';

const productCategories = [
    {
        src: require('./img/category1.png'), name: 'Тенты на надувные лодки', id: 'vsjeih4'
    },
    {
        src: require('./img/category2.png'), name: 'Чехлы на моторы', id: 'vsFeih5'
    },
];

export default () => {
    return (
        <section>
            <header className={style.header}>
                <h1>ТОВАРЫ:</h1>
            </header>
            <div className={style.products}>
                {productCategories.map(product => {
                    return <div key={product.id} className={style.productCategory}>
                        <img src={product.src} alt={product.name}/>
                        <p>{product.name}</p>
                    </div>
                })}
            </div>
        </section>)
};

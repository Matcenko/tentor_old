import React, {Component} from 'react';
import style from './AboutCompanySection.module.css';

export default class AboutCompanySection extends Component {

    render() {
        return (
            <section>
                <header className={style.header}>
                    <h2>О КОМПАНИИ</h2>
                    <img className={style.logo} src={require('../Header/img/logo.svg')} alt="tentor"/>
                </header>
                <div className={style.aboutCompany}>
                    <article className={style.aboutCompanyText}>
                        Компания «TENTOR» — молодая, динамично развивающаяся фирма, основанная в 2013 году
                        специалистами, много лет работавшими на ведущих фирмах такого же направления.
                        <br/><br/>
                        Приоритет нашей компании – это качество выпускаемой продукции, постоянное обновление
                        ассортимента, конкурентные цены.<br/><br/><br/> Вашему вниманию предлагаем большой выбор
                        чехлов на лодочные двигатели, тентов на лодки, мягких накладок, а также других аксессуаров для
                        лодок. И занимается реализацией своей продукции.
                        Вашему вниманию предлагаем большой выбор чехлов на лодочные двигатели, тентов на лодки, мягких
                        накладок,
                        а также других аксессуаров для лодок . И занимается реализацией своей продукции.
                    </article>
                    <div className={style.preferencesWrapper}>
                        <header>Наши преимущества:</header>
                        <div className={style.preferences}>
                            <div>
                                <img src={require('./img/preference.svg')} alt="preference"/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus enim libero nisi
                                    omnis saepe. Corporis debitis error illo laborum magni mollitia nobis ullam</p>
                            </div>
                            <div>
                                <img src={require('./img/preference.svg')} alt="preference"/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa doloremque
                                    dolorum, ea eos eum explicabo fugiat id, illo ipsum iusto minus, optio qui</p>
                            </div>
                            <div>
                                <img src={require('./img/preference.svg')} alt="preference"/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores at atque
                                    consectetur debitis, dignissimos dolorem error ipsum iusto nam, nulla odio ratione.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>)
    }
};

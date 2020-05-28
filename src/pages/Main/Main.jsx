import React, {Component} from 'react';
import '@brainhubeu/react-carousel/lib/style.css';

import TopProductsSection from "../../components/TopProductsSection/TopProductsSection";
import AboutCompanySection from "../../components/AboutCompanySection/AboutCompanySection";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import Slider from "../../components/Slider/Slider";
import style from './Main.module.css';

export default class Main extends Component {
    render() {
        return (
            <main>
                <Slider/>
                <TopProductsSection/>
                <AboutCompanySection/>
                <ProductsSection/>
            </main>)
    }
};

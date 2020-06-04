import React from 'react';

import Slider from "../../components/Slider/Slider";
import TopProductsSection from "../../components/TopProductsSection/TopProductsSection";
import AboutCompanySection from "../../components/AboutCompanySection/AboutCompanySection";
import ProductsSection from "../../components/ProductsSection/ProductsSection";

const MainPage = () => {
    return (
        <main>
            <Slider/>
            <TopProductsSection/>
            <AboutCompanySection/>
            <ProductsSection/>
        </main>)
};

export default MainPage;

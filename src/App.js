import React from 'react';
import './App.css';
import './css/main.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from "./components/Header/Header.jsx";
import Cookies from "./components/Cookies/Cookies";
import MainPage from "./pages/MainPage/MainPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Cookies/>
                <Switch>
                    <Route exact component={MainPage} path='/'/>
                    <Route exact component={ProductsPage} path='/products'/>
                    <Route component={MainPage}/>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

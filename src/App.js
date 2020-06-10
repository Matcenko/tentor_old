import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './css/main.css';
import style from './App.module.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import getStore from "./application/redux/store/getStore";
import Header from "./application/ui/components/Header/Header.jsx";
import Cookies from "./application/ui/components/Cookies/Cookies";
import MainPage from "./application/ui/pages/MainPage/MainPage";
import ProductsPage from "./application/ui/pages/ProductsPage/ProductsPage";
import Footer from "./application/ui/components/Footer/Footer";

const store = getStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className={style.app}>
                        <Cookies/>
                        <div className={style.page}>
                        <Header/>
                            <Switch>
                                <Route exact component={MainPage} path='/'/>
                                <Route exact component={ProductsPage} path='/products'/>
                                <Route component={MainPage}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;

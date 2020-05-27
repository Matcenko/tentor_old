import React from 'react';
import './App.css';
import './css/main.css';

import Header from "./components/Header/Header.jsx";
import Cookies from "./components/Cookies/Cookies";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <Header/>
            <Cookies/>
            {/*<Main/>*/}
            <Footer/>
        </div>
    );
}

export default App;

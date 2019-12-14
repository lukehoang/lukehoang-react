import React, {Component} from 'react';
import {Route} from 'react-router-dom';

//CSS
import style from '../css/style.module.css';
import style_responsive from '../css/style_responsive.module.css';

//Components
import Header from '../Components/header.js';
import Footer from '../Components/footer';

const MainLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <div className="main_layout">
                <Header/>
                <Component {...matchProps}/>
                <Footer/>
            </div>
        )}/>
    )
}

export default MainLayoutRoute;
import React, {Component} from 'react';
import {Route} from 'react-router-dom';


//Components
import Header from '../Components/header.js';
import Footer from '../Components/footer';

const MainLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <div>
                <Header/>
                <Component {...matchProps}/>
                <Footer/>
            </div>
        )}/>
    )
}

export default MainLayoutRoute;
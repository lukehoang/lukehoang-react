import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import style from '../css/allpancakes_style.module.css';


const AllPanCakesLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <div className={style.body_wrapper}>
              
                <Component {...matchProps}/>
               
            </div>
        )}/>
    )
}

export default AllPanCakesLayoutRoute;
import React, {Component} from 'react';
import {Route} from 'react-router-dom';

const AllPanCakesLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <div className="layout">
              
                <Component {...matchProps}/>
               
            </div>
        )}/>
    )
}

export default AllPanCakesLayoutRoute;
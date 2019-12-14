import React, {Component} from 'react';
import {Route} from 'react-router-dom';

const AllPanCakesLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <div>
              
                <Component {...matchProps}/>
               
            </div>
        )}/>
    )
}

export default AllPanCakesLayoutRoute;
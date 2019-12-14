import React, { Component } from 'react';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
  
/** Layouts **/  
import MainLayoutRoute from "../Layouts/MainLayout";  
import AllPanCakesLayoutRoute from "../Layouts/AllPanCakesLayout";  
  
/** Components **/  

import HomePage from './Home';
import ProjectsPage from './Projects';
import ContactPage from './Contact';
import AllPanCakesPage from './AllPanCakes';
  
export default class App extends Component {  
  render() {  
    return (  
      <Router>  
        <Switch>  
          <MainLayoutRoute exact path="/" component={HomePage} />  
          <MainLayoutRoute path="/projects" component={ProjectsPage} />  
          <MainLayoutRoute path="/contact" component={ContactPage} />  
          <AllPanCakesLayoutRoute path="/allpancakes" component={AllPanCakesPage} />  
        </Switch>  
      </Router>  
    );  
  }  
}  
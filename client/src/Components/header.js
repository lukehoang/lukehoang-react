import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

import HomePage from '../Pages/Home';
import ProjectsPage from '../Pages/Projects';
import ContactPage from '../Pages/Contact';

export default class Header extends Component{

    constructor(){
        super()
        this.state = {
            activeClass: 'active'
        }
    }
    
    componentDidMount(){
        alert('ee');
    }
    
    render(){
        return (
            <Router>
                <header>
                    <div className="navigation">
                        <div className="wrapper flex">
                            <div className="brand">
                                <h1><Link to={"/"}>Luke Hoang</Link></h1>
                            </div>
                            <div className="nav">
                                <ul className="navbar">
                                    <li><NavLink exact to="/" activeClassName="actives">Home</NavLink></li>
                                    <li><NavLink to="/projects" activeClassName="actives">Projects</NavLink></li>
                                    <li><NavLink to="/contact" activeClassName="actives">Contact</NavLink></li>
                                </ul>
                                <ul className="social">
                                    <li><a href="https://www.facebook.com/bamboocopterfilm/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.instagram.com/lukemhoang/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="https://github.com/lukehoang" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/lukehoang/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="navigation_mobile">
                        <div className="wrapper flex">
                            <div className="brand">
                                <h1><a href="https://www.lukehoang.com">Luke Hoang</a></h1>
                            </div>
                            <div className="nav_icon">
                                <i className="fa fa-bars fa-2x" aria-hidden="true"></i><i className="fa fa-times fa-2x hidden" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="nav">
                            <ul>
                                <li><Link to="/" className="nav_home">Home</Link></li>
                                <li><Link to="/projects" className="nav_portfolio">Projects</Link></li>
                                <li><Link to="/contact" className="nav_contact">Contact</Link></li>
                            </ul>

                            <ul className="social">
                                <li><a href="https://www.facebook.com/bamboocopterfilm/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.instagram.com/lukemhoang/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="https://github.com/lukehoang" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/lukehoang/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </header>

                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/projects" component={ProjectsPage}/>
                    <Route path="/contact" component={ContactPage}/>
                </Switch>
                
            </Router>
        );
    }
}

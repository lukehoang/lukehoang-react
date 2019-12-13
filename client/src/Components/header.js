import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import HomePage from '../Pages/Home';
import ProjectsPage from '../Pages/Projects';
import ContactPage from '../Pages/Contact';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: true,
            close: false,
            animated: false
        }
    }

    toggleMenu(name){
        if(name === 'open'){
            this.setState({
                open: false,
                close: true,
                animated: true
            });
        }else if(name === 'close'){
            this.setState({
                open: true,
                close: false,
                animated: false
            });
        }
    }
    render(){
        return (
            <Router>
                <header>
                    <div className="navigation">
                        <div className="wrapper flex">
                            <div className="brand">
                                <h1><NavLink exact to="/">Luke Hoang</NavLink></h1>
                            </div>
                            <div className="nav">
                                <ul className="navbar">
                                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                                    <li><NavLink exact to="/projects" activeClassName="active">Projects</NavLink></li>
                                    <li><NavLink exact to="/contact" activeClassName="active">Contact</NavLink></li>
                                </ul>
                                <ul className="social">
                                    <li><a href="https://www.facebook.com/bamboocopterfilm/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.instagram.com/lukemhoang/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="https://github.com/lukehoang" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/lukehoang/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="navigation_mobile">
                        <div className="wrapper flex">
                            <div className="brand">
                                <h1><NavLink exact to="/">Luke Hoang</NavLink></h1>
                            </div>
                            <div className="nav_icon">
                                <i className={`fa fa-bars fa-2x ${!this.state.open ? 'hidden' : ''}`} aria-hidden="true" onClick={()=>(this.toggleMenu('open'))}></i><i className={`fa fa-times fa-2x ${!this.state.close ? 'hidden' : ''}`} aria-hidden="true" onClick={()=>(this.toggleMenu('close'))}></i>
                            </div>
                        </div>
                        <div className={`nav ${this.state.animated ? 'animated' : ''}`}>
                            <ul>
                                <li><NavLink exact to="/"  activeClassName="active" onClick={()=>(this.toggleMenu('close'))}>Home</NavLink></li>
                                <li><NavLink to="/projects" activeClassName="active" onClick={()=>(this.toggleMenu('close'))}>Projects</NavLink></li>
                                <li><NavLink to="/contact" activeClassName="active" onClick={()=>(this.toggleMenu('close'))}>Contact</NavLink></li>
                            </ul>

                            <ul className="social">
                                <li><a href="https://www.facebook.com/bamboocopterfilm/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.instagram.com/lukemhoang/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="https://github.com/lukehoang" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/lukehoang/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </header>

                
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/projects" component={ProjectsPage}/>
                    <Route path="/contact" component={ContactPage}/>
                
                
            </Router>
        );
    }
}

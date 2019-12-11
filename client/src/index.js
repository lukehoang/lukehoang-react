import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//Pages
import HomePage from './Pages/Home';
import ProjectsPage from './Pages/Projects';
//Components
import Footer from './Components/footer';


const routing = (
    <Router>
        <header>
            <div className="navigation">
                <div className="wrapper flex">
                    <div className="brand">
                        <h1><Link to={"/"}>Luke Hoang</Link></h1>
                    </div>
                    <div className="nav">
                        <ul className="navbar">
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
            <Route path="/about" component={ProjectsPage}/>
        </Switch>

        <Footer></Footer>
    </Router>

);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
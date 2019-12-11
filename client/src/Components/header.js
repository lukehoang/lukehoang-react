import React, {Component} from 'react';

export default class Header extends Component{
    render(){
        return (
            <header>
                <div className="navigation">
                    <div className="wrapper flex">
                        <div className="brand">
                            <h1><a href="https://www.lukehoang.com">Luke Hoang</a></h1>
                        </div>
                        <div className="nav">
                            <ul className="navbar">
                                <li><a href="https://www.lukehoang.com" className="nav_home">Home</a></li>
                                <li><a href="portfolio.php" className="nav_portfolio">Portfolio</a></li>
                                <li><a href="contact.php" className="nav_contact">Contact</a></li>
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
                            <li><a href="https://www.lukehoang.com" className="">Home</a></li>
                            <li><a href="portfolio.php">Portfolio</a></li>
                            <li><a href="contact.php">Contact</a></li>
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
        );
    }
}

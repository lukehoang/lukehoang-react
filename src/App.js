import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div class="navigation">
          <div class="wrapper flex">
              <div class="brand">
                  <h1><a href="https://www.lukehoang.com">Luke Hoang</a></h1>
              </div>
              <div class="nav">
                  <ul class="navbar">
                      <li><a href="https://www.lukehoang.com" class="nav_home">Home</a></li>
                      <li><a href="portfolio.php" class="nav_portfolio">Portfolio</a></li>
                      <li><a href="contact.php" class="nav_contact">Contact</a></li>
                  </ul>
                  <ul class="social">
                      <li><a href="https://www.facebook.com/bamboocopterfilm/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                      <li><a href="https://www.instagram.com/lukemhoang/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                      <li><a href="https://github.com/lukehoang" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/lukehoang/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i>
                      </a></li>
                  </ul>
              </div>
          </div>
      </div>
    );
  }
}

export default App;

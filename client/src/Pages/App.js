import React, { Component } from 'react';
import Footer from '../Components/footer';
import Home from '../Components/home';

export default class App extends Component {
  render() {
    return (
      <div className="body-wrapper">
        <Home></Home>
        <Footer></Footer>
      </div>
    );
  }
}

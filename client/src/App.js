import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Home from './Components/home';

class App extends Component {
  render() {
    return (
      <div className="body-wrapper">
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

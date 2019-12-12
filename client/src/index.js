import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//CSS
import './css/style.css';
import './css/style_responsive.css';

//JS
import './js/script.js';



//Components
import Header from './Components/header';
import Footer from './Components/footer';


const routing = (

    <div>
        <Header></Header>
        <Footer></Footer> 
    </div>

);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

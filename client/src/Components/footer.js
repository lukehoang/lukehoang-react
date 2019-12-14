import React, {Component} from 'react';
import style from '../css/style.module.css';

export default class Footer extends Component {
    render(){
        return(
            <div className={style.footer}>
                <div className={`${style.wrapper} ${style.flex}`}>
                    <div className={style.copy}>
                        <p>&copy;2019 &#9866; <a href="https://www.lukehoang.com">Lukehoang.com</a></p>
                    </div>
                </div>
            </div>
        );
    }
}
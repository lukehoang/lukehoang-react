import React, { Component } from 'react';
import style from '../css/style.module.css';

export default class ContactPage extends Component {
    render(){
        return(
            <div className={`${style.main} ${style.contact}`}>

                <div className={style.wrapper}>
                    <div className={`${style.content} ${style.flex}`}>
                        <div className={style.header_nav}>
                            <h1 className={style.headline}>
                                Drop me a line of code!
                            </h1>
                            <div className={style.copy}>
                                <p>Just kidding <i className="fa fa-smile-o fa-lg" aria-hidden="true"></i> Leave me a message, <br/> I try my best to response to all sort of questions.</p>
                            </div>

                        </div>
                        <div className={`${style.form} ${style.box}`}>
                            <div className={style.card}>
                                <form action="">
                                    <div className={style.row}>
                                        <input type="text" placeholder="Your Name"/>
                                    </div>
                                    <div className={style.row}>
                                        <input type="email" placeholder="Your Email"/>
                                    </div>
                                    <div className={style.row}>
                                        <input type="phone" placeholder="Your Number"/>
                                    </div>
                                    <div className={style.row}>
                                        <textarea name="" id="" rows="5" placeholder="Comment..."></textarea>
                                    </div>
                                    <div className={style.row}>
                                        <button className={`${style.btn} ${style.btn_send}`}>Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
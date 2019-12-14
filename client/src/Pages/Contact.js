import React, { Component } from 'react';

export default class ContactPage extends Component {
    render(){
        return(
            <div className="main contact">

                <div className="wrapper">
                    <div className="content flex">
                        <div className="header_nav">
                            <h1 className="headline">
                                Drop me a line of code!
                            </h1>
                            <div className="copy">
                                <p>Just kidding <i className="fa fa-smile-o fa-lg" aria-hidden="true"></i> Leave me a message, <br/> I try my best to response to all sort of questions.</p>
                            </div>

                        </div>
                        <div className="form box">
                            <div className="card">
                                <form action="">
                                    <div className="row">
                                        <input type="text" placeholder="Your Name"/>
                                    </div>
                                    <div className="row">
                                        <input type="email" placeholder="Your Email"/>
                                    </div>
                                    <div className="row">
                                        <input type="phone" placeholder="Your Number"/>
                                    </div>
                                    <div className="row">
                                        <textarea name="" id="" rows="5" placeholder="Comment..."></textarea>
                                    </div>
                                    <div className="row">
                                        <button className="btn btn_send">Send</button>
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
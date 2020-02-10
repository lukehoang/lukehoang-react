import React, { Component } from 'react';

import style from '../css/style.module.css';

export default class ProjectsPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            box_1: false,
            box_2: false,
            box_3: false,
            box_4: false,
            box_5: true
        }
    }

    handleHoverIn(name){
        if(name === 'box_1'){
            this.setState({
                box_1: true,
                box_2: false,
                box_3: false,
                box_4: false,
                box_5: false
            });
        }else if(name === 'box_2'){
            this.setState({
                box_1: false,
                box_2: true,
                box_3: false,
                box_4: false,
                box_5: false
            });
        }else if(name === 'box_3'){
            this.setState({
                box_1: false,
                box_2: false,
                box_3: true,
                box_4: false,
                box_5: false
            });
        }else if(name === 'box_4'){
            this.setState({
                box_1: false,
                box_2: false,
                box_3: false,
                box_4: true,
                box_5: false
            });
        }else if(name === 'box_5'){
            this.setState({
                box_1: false,
                box_2: false,
                box_3: false,
                box_4: false,
                box_5: true
            });
        }
    }

    render(){
        return(
            <div className={`${style.main} ${style.home} ${style.portfolio}`}>

                <div className={style.wrapper}>
                    <div className={`${style.content} ${style.flex}`}>
                        <div className={`${style.header_nav} ${style.keyframes_slidein}`}>

                            <h1> <a className={`${style.h1_desktop} ` + (this.state.box_1 ? `${style.active}` : '' )} target="_blank" onClick={() => this.handleHoverIn('box_1')} >PRG</a></h1>

                            <h1> <a className={`${style.h1_desktop} ` + (this.state.box_2 ? `${style.active}` : '' )} target="_blank" onClick={() => this.handleHoverIn('box_2')} >All Pancakes</a></h1>
                            
                            <h1> <a className={`${style.h1_desktop} ` + (this.state.box_3 ? `${style.active}` : '' )} target="_blank" onClick={() => this.handleHoverIn('box_3')} >InfraShares</a></h1>

                            <h1> <a className={`${style.h1_desktop} ` + (this.state.box_4 ? `${style.active}` : '' )} target="_blank" onClick={() => this.handleHoverIn('box_4')} >GSL Banking</a></h1>

                            <h1> <a className={`${style.h1_desktop} ` + (this.state.box_5 ? `${style.active}` : '' )} target="_blank" onClick={() => this.handleHoverIn('box_5')} >Bamboocopter</a></h1>
                           
                        </div>
        
                        <div className={`${style.box} ${style.box_1}`} style={{ opacity: this.state.box_1 ? 1 : 0, zIndex: this.state.box_1 ? 99 : 1}}>
                           <div className={style.techs}>
                                <div className={style.item}>
                                    html/css
                                </div>
                                <div className={style.item}>
                                    Javascript
                                </div>
                                <div className={style.item}>
                                    jQuery
                                </div>
                                <div className={style.item}>
                                    PHP
                                </div>
                                <div className={style.item}>
                                    MySQL
                                </div>
                                <div className={`${style.item} ${style.view_site}`}>
                                    <a href="https://precisionrollgrinders.com" target="_blank">Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.box} ${style.box_2}`} style={{ opacity: this.state.box_2 ? 1 : 0, zIndex: this.state.box_2 ? 99 : 1}}>
                            <div className={style.techs}>
                                <div className={style.item}>
                                    html/css
                                </div>
                                <div className={style.item}>
                                    React
                                </div>
                                <div className={`${style.item} ${style.view_site}`}>
                                    <a href="/allpancakes" target="_blank">Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.box} ${style.box_3}`} style={{ opacity: this.state.box_3 ? 1 : 0, zIndex: this.state.box_3 ? 99 : 1}}>
                            <div className={style.techs}>
                                <div className={style.item}>
                                    WordPress
                                </div>
                                <div className={style.item}>
                                    PHP
                                </div>
                                <div className={`${style.item} ${style.view_site}`}>
                                    <a href="https://infrashares.com/" target="_blank">Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.box} ${style.box_4}`} style={{opacity: this.state.box_4 ? 1 : 0, zIndex: this.state.box_4 ? 99 : 1}}>
                             <div className={style.techs}>
                                <div className={style.item}>
                                    html/css
                                </div>
                                <div className={style.item}>
                                    Javascript
                                </div>
                                <div className={style.item}>
                                    jQuery
                                </div>
                                <div className={style.item}>
                                    PHP
                                </div>
                                <div className={style.item}>
                                    MySQL
                                </div>
                                <div className={`${style.item} ${style.view_site}`}>
                                    <a href="https://gslsavingsbank.com/" target="_blank">Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.box} ${style.box_5}`} style={{ opacity: this.state.box_5 ? 1 : 0, zIndex: this.state.box_5 ? 99 : 1}}>
                             <div className={style.techs}>
                                <div className={style.item}>
                                    React
                                </div>
                                <div className={style.item}>
                                    Node
                                </div>
                                <div className={style.item}>
                                    MongoDB
                                </div>
                                <div className={`${style.item} ${style.view_site}`}>
                                    <a href="https://bamboocopter.net" target="_blank">Demo</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
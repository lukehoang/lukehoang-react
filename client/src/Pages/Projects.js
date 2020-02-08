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

                            <h1> <a href="https://precisionrollgrinders.com" className={`${style.h1_title_1} ${style.h1_desktop}`} target="_blank" onMouseEnter={() => this.handleHoverIn('box_1')} >PRG</a></h1>

                            <h1> <a href="/allpancakes" className={`${style.h1_title_2} ${style.h1_desktop}`} target="_blank" onMouseEnter={() => this.handleHoverIn('box_2')} >All Pancakes</a></h1>
                            
                            <h1> <a href="https://infrashares.com" className={`${style.h1_title_3} ${style.h1_desktop}`} target="_blank" onMouseEnter={() => this.handleHoverIn('box_3')} >InfraShares</a></h1>

                            <h1> <a href="https://gslsavingsbank.com" className={`${style.h1_title_4} ${style.h1_desktop}`} target="_blank" onMouseEnter={() => this.handleHoverIn('box_4')} >GSL Banking</a></h1>

                            <h1> <a href="https://bamboocopter.net/" className={`${style.h1_title_5} ${style.h1_desktop}`} target="_blank" onMouseEnter={() => this.handleHoverIn('box_5')} >Bamboocopter</a></h1>
                           
                           
                        </div>
        
                        <div className={`${style.box} ${style.box_1}`} style={{cursor: "pointer", opacity: this.state.box_1 ? 1 : 0, zIndex: this.state.box_1 ? 99 : 1}}  onClick={()=> window.open('https://precisionrollgrinders.com', '_blank')}>
                        </div>
                        <div className={`${style.box} ${style.box_2}`} style={{cursor: "pointer", opacity: this.state.box_2 ? 1 : 0, zIndex: this.state.box_2 ? 99 : 1}}  onClick={()=> window.open('/allpancakes', '_blank')}>
                        </div>
                        <div className={`${style.box} ${style.box_3}`} style={{cursor: "pointer", opacity: this.state.box_3 ? 1 : 0, zIndex: this.state.box_3 ? 99 : 1}}  onClick={()=> window.open('https://infrashares.com/', '_blank')}>
                        </div>
                        <div className={`${style.box} ${style.box_4}`} style={{cursor: "pointer", opacity: this.state.box_4 ? 1 : 0, zIndex: this.state.box_4 ? 99 : 1}}  onClick={()=> window.open('https://gslsavingsbank.com/', '_blank')}>
                        </div>
                        <div className={`${style.box} ${style.box_5}`} style={{cursor: "pointer", opacity: this.state.box_5 ? 1 : 0, zIndex: this.state.box_5 ? 99 : 1}} onClick={()=> window.open('https://bamboocopter.net/', '_blank')}>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
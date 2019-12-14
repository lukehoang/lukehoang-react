import React, { Component } from 'react';

export default class ProjectsPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            box_2: true,
            box_3: false,
            box_5: false
        }
    }

    handleHoverIn(name){
        if(name === 'box_2'){
            this.setState({
                box_2: true,
                box_3: false,
                box_5: false
            });
        }else if(name === 'box_3'){
            this.setState({
                box_2: false,
                box_3: true,
                box_5: false
            });
        }else if(name === 'box_5'){
            this.setState({
                box_2: false,
                box_3: false,
                box_5: true
            });
        }
    }

    render(){
        return(
            <div className="main home portfolio">

                <div className="wrapper">
                    <div className="content flex">
                        <div className="header_nav keyframes_slidein">
                            <h1> <a href="https://selfielikeapro.com/" className="h1_title_5 h1_desktop" onMouseEnter={() => this.handleHoverIn('box_5')} >SelfieLikeAPro</a></h1>
                            
                            <h1> <a href="/allpancakes" className="h1_title_2 h1_desktop" onMouseEnter={() => this.handleHoverIn('box_2')} >All Pancakes</a></h1>
                            <h1> <a href="https://infrashares.com" className="h1_title_3 h1_desktop" onMouseEnter={() => this.handleHoverIn('box_3')} >InfraShares</a></h1>
                           
                        </div>
        
                        <div className="box box_5" style={{cursor: "pointer", opacity: this.state.box_5 ? 1 : 0, zIndex: this.state.box_5 ? 99 : 1}} onClick={()=> window.open('https://selfielikeapro.com/', '_blank')}>
                        </div>
                     
                        <div className="box box_2" style={{cursor: "pointer", opacity: this.state.box_2 ? 1 : 0, zIndex: this.state.box_2 ? 99 : 1}}  onClick={()=> window.open('/allpancakes', '_blank')}>
                        </div>
                        <div className="box box_3" style={{cursor: "pointer", opacity: this.state.box_3 ? 1 : 0, zIndex: this.state.box_3 ? 99 : 1}}  onClick={()=> window.open('https://infrashares.com/', '_blank')}>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
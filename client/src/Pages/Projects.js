import React, { Component } from 'react';

export default class ProjectsPage extends Component {
    render(){
        return(
            <div className="main home portfolio">
                <div className="wrapper">
                    <div className="content flex">
                        <div className="header_nav keyframes_slidein">
                            <h1> <a href="https://selfielikeapro.com/" className="h1_title_5 h1_desktop">SelfieLikeAPro</a></h1>
                            
                            <h1> <a href="allpancakes.php" className="h1_title_2 h1_desktop">All Pancakes</a></h1>
                            <h1> <a href="https://infrashares.com" className="h1_title_3 h1_desktop">InfraShares</a></h1>
                           
                        </div>
        
                        <div className="box box_5" style={{cursor: "pointer"}}>
                        </div>
                     
                        <div className="box box_2" style={{cursor: "pointer"}}>
                        </div>
                        <div className="box box_3" style={{cursor: "pointer"}}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
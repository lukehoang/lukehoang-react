import React, { Component } from 'react';
import logo_temple from '../img/logo_temple.png';
import logo_oxford from '../img/logo_oxford.png';
import profile from '../img/profile.jpg';


export default class HomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            profile_opacity: true,
            info_opacity: false,
            skills_opacity: false,
            exp_opacity: false
        }
    }

    handleHoverIn(name){
        if(name === 'bio'){
            this.setState({
                profile_opacity: false,
                info_opacity: true,
                skills_opacity: false,
                exp_opacity: false
            });
        }else if(name === 'skills'){
            this.setState({
                profile_opacity: false,
                info_opacity: false,
                skills_opacity: true,
                exp_opacity: false
            });
        }else if(name === 'exp'){
            this.setState({
                profile_opacity: false,
                info_opacity: false,
                skills_opacity: false,
                exp_opacity: true
            });
        }
    }
    handleHoverOut(){
        this.setState({
            profile_opacity: true,
            info_opacity: false,
            skills_opacity: false,
            exp_opacity: false
        });
    }

  render() {
    return(
      <div className="home-wrapper">

        <div className="main home">
            <div className="wrapper">
                <div className="content flex">
                    <div className="header_nav keyframes_slidein">
                        <h1> <a href="" className="bio h1_desktop" onMouseEnter={() => this.handleHoverIn('bio')} onMouseLeave={() => this.handleHoverOut()}>BIO</a></h1>
                        <h1> <a href="" className="skills h1_desktop" onMouseEnter={() => this.handleHoverIn('skills')} onMouseLeave={() => this.handleHoverOut()}>SKILLS</a></h1>
                        <h1> <a href="" className="experiences h1_desktop" onMouseEnter={() => this.handleHoverIn('exp')} onMouseLeave={() => this.handleHoverOut()}>EXPERIENCES</a></h1>
                    </div>
                    <div className="profile_mobile">
                        <img src={profile}/>
                    </div>
                    <div className="box profile_box keyframes_fadein">
                        <div className="profile" style={{opacity: this.state.profile_opacity ? 1 : 0}}>
                        </div>
                    </div>
                    <div className="box info" id="info" style={{opacity: this.state.info_opacity ? 1 : 0}}>
                        <div>
                            <div className="title">
                                <h3 className="headline">
                                    Full-Stack <br/>
                                    Web Developer
                                </h3>
                            </div>
                            <div className="copy">
                                <p>Passionate web developer based in Philadelphia, PA. I like to keep everything simple. My goals are focus on content and conveying the message that what you want to send to your audiences.</p>
                                <p>I'm also working on my Photo - Videographer hobby and love to capture every special moment that can't be rolled back ever again.</p>
                            </div>
                        </div>
                    </div>



                    <div className="box skills_box" id="skills" style={{opacity: this.state.skills_opacity ? 1 : 0}}>
                        <div>
                            <div className="skill">
                                <h3>Front-End</h3>
                                <p>HTML/CSS/Javascript/jQuery/React.Js/Bootstrap</p>
                                <div className="bar front_end">
                                    <div className="black"></div>
                                    <div className="white"></div>
                                </div>
                            </div>


                            <div className="skill">
                                <h3>Back-End</h3>
                                <p>PHP/cakePHP/C#/.Net/Node/REST API</p>
                                <div className="bar back_end">
                                    <div className="black"></div>
                                    <div className="white"></div>
                                </div>
                            </div>


                            <div className="skill">
                                <h3>Database</h3>
                                <p>SQL/MySQL</p>
                                <div className="bar database">
                                    <div className="black"></div>
                                    <div className="white"></div>
                                </div>
                            </div>

                            <div className="skill">
                                <h3>WordPress</h3>
                                <p>CMS/gutenberg/eCommerce</p>
                                <div className="bar wordpress">
                                    <div className="black"></div>
                                    <div className="white"></div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="box experiences_box" id="experiences" style={{opacity: this.state.exp_opacity ? 1 : 0}}>
                        <div className="timeline">
                            <div className="entry">
                                <div className="title">
                                    <h3>2016 - 2017</h3>
                                </div>
                                <div className="body">
                                    <p>Self-taught HTML, CSS, JS, PHP, SQL</p>
                                </div>
                            </div>
                            <div className="entry">
                                <div className="title">
                                    <h3>Summer 2018</h3>
                                    <p>FreeLance</p>
                                    <p>CGPC Solution</p>
                                </div>
                                <div className="body">
                                    <p>Design and Code responsive Web pages using user interface best practices.</p>
                                </div>
                            </div>

                            <div className="entry">
                                <div className="title">
                                    <h3>Summer 2018</h3>
                                    <p>Intern</p>
                                </div>
                                <div className="body">
                                    <p>Work with an established team of developers and interact with product managers, marketing teams and designers. <br/>

                                    Involved in web application development. Coordinated with QA testers for end-to-end unit testing and post-production testing</p>
                                </div>
                            </div>

                            <div className="entry">
                                <div className="title">
                                    <h3>Fall 2018</h3>
                                    
                                    <img src={logo_temple} />
                                </div>
                                <div className="body">
                                    <p>Bachelor of Science</p>
                                    <p>Information Science and Technology</p>
                                </div>
                            </div>

                            <div className="entry">
                                <div className="title">
                                    <h3>Spring 2019</h3>
                                    <p>Full-Stack Developer</p>
                                    <img src={logo_oxford} />
                                </div>
                                <div className="body">
                                    <p>Designing and developing full-stack applications across multiple platforms using modern industry-adopted languages and PHP frameworks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    );
  }
}

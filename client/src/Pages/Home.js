import React, { Component } from 'react';
import logo_temple from '../img/logo_temple.png';
import logo_oxford from '../img/logo_oxford.png';
import profile from '../img/profile.jpg';
import { NavLink } from 'react-router-dom';

import style from '../css/style.module.css';

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
      <div className={style.home_wrapper}>

        <div className={`${style.main} ${style.home}`}>
            <div className={style.wrapper}>
                <div className={`${style.content} ${style.flex}`}>
                    <div className={`${style.header_nav} ${style.keyframes_slidein}`}>
                        <h1> <a className={`${style.bio} ${style.h1_desktop} ` + (this.state.info_opacity ? `${style.active}` : '' )} onClick={() => this.handleHoverIn('bio')}>About</a></h1>
                        <h1> <a className={`${style.experiences} ${style.h1_desktop} ` + (this.state.exp_opacity ? `${style.active}` : '' )} onClick={() => this.handleHoverIn('exp')}>Experiences</a></h1>
                        <h1> <a className={`${style.skills} ${style.h1_desktop} ` + (this.state.skills_opacity ? `${style.active}` : '' )} onClick={() => this.handleHoverIn('skills')}>Skills</a></h1>
                        <h1><NavLink to="/projects" className={`${style.h1_desktop}`}>Works</NavLink></h1>
                    </div>
                    <div className={style.profile_mobile}>
                        <img src={profile}/>
                    </div>
                    <div className={`${style.box} ${style.profile_box} ${style.keyframes_fadein}`}>
                        <div className={style.profile} style={{opacity: this.state.profile_opacity ? 1 : 0}}>
                        </div>
                    </div>
                    <div className={`${style.box} ${style.info}`} id={style.info} style={{zIndex: this.state.info_opacity ? 9 : 0, opacity: this.state.info_opacity ? 1 : 0}}>
                        <div>
                            <div className={style.info_img}><img src={profile}/></div>
                            <div className={style.title}>
                                <h3 className={style.headline}>
                                    Full-Stack <br/>
                                    Web Developer
                                </h3>
                            </div>
                            <div className={style.copy}>
                                <p>Hi! My name is Luke Hoang, a passionate web developer and photographer based in Philadelphia, PA. Many years ago, I learned coding by creating my photography website <a className={style.color_link} href="https://bamboocopter.net" target="_blank">Bamboocopter.net</a>, because I couldn't afford to pay someone to do it <i className="fa fa-smile-o fa-lg" aria-hidden="true"></i>. My journey to become a coder has started since then.</p>
                                <p>I like to keep things simple and focus on conveying the message that what you want to send to your audiences.</p>
                                <NavLink className={`${style.btn} ${style.btn_sm}`} to="/contact">Let's talk</NavLink>
                                <p><strong>"Choose a job you love, and you will never have to work a day in your life."</strong></p>
                            </div>
                        </div>
                    </div>


                    <div className={`${style.box} ${style.experiences_box}`} id={style.experiences} style={{zIndex: this.state.exp_opacity ? 9 : 0, opacity: this.state.exp_opacity ? 1 : 0}}>
                        <div className={style.timeline}>
                            <div className={style.entry}>
                                <div className={style.title}>
                                    <h3>2016 - 2017</h3>
                                </div>
                                <div className={style.body}>
                                    <p>Self-taught HTML, CSS, JS, PHP, SQL</p>
                                </div>
                            </div>
                            <div className={style.entry}>
                                <div className={style.title}>
                                    <h3>Summer 2018</h3>
                                    <p>FreeLance</p>
                                    <p>CGPC Solution</p>
                                </div>
                                <div className={style.body}>
                                    <p>Design and Code responsive Web pages using user interface best practices.</p>
                                </div>
                            </div>

                            <div className={style.entry}>
                                <div className={style.title}>
                                    <h3>Summer 2018</h3>
                                    <p>Intern</p>
                                </div>
                                <div className={style.body}>
                                    <p>Work with an established team of developers and interact with product managers, marketing teams and designers. <br/>

                                    Involved in web application development. Coordinated with QA testers for end-to-end unit testing and post-production testing</p>
                                </div>
                            </div>

                            <div className={style.entry}>
                                <div className={style.title}>
                                    <h3>Fall 2018</h3>
                                    
                                    <img src={logo_temple} />
                                </div>
                                <div className={style.body}>
                                    <p>Bachelor of Science</p>
                                    <p>Information Science and Technology</p>
                                </div>
                            </div>

                            <div className={style.entry}>
                                <div className={style.title}>
                                    <h3>Spring 2019</h3>
                                    <p>Full-Stack Developer</p>
                                    <img src={logo_oxford} />
                                </div>
                                <div className={style.body}>
                                    <p>Designing and developing full-stack applications across multiple platforms using modern industry-adopted languages and PHP frameworks</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className={`${style.box} ${style.skills_box}`} id={style.skills} style={{zIndex: this.state.skills_opacity ? 9 : 0, opacity: this.state.skills_opacity ? 1 : 0}}>
                        <div>
                            <h3>This page was built using React.js</h3>
                            <div className={style.skill}>
                                <h3>Front-End</h3>
                                <p>Javascript/jQuery/React.Js/Bootstrap</p>
                                <div className={`${style.bar} ${style.front_end}`}>
                                    <div className={style.black}></div>
                                    <div className={style.white}></div>
                                </div>
                            </div>


                            <div className={style.skill}>
                                <h3>Back-End</h3>
                                <p>PHP/Node/C#/REST API</p>
                                <div className={`${style.bar} ${style.back_end}`}>
                                    <div className={style.black}></div>
                                    <div className={style.white}></div>
                                </div>
                            </div>


                            <div className={style.skill}>
                                <h3>Database</h3>
                                <p>MySQL/MongoDB</p>
                                <div className={`${style.bar} ${style.database}`}>
                                    <div className={style.black}></div>
                                    <div className={style.white}></div>
                                </div>
                            </div>

                            <div className={style.skill}>
                                <h3>WordPress</h3>
                                <p>CMS/gutenberg/eCommerce</p>
                                <div className={`${style.bar} ${style.wordpress}`}>
                                    <div className={style.black}></div>
                                    <div className={style.white}></div>
                                </div>
                            </div>
                            <div className={style.skill}>
                                <NavLink className={`${style.btn} ${style.btn_sm}`} to="/contact">See my works</NavLink>
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

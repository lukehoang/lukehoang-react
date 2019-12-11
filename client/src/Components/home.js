import React, {Component} from 'react';

export default class Home extends Component {
    render(){
        return(
            <div className="home-wrapper">
                <div className="main home">
                    <div className="wrapper">
                        <div className="content flex">
                            <div className="header_nav keyframes_slidein">
                                <h1> <a href="" className="bio h1_desktop">BIO</a></h1>
                                <h1> <a href="" className="skills h1_desktop">SKILLS</a></h1>
                                <h1> <a href="" className="experiences h1_desktop">EXPERIENCES</a></h1>
                            </div>
                            <div className="profile_mobile">
                                <img src={"img/profile.jpg"}/>
                            </div>
                            <div className="box profile_box keyframes_fadein">
                                <div className="profile">
                                </div>
                            </div>
                            <div className="box info" id="info">
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



                            <div className="box skills_box" id="skills">
                                <div>
                                    <div className="skill">
                                        <h3>Front-End</h3>
                                        <p>HTML/CSS/Javascript/jQuery/Bootstrap</p>
                                        <div className="bar front_end">
                                            <div className="black"></div>
                                            <div className="white"></div>
                                        </div>
                                    </div>


                                    <div className="skill">
                                        <h3>Back-End</h3>
                                        <p>PHP/cakePHP/C#/.Net/REST API</p>
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
                                        <p>CMS/eCommerce</p>
                                        <div className="bar wordpress">
                                            <div className="black"></div>
                                            <div className="white"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="box experiences_box" id="experiences">
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
                                            
                                            <img src={"img/logo_temple.png"} />
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
                                            <img src={"img/logo_oxford.png"} />
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
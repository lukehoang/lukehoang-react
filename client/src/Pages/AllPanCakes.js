import React, {Component} from 'react';

//CSS
import style from '../css/allpancakes_style.module.css';

//images
import hero_1 from '../img/allpancakes/hero-1.jpeg';
import hero_2 from '../img/allpancakes/hero-2.jpeg';
import hero_3 from '../img/allpancakes/hero-3.jpeg';
import img_1 from'../img/allpancakes/1.jpeg';
import img_3 from'../img/allpancakes/3.jpeg';
import restaurant from'../img/allpancakes/restaurant.jpeg';
import testimonial from'../img/allpancakes/testimonial.jpeg';

export default class AllPanCakesPage extends Component{
    render(){
        return (
            <div>

                <section className={style.navigation_desktop} id="top">
                    <div className={style.wrapper}>
                        <div className={`${style.container} ${style.flex}`}>
                            <div className={`${style.brand} ${style.flex}`}>
                                <div className={style.logo}>
                                    <h1>All Pancakes</h1>
                                </div>
                            </div>
                            <div className={style.nav}>
                                <ul className={style.flex}>
                                    <li>
                                        <a className={style.nav_menu_item_link} href="#menu">Menu</a>
                                    </li>
                                    <li>
                                        <a className={style.nav_menu_item_link} href="#about">About</a>
                                    </li>
                                    <li>
                                        <a className={style.nav_menu_item_link} href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={style.menu_icon}>
                                <div className={style.icon}>
                                    <i className="fa fa-bars" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!-- Nav mobile --> */}
                <section className={style.navigation_mobile}>
                    <div className={`${style.wrapper} ${style.flex}`}>

                        <span className={style.btn_close}><i aria-hidden="true" className="fa fa-times fa-2x"></i></span>
                        <div className={style.nav}>
                            <div className={style.search_box}>
                                <input className={style.search} placeholder="" type="text" />
                            </div>
                            <ul>
                                <li>
                                    <a className={style.nav_menu_item_link} href="#menu">Menu</a>
                                </li>
                                <li>
                                    <a className={style.nav_menu_item_link} href="#about">About</a>
                                </li>
                                <li>
                                    <a className={style.nav_menu_item_link} href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </section>
                {/* <!-- Navigation --> */}
                




                <section className={style.common_hero}> 
                    <div className={style.wrapper}>
                        <div className={`${style.hero_image} ${style.full_height}`} style={{backgroundImage: `url(${hero_1})`}}>
                            <div className={`${style.overlay} ${style.overlay_hero}`}>
                                <div className={`${style.container} ${style.content}`}>
                                    <div className={style.copy}>
                                        <div className={style.subtitle}>All About</div>
                                        <div className={style.title}>Pancakes</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                
                {/* <!-- Common left align block / auto align left--> */}
                <section className={`${style.common_content} ${style.block_1}`}  data-aos="fade-down">
                    <div className={style.wrapper}>
                        <div className={style.container}>
                            
                            <div className={`${style.img_text} ${style.flex_container}`}>
                            
                                <div className={style.img} style={{backgroundImage: `url(${img_1})`}}></div>
                                <div className={`${style.text} ${style.flex_container} ${style.text_align_center}`}>
                                    
                                    <div>
                                        <h1>Welcome to AllPancakes</h1>
                                        <p>One of the latest additions to Philadelphia's pancake family, brings a modern (and healthier) twist to the traditional dish. Pancakes are made with spelt or oat flour, and you'll find a range of fresh, healthy juices to accompany. </p> 
                                        
                                        <button className={style.btn}>Call Now</button>
                                        
                                    </div>    
                                </div>
                                <div className={style.img} style={{backgroundImage: `url(${img_3})`}}></div>

                            </div>
                        </div>
                    </div>
                </section>

            




                {/* <!-- Common Hero block / auto align left--> */}
                <section className={style.common_hero}> 
                    <div className={style.wrapper}>
                        <div className={style.hero_image} style={{backgroundImage: `url(${hero_2})`, backgroundAttachment: "fixed"}}>
                            <div className={`${style.overlay} ${style.overlay_hero}`}>
                                <div className={`${style.container} ${style.content}`}>
                                    <div className={style.copy}>
                                        <div className={style.title}>Our Specialties</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className={`${style.common_content} ${style.block_2}`}  data-aos="fade-down" id="menu">
                    <div className={style.wrapper}>
                        <div className={`${style.container} ${style.flex_container}`}>
                            <div>

                                <h1 className={style.text_align_center}>Menu</h1>
                                <h4 className={style.text_align_center}>Explore texture, color and of course the ultimate tastes with our menu of the season. All the ingredients are fresh and carefully selected by our chefs. Enjoy an extraordinary dinning experience.</h4>

                                <div className={`${style.flex_container} ${style.menu}`}>
                                    <div className={style.col}>
                                        <div>
                                            <h3>Chocolate Pancake <span>$15.00</span></h3>
                                            <p>Fruit, pancakes, chocolate.</p>
                                        </div>
                                        <div>
                                            <h3>Dry Pancake<span>$15.00</span></h3>
                                            <p>Pancakes, mix fruit, nuts.</p> 
                                        </div>
                                        <div>
                                            <h3>Vanilla Pancake <span>$12.00</span></h3>
                                            <p>Fruit, pancakes, chocolate.</p>
                                        </div>
                                        <div>
                                            <h3>Butter Pancake<span>$13.00</span></h3>
                                            <p>Pancakes, mix fruit, nuts.</p> 
                                        </div>
                                    </div>

                                    <div className={style.col}>
                                        <div>
                                            <h3>Blueberry Pancake<span>$12.00</span></h3>
                                            <p>Blueberry, raw honey, pancakes.</p> 
                                        </div>
                                        <div>
                                            <h3>Mix Pancake<span>$15.00</span></h3>
                                            <p>Bacon, banana, pancakes.</p> 
                                        </div>
                                        <div>
                                            <h3>Strawberry Pancake<span>$12.00</span></h3>
                                            <p>Blueberry, raw honey, pancakes.</p> 
                                        </div>
                                        <div>
                                            <h3>Bacon Pancake<span>$13.00</span></h3>
                                            <p>Bacon, banana, pancakes.</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            {/* <!-- Common Hero block / auto align left--> */}
            <section className={style.common_hero}> 
                    <div className={style.wrapper}>
                        <div className={style.hero_image} style={{backgroundImage: `url(${hero_3})`, backgroundAttachment: "fixed"}}>
                            <div className={`${style.overlay} ${style.overlay_hero}`}>
                                <div className={`${style.container} ${style.content}`}>
                                    <div className={style.copy}>
                                        <div className={style.title}>Happy Hours</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Common left align block / auto align left--> */}
                <section className={`${style.common_content} ${style.block_3}`}  data-aos="fade-down" id="about">
                    <div className={style.wrapper}>
                        <div className={`${style.container} ${style.flex_container}`}>
                            <div className={`${style.text_align_center} ${style.copy}`}>
                                <h1>About</h1>
                                <p>Famous Pancakes is committed to provide our guests with delicious entrees, hand squeezed juices, and fast friendly service in a warm environment.</p>
                                <p>We bring the tradition of freshly prepared breakfast and lunch of your choice. We use only the highest quality ingredients like fresh GRADE AA eggs, made from scratch hollandaise, extra thick cut hickory smoked bacon are just a few items we do fresh every day.</p>
                                <button className={style.btn}>Call Now</button>
                            </div>
                            <div className={style.img} style={{backgroundImage: `url(${restaurant})`}}></div>
                        </div>
                    </div>
                </section>


                {/* <!-- Common Hero block / auto align left--> */}
            <section className={`${style.common_hero} ${style.testimonial}`}> 
                    <div className={style.wrapper}>
                        <div className={style.hero_image} style={{backgroundImage: `url(${testimonial})`, backgroundAttachment: "fixed"}}>
                            <div className={`${style.overlay} ${style.overlay_hero}`}>
                                <div className={`${style.container} ${style.content}`}>
                                    <div className={style.copy}>
                                        <h1>Testimonial</h1>
                                        <div className={style.title}>What Clients Say</div>
                                        <p>"Tall and fluffy. These pancakes are just right. Topped with strawberries and whipped cream, they are impossible to resist."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!-- Common left align block / auto align left--> */}
                <section className={`${style.common_content} ${style.block_4}`}  data-aos="fade-down" id="contact">
                    <div className={style.wrapper}>
                        <div className={`${style.container} ${style.flex_container}`}>
                            <div className={`${style.text_align_center} ${style.copy}`}>
                                <h3>Contact</h3>
                                <h1>Make a Reservation</h1>
                                <p>Looking for an ideal venue? Look no further. Corporate dinners, special occasions, Chef’s Table, let us handle your needs. Reservations are available online.</p>

                                <form action="">
                                    <div className={style.flex_container}>
                                        <input type="text" placeholder="Name"/>
                                        <input type="text" placeholder="Email"/>
                                        <input type="text" placeholder="Phone"/>
                                    </div>
                                    <div>
                                        <textarea name="" id="" cols="30" rows="5" placeholder="Your Message"></textarea>
                                    </div>
                                </form>
                                <button className={style.btn}>Book Now</button>
                            </div>
                            <div className={style.img} style={{backgroundImage: `url(${restaurant})`}}></div>
                        </div>
                    </div>
                </section>


                {/* <!-- Common Hero block / auto align left--> */}
            <section className={`${style.common_hero} ${style.footer}`}> 
                    <div className={style.wrapper}>
                        <div className={style.hero_image} style={{background: "#000"}}>
                            <div className={`${style.overlay} ${style.overlay_hero} ${style.flex_container}`}>
                                <div className={`${style.container} ${style.flex_container}`}>
                                    <div className={style.copy}>
                                        <div className={style.title}>All Pancakes</div>
                                        <p>For a truly memorable dining experience reserve in advance a table as soon as you can. Come and taste our remarkable food and wine.</p>
                                    </div>
                                    <div className={style.copy}>
                                        <h2>Contact Us</h2>
                                        <p>88 Ave</p>
                                        <p>Philadelphia, PA 11111</p>
                                        <br/>
                                        <p>215-222-2222</p>
                                        <p>info@allpancakes.com</p>
                                    </div>
                                    <div className={style.copy}>
                                        <h2>Hours</h2>
                                        <p>Monday - Sunday</p>
                                        <p>8AM - 8PM</p>
                                        <br/>
                                        <p>Happy Hours:</p>
                                        <p>3pm-5pm</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className={style.copyright}>
                        <div className={`${style.container} ${style.flex_container}`}>
                            <p>&copy;2019 &#9866; <a href="https://www.lukehoang.com">Lukehoang.com</a></p>
                            <ul className={`${style.social} ${style.flex_container}`}>
                                <li><a href="https://www.facebook.com/bamboocopterfilm/" target="_blank"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.instagram.com/lukemhoang/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="https://github.com/lukehoang" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/lukehoang/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </footer>

                <a href="#top" className={style.back_to_top}>
                    <i className="fa fa-chevron-up" aria-hidden="true"></i>
                </a>
            </div>
        );
    }
}
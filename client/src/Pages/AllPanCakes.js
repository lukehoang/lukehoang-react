import React, {Component} from 'react';

//CSS
// import pancakeStyle from '../css/allpancakes_style.module.css';

export default class AllPanCakesPage extends Component{
    render(){
        return (
            <div>
                <section class="navigation_desktop" id="top">
                    <div class="wrapper">
                        <div class="container flex">
                            <div class="brand flex">
                                <div class="logo">
                                    <h1>All Pancakes</h1>
                                </div>
                            </div>
                            <div class="nav">
                                <ul class="flex">
                                    <li>
                                        <a class="nav-menu-item-link" href="#menu">Menu</a>
                                    </li>
                                    <li>
                                        <a class="nav-menu-item-link" href="#about">About</a>
                                    </li>
                                    <li>
                                        <a class="nav-menu-item-link" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="menu_icon">
                                <div class="icon">
                                    <i class="fa fa-bars" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!-- Nav mobile --> */}
                <section class="navigation_mobile">
                    <div class="wrapper flex">

                        <span class="btn_close"><i aria-hidden="true" class="fa fa-times fa-2x"></i></span>
                        <div class="nav">
                            <div class="search_box">
                                <input class="search" placeholder="" type="text" />
                            </div>
                            <ul>
                                <li>
                                    <a class="nav-menu-item-link" href="#menu">Menu</a>
                                </li>
                                <li>
                                    <a class="nav-menu-item-link" href="#about">About</a>
                                </li>
                                <li>
                                    <a class="nav-menu-item-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </section>
                {/* <!-- Navigation --> */}
                




                <section class="common_hero"> 
                    <div class="wrapper">
                        <div class="hero_image full_height" style={{backgroundImage: "url('../img/allpancakes/hero-1.jpeg')"}}>
                            <div class="overlay overlay_hero">
                                <div class="container content">
                                    <div class="copy">
                                        <div class="subtitle">All About</div>
                                        <div class="title">Pancakes</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                
                {/* <!-- Common left align block / auto align left--> */}
                <section class="common_content block_1"  data-aos="fade-down">
                    <div class="wrapper">
                        <div class="container">
                            
                            <div class="img_text flex_container">
                            
                                <div class="img" style={{backgroundImage: "url('img/allpancakes/1.jpeg')"}}></div>
                                <div class="text flex_container text_align_center">
                                    
                                    <div>
                                        <h1>&#151; Welcome to AllPancakes &#151;</h1>
                                        <p>One of the latest additions to Philadelphia's pancake family, brings a modern (and healthier) twist to the traditional dish. Pancakes are made with spelt or oat flour, and you'll find a range of fresh, healthy juices to accompany. </p> 
                                        
                                        <button class="btn">Call Now</button>
                                        
                                    </div>    
                                </div>
                                <div class="img" style={{backgroundImage: "url('img/allpancakes/3.jpeg')"}}></div>

                            </div>
                        </div>
                    </div>
                </section>

            




                {/* <!-- Common Hero block / auto align left--> */}
                <section class="common_hero"> 
                    <div class="wrapper">
                        <div class="hero_image" style={{backgroundImage: "url('img/allpancakes/hero-2.jpeg')", backgroundAttachment: "fixed"}}>
                            <div class="overlay overlay_hero">
                                <div class="container content">
                                    <div class="copy">
                                        <div class="title">Our Specialties</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section class="common_content block_2"  data-aos="fade-down" id="menu">
                    <div class="wrapper">
                        <div class="container flex_container">
                            <div>

                                <h1 class="text_align_center">&#151; Menu &#151;</h1>
                                <h4 class="text_align_center">Explore texture, color and of course the ultimate tastes with our menu of the season. All the ingredients are fresh and carefully selected by our chefs. Enjoy an extraordinary dinning experience.</h4>

                                <div class="flex_container menu">
                                    <div class="col">
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

                                    <div class="col">
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
            <section class="common_hero"> 
                    <div class="wrapper">
                        <div class="hero_image" style={{backgroundImage: "url('img/allpancakes/hero-3.jpeg')"}}>
                            <div class="overlay overlay_hero">
                                <div class="container content">
                                    <div class="copy">
                                        <div class="title">Happy Hours</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Common left align block / auto align left--> */}
                <section class="common_content block_3"  data-aos="fade-down" id="about">
                    <div class="wrapper">
                        <div class="container flex_container">
                            <div class="text_align_center copy">
                                <h1>About</h1>
                                <p>Famous Pancakes is committed to provide our guests with delicious entrees, hand squeezed juices, and fast friendly service in a warm environment.</p>
                                <p>We bring the tradition of freshly prepared breakfast and lunch of your choice. We use only the highest quality ingredients like fresh GRADE AA eggs, made from scratch hollandaise, extra thick cut hickory smoked bacon are just a few items we do fresh every day.</p>
                                <button class="btn">Call Now</button>
                            </div>
                            <div class="img" style={{backgroundImage: "url('img/allpancakes/restaurant.jpeg')"}}></div>
                        </div>
                    </div>
                </section>


                {/* <!-- Common Hero block / auto align left--> */}
            <section class="common_hero testimonial"> 
                    <div class="wrapper">
                        <div class="hero_image" style={{backgroundImage: "url('img/allpancakes/testimonial.jpeg')"}}>
                            <div class="overlay overlay_hero">
                                <div class="container content">
                                    <div class="copy">
                                        <h1>&#151; Testimonial &#151;</h1>
                                        <div class="title">What Clients Say</div>
                                        <p>"Tall and fluffy. These pancakes are just right. Topped with strawberries and whipped cream, they are impossible to resist."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!-- Common left align block / auto align left--> */}
                <section class="common_content block_4"  data-aos="fade-down" id="contact">
                    <div class="wrapper">
                        <div class="container flex_container">
                            <div class="text_align_center copy">
                                <h3>&#151; Contact &#151;</h3>
                                <h1>Make a Reservation</h1>
                                <p>Looking for an ideal venue? Look no further. Corporate dinners, special occasions, Chef’s Table, let us handle your needs. Reservations are available online.</p>

                                <form action="">
                                    <div class="flex_container">
                                        <input type="text" placeholder="Name"/>
                                        <input type="text" placeholder="Email"/>
                                        <input type="text" placeholder="Phone"/>
                                    </div>
                                    <div>
                                        <textarea name="" id="" cols="30" rows="5" placeholder="Your Message"></textarea>
                                    </div>
                                </form>
                                <button class="btn">Book Now</button>
                            </div>
                            <div class="img" style={{backgroundImage: "url('img/allpancakes/restaurant.jpeg')"}}></div>
                        </div>
                    </div>
                </section>


                {/* <!-- Common Hero block / auto align left--> */}
            <section class="common_hero footer"> 
                    <div class="wrapper">
                        <div class="hero_image" style={{background: "#000"}}>
                            <div class="overlay overlay_hero flex_container">
                                <div class="container flex_container">
                                    <div class="copy">
                                        <div class="title">All Pancakes</div>
                                        <p>For a truly memorable dining experience reserve in advance a table as soon as you can. Come and taste our remarkable food and wine.</p>
                                    </div>
                                    <div class="copy">
                                        <h2>Contact Us</h2>
                                        <p>88 Ave</p>
                                        <p>Philadelphia, PA 11111</p>
                                        <br/>
                                        <p>215-222-2222</p>
                                        <p>info@allpancakes.com</p>
                                    </div>
                                    <div class="copy">
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
                    <div class="copyright">
                        <div class="container flex_container">
                            <p>&copy;2019 &#9866; <a href="https://www.lukehoang.com">Lukehoang.com</a></p>
                            <ul class="social flex_container">
                                <li><a href="https://www.facebook.com/bamboocopterfilm/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.instagram.com/lukemhoang/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="https://github.com/lukehoang" target="_blank"><i class="fab fa-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/lukehoang/" target="_blank"><i class="fab fa-linkedin"></i>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </footer>

                <a href="#top" class="back_to_top">
                    <i class="fa fa-chevron-up" aria-hidden="true"></i>
                </a>
            </div>
        );
    }
}
import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';


const one = require('../assets/one.svg');
const two = require('../assets/three.svg');
const clients = require('../assets/clients.svg');
const fb_ico = require('../assets/fb.svg');
const ig_ico = require('../assets/ig.svg');
const twi_ico = require('../assets/twi.svg');
const menu_ico = require('../assets/menu.svg');
const slide1 = require('../assets/ds.svg');
const play = require('../assets/play.svg');
const as = require('../assets/as.mp4');

const logo = require("../assets/logofit.svg")

export default function Homepage() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 4000
    };
    return (
        <Fragment>
            <div className=" container home-contanter">
                <div className="yellow-stripe">
                    <div className="yellow_overlay"></div>
                    <div className="sd">
                        <video id="player" style={{ objectFit: "cover" }} src={as} width="900%" type="video/mp4" muted autoPlay='true' onclick="this.play();">Your browser does not support this streaming content.</video>
                    </div>

                    <div className="yellow-stripe-content">
                        <div className="play-btn-container">
                            <div className="yellow-stripe-content">
                                <div className="inner d-flex">
                                    <img src={play} alt="" className="pl-3" width="80%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-content">
                    <div className="nav-container d-flex justify-content-around mt-md-5">
                        <div>
                            <div className="nav-logo">
                                <img src={logo} alt="" width="100%" />
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <ul className="nav">
                                <li className="ml-md-4"><Link to="/trainings">Trainings</Link></li>
                                <li className="ml-md-4"><Link to="/trainings">About Us</Link></li>
                                <li className="ml-md-4"><Link to="/trainings">Our Team</Link></li>
                                <li className="ml-md-4"><Link to="/trainings">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-between d-flex align-items-center"  >
                            <div className="nav-cta  mr-md-5">
                                Lets Talk
                        </div>
                            <div className=" ml-md-5">
                                <img src={menu_ico} width="40px" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex  head-caption justify-content-center align-self-center ">
                        <div className="  head-txt-container">
                            <p className="header-txt1">
                                Strengthening <span className="blink">Brands</span>
                                <span className="text-shad"></span>
                            </p>
                            <p className="header-txt1">
                                Building <span className="blink2">Products</span>
                                <span className="text-shad"></span>
                            </p>
                            <p className="header-sub1 ml-auto ">We work closely with our clients to create and convey compelling stories that highlight what makes them unique, innovative and interesting</p>
                            <div className="" style={{ width: "350px", height: "250px", position: "absolute", left: "-70px", bottom: "100px" }}>
                                <img src={one} width="150%" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="section-two container justify-content-around my-5 py-md-5">
                <div className="row">
                    <div className="col-md-4 pl-md-5 mt-md-5 ">
                        <p className="head-txt2">Our Services</p>
                        <p className="header-sub2 p-0 m-0">
                            We’re available 24/7.
                    </p>
                        <p className="header-sub3 mt-5">
                            <span className="line"></span> All Services
                    </p>
                    </div>
                    <div className=" col-md-8 ">
                        <div className="container-sub2">
                            <div className="d-flex flex-column">
                                <div className="d-flex ">
                                    <Fade left>
                                        <div className="p-4">
                                            <img src={two} width="100%" alt="" />
                                        </div>
                                    </Fade>
                                    <Fade left>
                                        <div className="p-4">
                                            <img src={two} width="100%" alt="" />
                                        </div>
                                    </Fade>
                                    <Fade left>
                                        <div className="p-4">
                                            <img src={two} width="100%" alt="" />
                                        </div>
                                    </Fade>
                                </div>
                                <div className="d-flex ">
                                    <Fade right>
                                        <div className="p-4">
                                            <img src={two} width="100%" alt="" />
                                        </div>
                                    </Fade>
                                    <Fade right>
                                        <div className="p-4">
                                            <img src={two} width="100%" alt="" />
                                        </div>
                                    </Fade>
                                    <Fade right>
                                        <div className="p-4">
                                            <img src={two} width="100%" alt="" />
                                        </div>
                                    </Fade>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="section-three">
                <div className="container ">
                    <div className="ml-md-4">
                        <div>
                            <p className="head-txt2 py-5">Our Work</p>
                        </div>
                        <Fade up>
                            <div className="d-flex">
                                <div className="portfolio-box">
                                    <div className=" yellow_overlay  justify-content-center align-items-center">
                                        <p className="w-50">BILL AND MELINDER GATES FOUNDATION</p>
                                    </div>
                                    <img src={one} width="100%" alt="" />
                                </div>
                                <div className="portfolio-box">
                                    <div className=" yellow_overlay  justify-content-center align-items-center">
                                        <p className="w-50">BILL AND MELINDER GATES FOUNDATION</p>
                                    </div>
                                    <img src={one} width="100%" alt="" />
                                </div>
                                <div className="portfolio-box">
                                    <div className=" yellow_overlay  justify-content-center align-items-center">
                                        <p className="w-50">BILL AND MELINDER GATES FOUNDATION</p>
                                    </div>
                                    <img src={one} width="100%" alt="" />
                                </div>
                            </div>

                        </Fade>
                        <Fade up>
                            <div className="d-flex mt-5">
                                <div className="portfolio-box">
                                    <div className=" yellow_overlay  justify-content-center align-items-center">
                                        <p className="w-50">BILL AND MELINDER GATES FOUNDATION</p>
                                    </div>
                                    <img src={one} width="100%" alt="" />
                                </div>
                                <div className="portfolio-box">
                                    <div className=" yellow_overlay  justify-content-center align-items-center">
                                        <p className="w-50">BILL AND MELINDER GATES FOUNDATION</p>
                                    </div>
                                    <img src={one} width="100%" alt="" />
                                </div>
                                <div className="portfolio-box">
                                    <div className=" yellow_overlay  justify-content-center align-items-center">
                                        <p className="w-50">BILL AND MELINDER GATES FOUNDATION</p>
                                    </div>
                                    <img src={one} width="100%" alt="" />
                                </div>
                            </div>
                        </Fade>
                        <Fade up>
                            <div className="d-flex mt-5">
                                <div className="portfolio-box">
                                    <div className=" yellow_overlay  justify-content-center align-items-center">
                                        <p className="w-50">BILL AND MELINDER GATES FOUNDATION</p>
                                    </div>
                                    <img src={one} width="100%" alt="" />
                                </div>
                                <div className="portfolio-box">
                                    <div className=" yellow_overlay  justify-content-center align-items-center">
                                        <p className="w-50">BILL AND MELINDER GATES FOUNDATION</p>
                                    </div>
                                    <img src={one} width="100%" alt="" />
                                </div>
                                <div className="portfolio-box">
                                    <div className=" yellow_overlay  justify-content-center align-items-center">
                                        <p className="w-50">BILL AND MELINDER GATES FOUNDATION</p>
                                    </div>
                                    <img src={one} width="100%" alt="" />
                                </div>
                            </div>
                        </Fade>
                    </div>


                </div>
            </div>
            <div className="section-four">
                <div className="container ">
                    <div className="ml-md-4 d-flex justify-content-between py-3">
                        <div className="d-flex align-items-center">
                            <p className="head-txt2 w-100 py-5">Meet Our<br />
                                Awesome Clients</p>
                        </div>
                        <div className="d-flex mt-5 clients-portfolio">
                            <Spin>
                                <img src={clients} alt="" />
                            </Spin>
                        </div>
                    </div>


                </div>
            </div>
            <div className=" d-flex justify-content-center">
                <div className="w-75 ">
                    <p className="slide_head">What our Clients are saying</p>
                    <hr width="50px" style={{ height: "1px" }} color="black" />


                    <div>
                        <Slider {...settings}>
                            <div className="">
                                <img src={slide1} width="750px" className="mx-auto" alt="" />
                            </div>
                            <div className="">
                                <img src={slide1} width="750px" className="mx-auto" alt="" />
                            </div>
                            <div className="">
                                <img src={slide1} width="750px" className="mx-auto" alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="footer pb-md-5 pt-5">
                <div className="container py-5 px-md-5 pb-md-5 ">
                    <div className="d-flex mb-md-5 pb-md-5">
                        <div className="flex-fill">
                            <p className="footer-header-txt">You want Data <br />and Design Tips?</p>
                        </div>
                        <div className="flex-fill px-5 d-flex justify-content-end">
                            <div className="pl-md-5 ml-md-5 w-100">
                                <p className="footer-form-txt">Subscribe to our newsletter to receive training offers and the latest news<br /> on our products and services.</p>
                                <div className="w-100 form_group">
                                    <input type="text" className="footer-form-input w-100 py-3 px-4" placeholder="Your Email Address" />
                                    <div className="footer_submit">Subscribe</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex text-left my-5">
                        <div className="foot-menus d-flex flex-column flex-fill">
                            <p className="text-left ">Services</p>
                            <ul className="p-0 m-0">
                                <li><Link to="/">Data Aggregation</Link></li>
                                <li><Link to="/">Website Development</Link></li>
                                <li><Link to="/">Data Aggregation</Link></li>
                                <li><Link to="/">Document Design</Link></li>
                                <li><Link to="/">Infographics</Link></li>
                            </ul>
                        </div>
                        <div className="foot-menus d-flex flex-column flex-fill ">
                            <p className="text-left ">Fitila</p>
                            <ul className="p-0 m-0">
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Careers</Link></li>
                                <li><Link to="/">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="foot-menus d-flex flex-column flex-fill ">
                            <p className="text-left ">Useful Links</p>
                            <ul className="p-0 m-0">
                                <li><Link to="/">Contact Us</Link></li>
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Terms of Use</Link></li>
                                <li><Link to="/">FAQs</Link></li>
                            </ul>
                        </div>
                        <div className="foot-menus d-flex flex-column flex-fill ">
                            <p className="text-left ">Contact</p>
                            <ul className="p-0 m-0">
                                <li><Link to="/">+2345786543221</Link></li>
                                <li><Link to="/">+23467854324545</Link></li>
                                <li><Link to="/">hello@fitila.africa</Link></li>
                                <li>
                                    <span><img src={fb_ico} alt="" /></span>
                                    <span><img src={twi_ico} alt="" /></span>
                                    <span><img src={ig_ico} alt="" /></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

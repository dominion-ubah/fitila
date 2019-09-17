import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const one = require('../assets/one.svg');
const two = require('../assets/three.svg');

const logo = require("../assets/logo.png")

export default function Homepage() {
    return (
        <Fragment>
            <div className=" container home-contanter">
                <div className="yellow-stripe">
                    <div className="yellow-stripe-content">
                        <div className="play-btn-container">
                            <div className="yellow-stripe-content">
                                <div className="play-btn"></div>
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
                                llll
                        </div>
                        </div>
                    </div>
                    <div className="d-flex  head-caption justify-content-center align-self-center ">
                        <div className="  head-txt-container">
                            <p className="header-txt1">
                                Strengthening Brands
                            <span className="text-shad"></span>
                            </p>
                            <p className="header-txt1">
                                Building Products
                            <span className="text-shad"></span>
                            </p>
                            <p className="header-sub1 ml-auto ">We work closely with our clients to create and convey compelling stories that highlight what makes them unique, innovative and interesting</p>
                            <div className="" style={{ width: "350px", height: "300px", position: "absolute", left: "-70px", bottom: "100px" }}>
                                <img src={one} width="150%" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="section-two container justify-content-around">
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
                                    <div className="p-4">
                                        <img src={two} width="100%" alt="" />
                                    </div>
                                    <div className="p-4">
                                        <img src={two} width="100%" alt="" />
                                    </div>
                                    <div className="p-4">
                                        <img src={two} width="100%" alt="" />
                                    </div>
                                </div>
                                <div className="d-flex ">
                                    <div className="p-4">
                                        <img src={two} width="100%" alt="" />
                                    </div>
                                    <div className="p-4">
                                        <img src={two} width="100%" alt="" />
                                    </div>
                                    <div className="p-4">
                                        <img src={two} width="100%" alt="" />
                                    </div>
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
                        <div className="d-flex">
                            <div className="portfolio-box"></div>
                            <div className="portfolio-box"></div>
                            <div className="portfolio-box"></div>
                        </div>
                        <div className="d-flex mt-5">
                            <div className="portfolio-box"></div>
                            <div className="portfolio-box"></div>
                            <div className="portfolio-box"></div>
                        </div>
                        <div className="d-flex mt-5">
                            <div className="portfolio-box"></div>
                            <div className="portfolio-box"></div>
                            <div className="portfolio-box"></div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="section-four">
                <div className="container ">
                    <div className="ml-md-4">
                        <div>
                            <p className="head-txt2 py-5">Our Work</p>
                        </div>
                        <div className="d-flex mt-5">
                        </div>
                    </div>


                </div>
            </div>
        </Fragment>

    )
}

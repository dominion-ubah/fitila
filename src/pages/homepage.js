import React, { Fragment, useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';
import ReactImageVideoLightbox from 'react-image-video-lightbox';
import Header from '../components/Header';
import Footer from '../components/Footer';
const one = require('../assets/one.svg');
const two = require('../assets/three.svg');
const four = require('../assets/four.svg');
const five = require('../assets/five.svg');
const six = require('../assets/six.svg');
const seven = require('../assets/seven.svg');
const eight = require('../assets/eight.svg');
const clients = require('../assets/clients.svg');
const slide1 = require('../assets/ds.svg');
const playbtn = require('../assets/playbtn2.svg');
const as = require('../assets/as.mp4');


export default function Homepage() {

    const [lightboxOpen, setLightboxOpen] = useState(false);
    useEffect(() => {
        console.log('stet', lightboxOpen)
    })
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        appendDots: dots => (
            <div
                className='dot_content'
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
    };

    return (
        <Fragment>
            <div className=" container home-contanter">
                <div className="yellow-stripe">
                    <div className="yellow_overlay"></div>
                    <div className="sd">
                        <video id="player" style={{ objectFit: "cover" }} src={as} width="900%" type="video/mp4" muted autoPlay={true}>Your browser does not support this streaming content.</video>
                    </div>

                    <div className="yellow-stripe-content" onClick={() => { setLightboxOpen(true) }}>
                        <div className="play-btn-container" onClick={() => { setLightboxOpen(true) }}>
                            <div className="yellow-stripe-content" onClick={() => { setLightboxOpen(true) }}>
                                <div onClick={() => { setLightboxOpen(true) }} className=" d-flex">

                                    <img src={playbtn} alt="" className="pl-3" width="80%" onClick={() => { setLightboxOpen(true) }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    lightboxOpen &&
                    <div className="hsg">
                        <ReactImageVideoLightbox
                            data={[
                                { url: 'https://res.cloudinary.com/domee-u/video/upload/v1569691795/videoplayback_2_ab7ckw.mp4', type: 'video', altTag: 'placeholder video' }
                            ]}
                            startIndex={0}
                            showResourceCount={true}
                            style={{ zIndex: 9999 }}
                            onCloseCallback={() => { setLightboxOpen(false) }} />
                    </div>
                }
                <div className="home-content">
                    <Header />
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
                            <div className="" style={{ width: "350px", height: "250px", position: "absolute", left: "-90px", bottom: "70px" }}>
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
                                            <img src={four} width="100%" alt="" />
                                        </div>
                                    </Fade>
                                    <Fade left>
                                        <div className="p-4">
                                            <img src={five} width="100%" alt="" />
                                        </div>
                                    </Fade>
                                </div>
                                <div className="d-flex ">
                                    <Fade right>
                                        <div className="p-4">
                                            <img src={six} width="100%" alt="" />
                                        </div>
                                    </Fade>
                                    <Fade right>
                                        <div className="p-4">
                                            <img src={seven} width="100%" alt="" />
                                        </div>
                                    </Fade>
                                    <Fade right>
                                        <div className="p-4">
                                            <img src={eight} width="100%" alt="" />
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
            <Footer />
        </Fragment>

    )
}

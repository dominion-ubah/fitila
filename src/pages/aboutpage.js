import React, { Fragment } from 'react'
import HeaderSec from '../components/HeaderSec';
import Footer from '../components/Footer';

const about = require('../assets/about.svg');

export default function Aboutpage() {
    return (
        <Fragment>
            <HeaderSec />
            <div className="container">
                <div className="d-flex py-5 my-5">
                    <div className="">
                        <div className="flex-fill">
                            <p className="px-4 about_header_txt">About Us</p>
                            <p className="px-4 py-2 about-txt">What drives us and motivates us daily at Fitila, is our passion to help businesses communicate better with their target audience. Research has shown that no matter how great the goods or services a business offers, how they communicate with their target audience will to a very large extent, determine how successful they will be. It has also been said that success in this century will rely heavily on our ability to leverage the data at our disposal as well as communicate appropriately with our target audience.
        </p>
                            <p className="px-4 py-2 about-txt">We understand the complexities associated with data and that is why we have made it our mission at Fitila to help businesses and business owners simplify their data and pass their message across in the fastest and easily comprehensible format.</p>
                        </div>
                    </div>
                    <div className="flex-fill mt-5 p-5" >
                        <div className="mt-md-5 py-md-2">
                            <img src={about} className="mt-5" width="490px" alt="about-fitila" />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </Fragment>
    )
}

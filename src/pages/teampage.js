import React, { Fragment } from 'react'
import HeaderSec from '../components/HeaderSec';
import Footer from '../components/Footer';

const team = require('../assets/team2.svg')

export default function Teampage() {
    return (
        <Fragment>
            <HeaderSec />
            <div className="container px-md-5 my-5 py-5">
                <div className="d-flex ">
                    <div>
                        <p className="about_header_txt ">The Team</p>
                        <p className="about_txt">Our team is made up of data analysts, visual designers, storytellers & programmers who have a proven track record of innovating, creating and pushing the limits of conventional wisdom in design when working with clients who value the creative process, functional design & data integrity. Our expertise lies in our ability to extract and communicate valuable insights – even from the most challenging datasets across a broad spectrum of industries – with effortless ease.

    </p>
                        <p className="about_txt">We believe that the most exciting & functional designs come from a strong collaborative bond with our clients – and we have developed in-house processes to foster this bond.</p>
                    </div>
                </div>
                <div className="d-flex flex-column my-5">
                    <div className="d-flex my-4">
                        <div>
                            <img src={team} alt="" width="90%" />
                        </div>
                        <div>
                            <img src={team} alt="" width="90%" />
                        </div>
                        <div>
                            <img src={team} alt="" width="90%" />
                        </div>
                    </div>
                    <div className="d-flex my-4">
                        <div>
                            <img src={team} alt="" width="90%" />
                        </div>
                        <div>
                            <img src={team} alt="" width="90%" />
                        </div>
                        <div>
                            <img src={team} alt="" width="90%" />
                        </div>
                    </div>
                    <div className="d-flex my-4">
                        <div>
                            <img src={team} alt="" width="90%" />
                        </div>
                        <div>
                            <img src={team} alt="" width="90%" />
                        </div>
                        <div>
                            <img src={team} alt="" width="90%" />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </Fragment>
    )
}
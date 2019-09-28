import React from 'react'
import { Link } from "react-router-dom";


const fb_ico = require('../assets/fb.svg');
const ig_ico = require('../assets/ig.svg');
const twi_ico = require('../assets/twi.svg');


export default function Footer() {
    return (
        <div className="footer pb-md-5 pt-5">
            <div className="container py-5 px-md-5 pb-md-5 ">
                <div className="d-flex mb-md-5 pb-md-5">
                    <div className="flex-fill">
                        <p className="footer-header-txt">You want Data and Design Tips?</p>
                    </div>
                    <div className="flex-fill px-5 d-flex justify-content-end">
                        <div className="pl-md-5 ml-md-5 w-100">
                            <p className="footer-form-txt">Subscribe to our newsletter to receive training offers and the latest news on our products and services.</p>
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
                            <li><Link to="/about">About Us</Link></li>
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
    )
}

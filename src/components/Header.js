import React from 'react'
import { Link } from "react-router-dom";


const menu_ico = require('../assets/menu.svg');
const logo = require("../assets/logofit.svg")


export default function Header() {
    return (
        <div className="nav-container d-flex justify-content-around mt-md-5">
            <div>
                <div className="nav-logo">
                    <img src={logo} alt="" width="140%" />
                </div>
            </div>
            <div className="d-flex align-items-center">
                <ul className="nav">
                    <li className="ml-md-4"><Link to="/trainings">Trainings</Link></li>
                    <li className="ml-md-4"><Link to="/about">About Us</Link></li>
                    <li className="ml-md-4"><Link to="/team">Our Team</Link></li>
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
    )
}

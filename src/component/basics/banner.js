import React from 'react';
import logo from '../basics/assets/logo.png'
import  '../basics/banner.css';
import { Link } from 'react-router-dom'



const Banner = () => {
  return <div>
<div className="main">
        <div className="navbar">
            <img src={logo} className="logo" alt='img'/>
            <ul className="nav-links">
                <li><Link to="/">SERVICES</Link></li>
                <li><Link to="/Products">PRODUCTS</Link></li>
                <li><Link to='/Work'>WORK</Link></li>
                <button type="button" className="button1">GET QUOTE</button>
            </ul>
        </div>
        <div className="inbox">
            <h1>Interior Design <br/> & Decors</h1>
            <button type="button" className="button2">Book Free Consultation  <img className="rtarw" src="assets/Arrow - Right.svg" alt='img'/></button>
        </div>
    </div>
    </div>
  ;
};

export default Banner;

import React from 'react';
import logo from '../basics/assets/logo.png'
import  '../basics/banner.css';


const Banner = () => {
  return <div>
<div className="main">
        <div className="navbar">
            <img src={logo} className="logo"/>
            <ul className="nav-links">
                <li>SERVICES</li>
                <li><a href='/Products'> PRODUCTS</a></li>
                <li><a href='/Work'>WORK</a></li>
                <button type="button" className="button1">GET QUOTE</button>
            </ul>
        </div>
        <div className="inbox">
            <h1>Interior Design <br/> & Decors</h1>
            <button type="button" className="button2">Book Free Consultation  <img className="rtarw" src="assets/Arrow - Right.svg"/></button>
        </div>
    </div>
    </div>
  ;
};

export default Banner;

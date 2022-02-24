// import React from 'react';
import React, {useState, useEffect} from 'react'
import logo from '../basics/assets/logo.png'
import  '../basics/banner.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons';



const Banner = () => {
  const [toggleMenu,setToggleMenu]=useState(false)
  
  const toggleNav = () =>{
    setToggleMenu(!toggleMenu)
  }
  return <div>
<div className="main">
        <div className="navbar">
            <img src={logo} className="logo" alt='img'/>
            <div className= "mobNav">
              {toggleMenu &&(
                  <ul className="mobList">
                      <li><Link to="/" id='Link'>SERVICES</Link></li>
                      <li><Link to="/Products" id='Link'>PRODUCTS</Link></li>
                      <li><Link to='/Work' id='Link'>WORK</Link></li>
                      <li>GET QUOTE</li>
                  </ul>
              )}
               
              
           
               <button className="btnNav" onClick={toggleNav}><FontAwesomeIcon icon={faAlignJustify} id='fontAwe' /></button>
            </div>

            <ul className="nav-links">
                <li ><Link to="/" id='Link'>SERVICES</Link></li>
                <li><Link to="/Products" id='Link'>PRODUCTS</Link></li>
                <li><Link to='/Work' id='Link'>WORK</Link></li>
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

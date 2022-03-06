// import React from 'react';
import React, {useState} from 'react'
import logo from '../basics/assets/logo.png'
import  '../basics/banner.css';
import { Link,NavLink,useNavigate  } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAlignJustify, faXmark} from '@fortawesome/free-solid-svg-icons';




const Banner = () => {
  const [toggleMenu,setToggleMenu]=useState(false)
  
  const toggleNav = () =>{
    setToggleMenu(!toggleMenu)
    
  }
  let navigate = useNavigate();
  const routeContact= ()=>{
      let path = '/Contactpage';
      navigate(path);
  }
  return <div>
    
<div className="main">
        <div className="navbar">
            <img src={logo} className="logo" alt='img'/>
            <div className= "mobNav">
              {toggleMenu &&(
                

                 <ul className="mobList">
                   <button onClick={toggleNav} className="btnnavCross"><FontAwesomeIcon icon={faXmark} id='fontAwes' /></button>
                      <li><NavLink to="/" id='Link' className="borderBottom">SERVICES</NavLink></li>
                      <li><NavLink to="/Products" id='Link'>PRODUCTS</NavLink></li>
                      <li><Link to='/Work' id='Link'>WORK</Link></li>
                      <li><Link to='/contactPage' id='Link'>GET QUOTE</Link></li>
                  </ul>
                  
              )}
               
              
           
               <button className="btnNav" onClick={toggleNav}><FontAwesomeIcon icon={faAlignJustify} id='fontAwe' /></button>
            </div>

            <ul className="nav-links">

                <li ><Link to="/" id='Link'className='borderBottom'>SERVICES</Link></li>
                <li><NavLink to="/Products" id='Link'>PRODUCTS</NavLink></li>
                <li><Link to='/Work' id='Link'>WORK</Link></li>
                <button type="button" className="button1" onClick={routeContact}>GET QUOTE</button>
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

import React, {useState} from 'react'
import  '../basics/workOne.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons';



const WorkpOne = () => {
  const [toggleMenu,setToggleMenu]=useState(false)
  
  const toggleNav = () =>{
    setToggleMenu(!toggleMenu)
  }
  return (
    <header>
          <div className="workNavbar">
            <img src="p4_assets/Group 29.png" className="workLogo" alt='img'/>
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
            <ul className="workNavlinks">
                <li> <Link to="/" id='workLinksnav'>SERVICES</Link></li>
                <li> <Link to="/Products" id='workLinksnav'>PRODUCTS</Link></li>
                <li> <Link to="/Work" id='workLinksnav'>WORK</Link></li>
                <button type="button" className="workButton1">GET QUOTE</button>
            </ul>
        </div>
        <div className='workTitile'>
            <h1>Keeping it Simple
But Effective</h1>
<p>Here are some of our recent works</p>
        </div>

    </header>
  )
}

export default WorkpOne
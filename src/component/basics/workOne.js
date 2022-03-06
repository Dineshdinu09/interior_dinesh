import React, {useState} from 'react'
import  '../basics/workOne.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAlignJustify,faXmark} from '@fortawesome/free-solid-svg-icons';



const WorkpOne = () => {
  const [toggleMenu,setToggleMenu]=useState(false)
  
  const toggleNav = () =>{
    setToggleMenu(!toggleMenu)
  }
  let navigate = useNavigate();
  const redirectContact= ()=>{
      let path = '/Contactpage';
      navigate(path);
  }
  return (
    <header>
          <div className="workNavbar">
            <img src="p4_assets/Group 29.png" className="workLogo" alt='img'/>
            <div className= "mobNav">
              {toggleMenu &&(
                  <ul className="mobList">
                     <button onClick={toggleNav} className="btnnavCross"><FontAwesomeIcon icon={faXmark} id='fontAwes' /></button>
                      <li><Link to="/" id='Link'>SERVICES</Link></li>
                      <li><Link to="/Products" id='Link'>PRODUCTS</Link></li>
                      <li><Link to='/Work' id='Link' className='borderBottom'>WORK</Link></li>
                      <li><Link to='/contactPage' id='Link'>GET QUOTE</Link></li>
                  </ul>
              )}
               
              
           
               <button className="btnNav" onClick={toggleNav}><FontAwesomeIcon icon={faAlignJustify} id='fontAwe' /></button>
            </div>
            <ul className="workNavlinks">
                <li> <Link to="/" id='workLinksnav'>SERVICES</Link></li>
                <li> <Link to="/Products" id='workLinksnav'>PRODUCTS</Link></li>
                <li> <Link to="/Work" id='workLinksnav' className='borderBottom'>WORK</Link></li>
                <button type="button" className="workButton1" onClick={redirectContact}>GET QUOTE</button>
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
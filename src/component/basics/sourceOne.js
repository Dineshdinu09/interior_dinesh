import React, {useState} from 'react'
import  '../basics/sourceOne.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAlignJustify,faXmark} from '@fortawesome/free-solid-svg-icons';

const SourceOne = () => {
    const [toggleMenu,setToggleMenu]=useState(false)
  
    const toggleNav = () =>{
      setToggleMenu(!toggleMenu)
    }
  return <div>
      <div className="main_2">
        <div className="navbar">
            <img src="p2_assets/logo.png" className="logo" alt='img'/>
            <div className= "mobNav">
              {toggleMenu &&(
                  <ul className="mobList">
                    <button onClick={toggleNav} className="btnnavCross"><FontAwesomeIcon icon={faXmark} id='fontAwes' /></button>
                      <li><Link to="/" id='Link'>SERVICES</Link></li>
                      <li><Link to="/Products" id='Link'>PRODUCTS</Link></li>
                      <li><Link to='/Work' id='Link'>WORK</Link></li>
                      <li id='Link'>GET QUOTE</li>
                  </ul>
              )}
               
              
           
               <button className="btnNav" onClick={toggleNav}><FontAwesomeIcon icon={faAlignJustify} id='fontAwe' /></button>
            </div>
            <ul className="navLinksone">
                <li><Link to="/" id='linkTwo'>SERVICES</Link></li>
                <li><Link to="/Products" id='linkTwo'>PRODUCTS</Link></li>
                <li><Link to="/Work" id='linkTwo'>WORK</Link></li>
                <button type="button" className="button1">GET QUOTE</button>
            </ul>
        </div>
        <div className="block1">
            <div className="lblock1">
                <h1>Great products at<br/> Great Discount</h1>
                <p>Shop through us to get upto 70% discount on <br/> diverse collections</p>
            </div>
            <div className="rblock1">
                <div className="rectanglebg_2">
                    <img alt='img' src="p2_assets/image 94.png" className="bg1"/>
                </div>
                <div className="rectanglebg1"></div>
            </div>
        </div>
    </div>
  </div>;
};

export default SourceOne;

import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSortDown} from '@fortawesome/free-solid-svg-icons';


import  '../basics/sourceTwo.css';
import { useState } from 'react';
const SourceTwo = () => {
    let navigate = useNavigate();
    const routeChange= ()=>{
        let path = '/Furniture';
        navigate(path);
    }
    const [toggleMenu,setToggleMenu]=useState(false)
  
    const toggleNav = () =>{
      setToggleMenu(!toggleMenu)
    }
  return <div>
        
      
      
      <div className="S2_page2">
      <div className='dropDowndet'>
            <button className='viewdetBtn' onClick={toggleNav}>VIEW DETAILS <FontAwesomeIcon icon={faSortDown} id='fontSortdown' /></button>
            {toggleMenu &&(
            <ul>
                <li><Link to='/Furniture' id='listDet'>kitchen accessories</Link></li>
                <li> <Link to='/Furniture'id='listDet'>furniture</Link></li>
                <li><Link to='/Furniture'id='listDet'>art</Link></li>
                <li><Link to='/Furniture'id='listDet'>furnishings</Link></li>
                <li><Link to='/Furniture'id='listDet'>lighting</Link></li>
                <li><Link to='/Furniture'id='listDet'>Decor accessories</Link></li>
                <li><Link to='/Furniture'id='listDet'>wall coverings</Link></li>
                <li><Link to='/Furniture'id='listDet'>security and safety</Link></li>
                <li><Link to='/Furniture'id='listDet'>gardening</Link></li>
                <li><Link to='/Furniture'id='listDet'>kids furniture</Link></li>
                <li><Link to='/Furniture'id='listDet'>Stores&Selves</Link></li>
            </ul>
            )}
            
      </div>
    
        <div className="S2_left">
            <ul>
                <li><Link to='/Furniture' id='listDet'>kitchen accessories</Link></li>
                <li> <Link to='/Furniture'id='listDet'>furniture</Link></li>
                <li><Link to='/Furniture'id='listDet'>art</Link></li>
                <li><Link to='/Furniture'id='listDet'>furnishings</Link></li>
                <li><Link to='/Furniture'id='listDet'>lighting</Link></li>
                <li><Link to='/Furniture'id='listDet'>Decor accessories</Link></li>
                <li><Link to='/Furniture'id='listDet'>wall coverings</Link></li>
                <li><Link to='/Furniture'id='listDet'>security and safety</Link></li>
                <li><Link to='/Furniture'id='listDet'>gardening</Link></li>
                <li><Link to='/Furniture'id='listDet'>kids furniture</Link></li>
                <li><Link to='/Furniture'id='listDet'>Stores&Selves</Link></li>
            </ul>
        </div>
        <div className="cards">
 
            <div className="S2_card">

                <img src="p2_assets/img1.png" className="card_image" alt='img'/>

                <div className="content">
                    <h1>Rome 3 Seater Sofa Green</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci odio velit, sem vestibul</p>
                </div>
                <div className="footer">
                    <div className="price">
                        <p>Rs. <del>21,150</del> <b>14,999</b></p>
                    </div>
                    <div>
                        <button id='detBtn' onClick={routeChange}>VIEW DETAILS</button>
                    </div>
                </div>
            </div>
            <div className="S2_card">

                <img src="p2_assets/img2.png" className="card_image" alt='img'/>

                <div className="content">
                    <h1>Studio Helix Teal Cushion Sofa</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci odio velit, sem vestibul</p>
                </div>
                <div className="footer">
                    <div className="price">
                        <p>Rs. <del>21,150</del> <b>14,999</b></p>
                    </div>
                    <div>
                        <button id='detBtn' onClick={routeChange} >VIEW DETAILS</button>
                    </div>
                </div>
            </div>
            <div className="S2_card">

                <img src="p2_assets/img3.png" className="card_image" alt='img'/>

                <div className="content">
                    <h1>Studio Helix Teal Cushion Sofa</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci odio velit, sem vestibul</p>
                </div>
                <div className="footer">
                    <div className="price">
                        <p>Rs. <del>21,150</del> <b>14,999</b></p>
                    </div>
                    <div>
                        <button id='detBtn'  onClick={routeChange}>VIEW DETAILS</button>
                    </div>
                </div>
            </div>
            <div className="S2_card">

                <img src="p2_assets/img4.png" className="card_image" alt='img'/>

                <div className="content">
                    <h1>Studio Helix Teal Cushion Sofa</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci odio velit, sem vestibul</p>
                </div>
                <div className="footer">
                    <div className="price">
                        <p>Rs. <del>21,150</del> <b>14,999</b></p>
                    </div>
                    <div>
                        <button id='detBtn'  onClick={routeChange}>VIEW DETAILS</button>
                    </div>
                </div>
            </div>
            <div className="S2_card">

                <img src="p2_assets/img5.png" className="card_image" alt='img'/>

                <div className="content">
                    <h1>Studio Helix Teal Cushion Sofa</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci odio velit, sem vestibul</p>
                </div>
                <div className="footer">
                    <div className="price">
                        <p>Rs. <del>21,150</del> <b>14,999</b></p>
                    </div>
                    <div>
                        <button id='detBtn' onClick={routeChange}>VIEW DETAILS</button>
                    </div>
                </div>
            </div>
            <div className="S2_card">

                <img src="p2_assets/img6.png" className="card_image" alt='img'/>

                <div className="content">
                    <h1>Studio Helix Teal Cushion Sofa</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci odio velit, sem vestibul</p>
                </div>
                <div className="footer">
                    <div className="price">
                        <p>Rs. <del>21,150</del> <b>14,999</b></p>
                    </div>
                    <div>
                        <button id='detBtn' onClick={routeChange}>VIEW DETAILS</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>;
};

export default SourceTwo;

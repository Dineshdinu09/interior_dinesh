import React, {useState} from 'react'
import '../basics/Details.css'
import { Link,useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons';


const Details = () => {
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
    
    <div className='DetailsPage'>
        <nav>
        <div className= "mobNav">
              {toggleMenu &&(
                  <ul className="mobList">
                      <li><Link to="/" id='Link'>SERVICES</Link></li>
                      <li><Link to="/Products" id='Link' className='borderBottom'>PRODUCTS</Link></li>
                      <li><Link to='/Work' id='Link'>WORK</Link></li>
                      <li id='Link'>GET QUOTE</li>
                  </ul>
              )}
               <button className="btnNav" onClick={toggleNav}><FontAwesomeIcon icon={faAlignJustify} id='fontAwe'/></button>
            </div>
        <div className="navbarDet">
            <img src="p2_assets/logo.png" className="logo" alt='img'/>
            <ul className="navinksDet">
                <li><Link to="/" id='detLinktwo'>SERVICES</Link></li>
                <li><Link to="/Products" id='detLinktwo' className='borderBottom'>PRODUCTS</Link></li>
                <li><Link to="/Work" id='detLinktwo'>WORK</Link></li>
                <button type="button" className="button1" onClick={redirectContact}>GET QUOTE</button>
            </ul>
        </div>
        </nav>
        <main> <p id='mainDet'>Products {">"} Furniture {">"} Mid-Century Living Minimal Sofa Grey </p></main>
        <div className='image_1'>
        <img src="p3_assets/Frame 475.png" className="cardImagep3" alt='img'/>
        </div>
        <div className='Det'>
            <div className='detailsBlock'>
              <h1 id='deth1'>Mid-Century Living Minimal Sofa Grey </h1>
              <div>
                  <button id='contactBtn1'>by Helix Studios</button>
              </div>
              <p id='detp1'>
              Elegance and minimalist style are the main features of this versatile 
              corner sofa available in a wide range of leather or fabric colours and 
              featuring a comfortable right-hand corner
              </p>
              <h2 id='deth2'>Market Price   :  Rs. 32,150</h2>
              <h3 id='deth3'>Our Price          :  less than <span id='cost'>Rs. 25,000</span></h3>
              <button id='contactBtn'>CONTACT US</button>
              <h4 id='h4'>BUILDS & QUALITY</h4>
              <dl id='detlist'>
                  <dd>-<span id='bold'>SIZE:</span>  </dd>
                  <dd> W253xD235xH90cm Left or Right corner</dd>
                  <dd>W273xD235xH90cm Lefr or Right corner </dd>
                  <dd>- <span id='bold'>CORNER SOFA:</span> available</dd>
                  <dd>- <span id='bold'>MATERIALS:</span> fabric, leather</dd>
                  <dd>- <span id='bold'>MADE TO MEASURE OPTION:</span> available upon request (POA)</dd>
                  <dd>-<span id='bold'> DELIVERY:</span> 4-5 weeks</dd>
              </dl>

            </div>
        </div>
        <div className='image_2'>
        <img src="p3_assets/Frame 476.png" className="cardImagep4" alt='img'/>
        </div>
        <div className='image_3'>
        <img src="p3_assets/Frame 474.png" className="cardImagep4" alt='img'/>
        </div>
        <div className='image_4'>
        <img src="p3_assets/Frame 477.png" className="cardImagep4" alt='img'/>
        </div>
        <div className='image_5'>
        <img src="p3_assets/Frame 478.png" className="cardImagep4" alt='img'/>
        </div>


    </div>
    
    
  
    
  )
}

export default Details
import React,{useState} from 'react'
import  '../basics/workTwo.css';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSortDown} from '@fortawesome/free-solid-svg-icons';

const WorkpTwo = () => {
  const [toggleMenu,setToggleMenu]=useState(false)
  
  const toggleNav = () =>{
    setToggleMenu(!toggleMenu)
  }
  return (<div className='pageWorkgrid'>
<div className='workGrids'>
   
  
<div className='dropDowndet'>
            <button className='viewdetBtn' onClick={toggleNav}>VIEW DETAILS <FontAwesomeIcon icon={faSortDown} id='fontSortdown' /></button>
            {toggleMenu &&(
            <ul>
                <li><Link to='' id='listDet'>kitchen accessories</Link></li>
                <li> <Link to=''id='listDet'>furniture</Link></li>
                <li><Link to=''id='listDet'>art</Link></li>
                <li><Link to=''id='listDet'>furnishings</Link></li>
                <li><Link to=''id='listDet'>lighting</Link></li>
                <li><Link to=''id='listDet'>Decor accessories</Link></li>
                <li><Link to=''id='listDet'>wall coverings</Link></li>
                <li><Link to=''id='listDet'>security and safety</Link></li>
                <li><Link to=''id='listDet'>gardening</Link></li>
                <li><Link to=''id='listDet'>kids furniture</Link></li>
                <li><Link to=''id='listDet'>Stores&Selves</Link></li>
            </ul>
            )}
            
      </div>

<div className='workNavbar2'>
  <ul className='workNavul'>
  <li>Bedroom</li>
  <li>Modular Kitchen</li>
  <li>Kids Bedroom</li>
  <li>Living Room</li>
  <li>Dining Room</li>
  <li>Bathroom</li>
  <li>Wardrobe</li>
  <li>Space Saving</li>
</ul>
  </div>
  <div className='allCards'>
       <div className='workContainer'>
         <div className='workImage1'>
         <img src='p4_assets/Frame494.png' className='workImg1' alt='img'></img>
         </div>
         
         <div className='workTitleh1'>
           <h1>Customized Modular Kitchen Setup</h1>
           <p>Electronic city, Banlagore</p>
           <p>Cost: Rs. 1,50,000</p>
         </div>
            <div className='workDesc1'>
            <div className='cardfooterBlock'>
            <div className='workCardimgQuote'>
                 <img src='p4_assets/el_quote-right.png' className='imgQuote' alt='img'></img>
             </div>
             <div className='workCardpara'>
                    <p className='cardPara'>We have worked in all kinds of kitchen modules and bring some of the trending designs in the market to make your kitchen get a classy and modern look.</p>
               </div>
              <div className='cardFooter'>
                
              <div className='cardNamedet'>
                  <h2 className='nameDeth2'>Shirley Lin</h2>
                   <p className='nameDetp'>Bangalore</p>
                 </div>
                 <div className='cardFooterContact'>
                   <img src='p4_assets/carbon_phone-filled.png' className='contactImg' alt='img'></img>
                   <h3 className='footerContact'>CONTACT CUSTOMER</h3>
                 </div>
                 </div>
                 </div>

            </div>

       </div>
       <div className='workContainer workContainerTwo'>
         <div className='workImage1'>
         <img src='p4_assets/Frame495.png' className='workImg1' alt='img'></img>
         </div>
         
         <div className='workTitleh1'>
           <h1>Customized Modular Kitchen Setup</h1>
           <p>Electronic city, Banlagore</p>
           <p>Cost: Rs. 1,50,000</p>
         </div>
            <div className='workDesc1'>
            <div className='cardfooterBlock'>
            <div className='workCardimgQuote'>
                 <img src='p4_assets/el_quote-right.png' className='imgQuote' alt='img'></img>
             </div>
             <div className='workCardpara'>
                    <p className='cardPara'>We have worked in all kinds of kitchen modules and bring some of the trending designs in the market to make your kitchen get a classy and modern look.</p>
               </div>
              <div className='cardFooter'>
                
              <div className='cardNamedet'>
                  <h2 className='nameDeth2'>Shirley Lin</h2>
                   <p className='nameDetp'>Bangalore</p>
                 </div>
                 <div className='cardFooterContact'>
                   <img src='p4_assets/carbon_phone-filled.png' className='contactImg' alt='img'></img>
                   <h3 className='footerContact'>CONTACT CUSTOMER</h3>
                 </div>
                 </div>
                 </div>

            </div>

       </div>
       </div>
       
        

    </div>
    </div>
  )
}

export default WorkpTwo



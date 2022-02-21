import React from 'react'
import  '../basics/workOne.css';


const Workp1 = () => {
  return (
    <header>
          <div className="workNavbar">
            <img src="p4_assets/Group 29.png" className="workLogo" alt='img'/>
            <ul className="workNavlinks">
                <li>SERVICES</li>
                <li>PRODUCTS</li>
                <li>WORK</li>
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

export default Workp1
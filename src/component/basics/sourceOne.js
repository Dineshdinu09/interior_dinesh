import React from 'react';
import  '../basics/sourceOne.css';

const Source_1 = () => {
  return <div>
      <div className="main_2">
        <div className="navbar">
            <img src="p2_assets/logo.png" className="logo" alt='img'/>
            <ul className="nav-links">
                <li>SERVICES</li>
                <li>PRODUCTS</li>
                <li>WORK</li>
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
                    <img src="p2_assets/image 94.png" className="bg1"/>
                </div>
                <div className="rectanglebg1"></div>
            </div>
        </div>
    </div>
  </div>;
};

export default Source_1;

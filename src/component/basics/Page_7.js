import React from 'react';
import  '../basics/Page_7.css';
const Page_7 = () => {
  return <div>
    <div className="last">
        <div className="lastblock">
            <h1>Fidisys</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu cras lorem ultricies id scelerisque elementum duis. Mauris pharetra
            </p>
            <div className="address">
                <h1>Address</h1>
                <h2>
                    Flat 501, Addressline 1<br/> Addressline 2, Chennai</h2>
            </div>
            <div id="footer_icons">
                <img src="assets/bx_bxl-facebook.svg" className="smallicons2_sub"/>
                <img src="assets/carbon_logo-instagram.svg" className="smallicons2_sub"/>
                <img src="assets/bx_bxl-twitter.svg" className="smallicons2_sub"/>
                <img src="assets/cib_pinterest-p.svg" className="smallicons2_sub"/>
            </div>
            <h2 id="footer_h2">© 2020 Fidisys Technologies Private Limited</h2>
        </div>
    </div>
  </div>;
};

export default Page_7;

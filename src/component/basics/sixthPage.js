import React from 'react';
import  '../basics/sixthPage.css';

const Page_6 = () => {
  return <div>
      <div className="container2">

<h1>Contact Us</h1>
<div className="block2">

    <div className="lblock">
        <h2>Contact Information</h2>
        <p className="p1"> Fill up the form and we will get back to you within 24 hours</p>
        <p className="p2"> <img src="assets/carbon_phone-filled.svg" className="smallicons"/>+91 - 9876543210</p>
        <p className="p3"><img src="assets/fluent_mail-28-filled.svg" className="smallicons"/>hello@fidisys.com</p>
        <p className="p4"><img src="assets/fluent_location-12-filled.svg" className="smallicons"/>Flat 501, Addressline 1<br/> Addressline 2, Chennai</p>

        <div className="smallicons2">

            <img src="assets/bx_bxl-facebook.svg" className="smallicons2_sub"/>
            <img src="assets/carbon_logo-instagram.svg" className="smallicons2_sub"/>
            <img src="assets/bx_bxl-twitter.svg" className="smallicons2_sub"/>
            <img src="assets/cib_pinterest-p.svg" className="smallicons2_sub"/>
        </div>
        <div className="arc"></div>

    </div>

    <div className="rblock">

        <div className="details">

            <div className="y_name">
                <label>your Name:</label><br/>
                <input type="text" id="name" name="name" placeholder="Chris Do"/>
            </div>
            <div className="mobile_no">
                <label>Mobile Number:</label><br/>
                <input type="text" id="Number" name="Number" placeholder="+91  9876543210"/>
            </div>

        </div>

        <div className="rblock_h2">
            <h2>Select a service you need from us </h2>
        </div>
        <div className="rblock_btns">
            <button type="button" className="btn1">Interior Design</button>
            <button type="button" className="btn2">Home Decors</button>
            <button type="button" className="btn3">Furniture</button>
        </div>
        <div className="rblock_lbl_txt">
            <label className="txt_lbl">Message</label><br/>

            <input type="text" placeholder="Write Your Message"/>
        </div>
        <div className="last_btn"><button type="button" className="btn4">SEND MESSAGE</button></div>
    </div>
</div>
</div>
  </div>;
};

export default Page_6;

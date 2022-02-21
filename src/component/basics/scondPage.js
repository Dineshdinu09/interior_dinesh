import React from 'react';
import  '../basics/secondPage.css';

const SecondPage = () => {
  return <>
      <div className="page2">


<h2>Why Us?</h2>
<div className="flexbox">

    <div className="card card1">
        <img alt='img' src="assets/heart.png" className="heart"/>
        <div className="incard">
            <h3>1500+ Happy Clients</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc elit. Eget eu cras </p>
        </div>
    </div>
    <div className="card card2">
        <img alt='img' src="assets/Home.png" className="home1"/>
        <div className="incard">
            <h3>Preparation On-site</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc elit. Eget eu cras </p>
        </div>
    </div>
    <div className="card card3">
        <img alt='img' src="assets/Fill-1.png" className="Fill-1"/>
        <div className="incard">
            <h3>Personalised Choices</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc elit. Eget eu cras </p>
        </div>
    </div>
    <div className="card card4">
        <img alt='img' src="assets/Star.png" className="Star"/>
        <div className="incard">
            <h3>Best Quality</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc elit. Eget eu cras </p>
        </div>
    </div>

</div>
</div>
  </>;
};

export default SecondPage;

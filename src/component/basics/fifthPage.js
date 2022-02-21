import React from 'react';
import  '../basics/fifthPage.css';

const FifthPage = () => {
  return <div>
      <div className="container">
        <h1 className='H_1'>Listen from our Clients</h1>
        <div className="rectangle">
            <div className="rectangle2">
                <div className="rectanglebg">
                    <div className="frame">


                        <div className="photoborder">
                            <img src="assets/photo.png" className="photo" alt='img'/>
                        </div>
                        <div className='photoNamedec'>
                        <div className="name">
                            <h1>Shirley Lin</h1>
                        </div>
                        <div className="des">
                            <p>Bangalore</p>
                        </div>
                        </div>
                    </div>

                </div>
                <div className="framert">
                    <div className="rectangle3"></div>

                    <div className="rthead">
                        <h1>Excellent Choice</h1>
                    </div>
                    <img src="assets/quote-left.svg" className="quote-left" alt='img'/>
                    <div className="rtp">
                        <p>We have worked in all kinds of kitchen modules and bring some of the trending designs in the market to make your kitchen get a classy and modern look.</p>
                    </div>
                    <img src="assets/quote-right.svg" className="quote-right" alt='img'/>

                </div>



            </div>

        </div>
    </div>
  </div>;
};

export default FifthPage;

import React from 'react';

import  '../basics/sourceTwo.css';
const SourceTwo = () => {
  return <div>
        <div className='dropDown'>
          <select className='select'>
              <option disabled selected>ALL PRODUCTS</option>
              <option value={'kitchen accessories'}>kitchen accessories</option>
              <option value={'furniture'}>furniture</option>
              <option value={'art'}>art</option>
              <option value={'furnishings'}>furnishings</option>
              <option value={'lighting'}>lighting</option>
              <option value={'Decor accessories'}>Decor accessories</option>
              <option value={'wall coverings'}>wall coverings</option>
              <option value={'security and safety'}>security and safety</option>
              <option value={'gardening'}>gardening</option>
              <option value={'kids furniture'}>kids furniture</option>
              <option value={'Stores&Selves'}>Stores&Selves</option>

          </select>
      </div>
      
      <div className="S2_page2">
    
        <div className="S2_left">
            <ul>
                <li>kitchen accessories</li>
                <li> <a href='/Furniture'>furniture</a></li>
                <li>art</li>
                <li>furnishings</li>
                <li>lighting</li>
                <li>Decor accessories</li>
                <li>wall coverings</li>
                <li>security and safety</li>
                <li>gardening</li>
                <li>kids furniture</li>
                <li>Stores&Selves</li>
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
                        <button>VIEW DETAILS</button>
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
                        <button>VIEW DETAILS</button>
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
                        <button>VIEW DETAILS</button>
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
                        <button>VIEW DETAILS</button>
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
                        <button>VIEW DETAILS</button>
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
                        <button>VIEW DETAILS</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>;
};

export default SourceTwo;

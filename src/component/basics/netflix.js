import React from 'react';

const Netflix = (props) => {
  return (
  
  <div className='cards' key={props.i}>
      <div className='card'>
          <img src={props.imgsrc} alt='myPic' className='card_img'/>
          <div className='card_info'>
              <span className='card_category'>{props.title}</span>
              <h3 className='card_titile'>{props.sname}</h3>
              <a href={props.link} target='_blank'>
                  <button>Watch Now</button>
              </a>
          </div>
      </div>
      </div>  
  

  
  );
};

export default Netflix;

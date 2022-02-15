import React from 'react';
import Source_1 from './component/basics/Source_1';
import Source_2 from './component/basics/Source_2';
import Page_6 from './component/basics/Page_6';
import Page_7 from './component/basics/Page_7';
import '../src/component/basics/P6_module.css';
const Products = () => {
  return <div>
      <Source_1/>
      <Source_2/>
      <div className='p_6'>
        <Page_6/>
      <Page_7/>
      </div>
  </div>;
};

export default Products;





  

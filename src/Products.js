import React from 'react';
import Source_1 from './component/basics/sourceOne';
import Source_2 from './component/basics/sourceTwo';
import Page_6 from './component/basics/sixthPage';
import Page_7 from './component/basics/pageSeven';
import '../src/component/basics/sixModule.css';
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






  

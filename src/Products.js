import React from 'react';
import SourceOne from './component/basics/sourceOne';
import SourceTwo from './component/basics/sourceTwo';
import SixthPage from './component/basics/sixthPage';
import PageSeven from './component/basics/pageSeven';
import '../src/component/basics/sixModule.css';
const Products = () => {
  return <div>
      <SourceOne/>
      <SourceTwo/>
      <div className='p_6'>
        <SixthPage/>
      <PageSeven/>
      </div>
  </div>;
};

export default Products;






  

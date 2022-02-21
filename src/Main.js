import React from 'react'
import Banner from './component/basics/banner';
import Page_2 from './component/basics/scondPage';
import Page_3 from './component/basics/thirdPage';
import Page_4 from './component/basics/fourthPage';
import Page_5 from './component/basics/fifthPage';
import Page_6 from './component/basics/sixthPage';
import Page_7 from './component/basics/pageSeven';

const Main = () => {
  return (
    <div>
  <Banner />
      <Page_2/>
      <Page_3/>
      <Page_4/>
      <Page_5/>
      <Page_6/>
      <Page_7/>
    </div>
  )
}

export default Main;
import React from 'react'
import Banner from './component/basics/banner';
import SecondPage from './component/basics/scondPage';
import ThirdPage from './component/basics/thirdPage';
import FourthPage from './component/basics/fourthPage';
import FifthPage from './component/basics/fifthPage';
import SixthPage from './component/basics/sixthPage';
import PageSeven from './component/basics/pageSeven';

const Main = () => {
  return (
    <div>
  <Banner />
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
      <FifthPage/>
      <SixthPage/>
      <PageSeven/>
    </div>
  )
}

export default Main;
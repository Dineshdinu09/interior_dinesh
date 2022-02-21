import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Furniture from './Furniture'
import Main from './Main'

import Products from './Products'
import Work from './Work'

const App = () => {
  return (
    <>
    <Link to="/Products">products</Link>
      <Routes>
        
        <Route exact path='/' element={<Main/>} />
        <Route path='/Products' element={<Products/>} />
        <Route exact path='/Furniture' element={<Furniture/>} />
        <Route exact path='/Work' element={<Work/>} />
      </Routes>

    </>
  )
}

export default App





import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Furniture from './Furniture'
import Main from './Main'
import Contactpage from './Contactpage'


import Products from './Products'
import Work from './Work'

const App = () => {
  return (
    <>

      <Routes>
        
        <Route exact path='/' element={<Main/>} />
        <Route path='/Products' element={<Products/>} />
        <Route exact path='/Furniture' element={<Furniture/>} />
        <Route exact path='/Work' element={<Work/>} />
        <Route exact path='/Contactpage' element={<Contactpage/>} />
        
      </Routes>

    </>
  )
}

export default App





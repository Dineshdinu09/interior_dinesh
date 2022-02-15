import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Main'
import Products from './Products'

const App = () => {
  return (
    <>
      <Routes>
        
        <Route exact path='/' element={<Main/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>

    </>
  )
}

export default App





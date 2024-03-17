import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Test from './Test'
import Layouts from './components/Layouts'
import Homepage from './pages/Homepage'
import State from './hooks/State'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

const MyRoutes = () => {
  return (
    <Router>

        <Routes>


          <Route path='/' element={<Layouts/>}>

            <Route index element={<Homepage/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='product-details/:productID' element={<ProductDetails/>}/>
              
          </Route>

            <Route path='test' element={<Test/>}/>
            <Route path='state' element={<State/>}/>
     

        </Routes>

    </Router>
  )
}

export default MyRoutes
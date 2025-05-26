import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './components/jsx/Home'
import Products from './components/jsx/Products'
import About from './components/jsx/About'
import Cart from './components/jsx/Cart'
// import Contactus from './components/jsx/Contactus'
import Checkout from './components/jsx/Checkout'
import Wishlist from './components/jsx/Wishlist'
import Orderdetails from './components/jsx/Orderdetails'
function Routing() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/contactus"/>
        <Route path="/cart" element={<Cart />}/>
        <Route path='/checkout' element={<Checkout/>} />
        <Route path="/orderdetails" element={<Orderdetails />}></Route>
    </Routes>

    </>
  )
}

export default Routing
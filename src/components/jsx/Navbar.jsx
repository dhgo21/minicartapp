import React from 'react'
import "../css/Navbar.css"
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
function Navbar() {
  const cartitems=useSelector((state)=>state.slice.cartitems)
  return (
    <>
    <div className="main">
        <div className="navbar">
            <div className="headings">
                <Link className='heading' to="/" >Home</Link>
                <Link className="heading" to="/products" >Products</Link>
                <Link className="heading" to="/wishlist" >Wishlist</Link>
                <Link className="heading" to="/about" >About</Link>
                <Link className="heading" to="https://forms.gle/BkNj2BRvbMfy8iHg7" target='_blank'>Contact</Link>
                <Badge badgeContent={cartitems.length} color="primary">
                  <Link className="heading" to="/cart" ><BsCart4 className='cartlogo'/></Link>
                </Badge>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
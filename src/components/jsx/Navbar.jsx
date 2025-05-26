import React from 'react'
import "../css/Navbar.css"
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { RiHome2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { LuContact } from "react-icons/lu";
import { AiOutlineShopping } from "react-icons/ai";
function Navbar() {
  const cartitems=useSelector((state)=>state.slice.cartitems)
  return (
    <>
    <div className="main">
        <div className="navbar">
            <div className="headings">
                <Link className='heading' to="/" ><div className="nav1"><RiHome2Line /> Home</div></Link>
                <Link className="heading" to="/products" ><div className="nav2"><AiOutlineShopping />Products</div></Link>
                <Link className="heading" to="/wishlist" ><div className="nav3"><FaRegHeart />Wishlist</div></Link>
                <Link className="heading" to="/about" ><div className="nav1"><IoMdInformationCircleOutline />About</div></Link>
                <Link className="heading" to="https://forms.gle/BkNj2BRvbMfy8iHg7" target='_blank'><div className="nav4"><LuContact />Contact</div></Link>
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
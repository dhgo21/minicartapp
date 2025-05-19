import React from 'react'
import "../css/Wishlist.css"
import Fotter from './Fotter'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CiHeart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { RiHeartAdd2Line } from "react-icons/ri";
import { removefromwishlist } from '../redux/store'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Wishlist() {
  const wishlist=useSelector((state)=>state.slice.wishitems)
  const dispatch=useDispatch()

  function handleclose(product)
  {
    dispatch(removefromwishlist(product))
    toast.error("Product removed from Wishlist");
  }
  return (
    <>
    <div className="wishlist">
      <h1 className='wishh'>Wishlist</h1>
      <div className="wishitems">
        {
          wishlist.length===0 && (
            <div className="emptywishlist">
              <RiHeartAdd2Line className="hcicon"/>
              <h2>Your Wishlist is empty!</h2>
              <Link to="/products"><button className='sbttn'>Shop Now</button></Link>
            </div>
          )
        }
      </div>
      <div className="productss">
      {
        wishlist.map((curr,index)=>{
          return (
            <>
            <div className="wishproduct" key={index}>
            <div className="imagessss">
              <img src={curr.image}></img>
              <div className="hicon">
                <IoMdClose className='heart'onClick={()=>handleclose(curr)}/>
              </div>
            </div>
            <div className="detailss">
              <h5 id="title">{curr.title}</h5>
              <p id="price">${curr.price}</p>
              <p id="rating">Rating: {curr.rating.rate}</p>
            </div>
            <div className="add-btn">
              <button id="add-button">Add</button>
            </div>
            </div>
            </>
          )
        })
      }
      </div>
    </div>
    <Fotter />
    </>
  )
}

export default Wishlist
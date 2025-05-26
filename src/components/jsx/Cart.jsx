import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../css/Cart.css"
import { RxCross2 } from "react-icons/rx";
import { decreQty, increQty, removeProduct } from '../redux/store';
import { Link } from 'react-router-dom';
import Fotter from './Fotter'
function Cart() {
  const cartproducts = useSelector(state => state.slice.cartitems)
  const dispatch=useDispatch()

  function increqty(increIndex)
  {
    dispatch(increQty(increIndex))
  }
  function decqty(decIndex)
  {
    dispatch(decreQty(decIndex))
  }
  function removeproduct(item)
  {
    dispatch(removeProduct(item))
  }
  const total = cartproducts.reduce((total, item) => {
    return Math.round(total + item.price * item.quantity)
  }, 0)
  const packfee=2
  const gst=123
  const gtotal=total+packfee+gst

  function truncateText(text, maxLength)
    {
        if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
        return text;
    }
  return (
    <>
    {
      cartproducts.length>0 ? (
        <div className="cartcontainer">
        <div className="cart">
          <h1>Cart</h1>
        </div>
        <div className="items">
          <div className="box1">
            {
              cartproducts.map((curr,index)=>{
                return (
                  <>
                  <div className="data" key={index}>
                    <div className="image">
                      <img src={curr.image}></img>
                    </div>
                    <div className="productinfo">
                      <p className='cat'>{curr.category}</p>
                      <p className='tit'>{truncateText(curr.title,15)}</p>
                      <p className='pr'>Price ({curr.quantity} Quantity): ${curr.price*curr.quantity}</p>
                    </div>
                    <div className="buttons">
                      <div className="stuffs">
                        <button className='incredecre' onClick={()=>increqty(curr)}>+</button>
                        <input type='text' value={curr.quantity} readOnly></input>
                        <button className='incredecre' onClick={()=>decqty(curr)}>-</button>
                      </div>
                    </div>
                    <div className="cross" onClick={()=>removeproduct(curr)}>
                      <RxCross2 />
                    </div>
                  </div>
                  </>
                )
              })
            }
          </div>
          <div className="box2">
            {
              cartproducts.length>0 && (
                <div className="sidhatbox">
                  <div className="rightboxheading">
                    <p>Price Details</p>
                  </div>
                  <div className="pricedetails">
                    <table>
                      <tbody>
                        <tr>
                          <td className='lefth'>Price ({cartproducts.length} item): </td>
                          <td>${total}</td>
                        </tr>
                        <tr>
                          <td className='lefth'>GST 18%:</td>
                          <td>$123</td>
                        </tr>
                        <tr>
                          <td className='lefth'>Packaging Fee: </td>
                          <td>$2</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="totalprice">
                      <table>
                        <tbody>
                          <tr>
                            <td className='lefth'>Total Amount: </td>
                            <td className='lefth'>${gtotal}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="checkout">
                    <Link to="/checkout" state={{ gtotal: gtotal }}><button className='check-bttn'>Checkout</button></Link>
                  </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
      ) : (
        <div className="empty">
          <div className="cartempty">
            <h2>Oopssss...Cart is Empty!.</h2>
            <Link to="/products"><button className='shopnow1'>Shop Now!</button></Link>
            
          </div>
        </div>
      )
    }
    <Fotter />
    </>
    
  )
}

export default Cart


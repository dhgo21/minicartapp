import React from 'react'
import "../css/Productinfo.css"
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { clearproductinfo } from '../redux/store';
function Productinfo({product,handleadd}) {
    const dispatch=useDispatch()
    function handlecross(product)
    {
        dispatch(clearproductinfo(product))
    }
  return (
    <>
    <div className="productdetail">
        <div className="header">
            <h1 className='detailheading'>Product Information</h1>
            <RxCross2 className='close'onClick={()=>handlecross(product)}/>
        </div>
        <div className="iteminfo">
            <div className="lbox">
                <img src={product.image} className='productimage'></img>
            </div>
            <div className="rbox">
                <h2 className='titlee'>{product.title}</h2>
                <p className='catee'>{product.category}</p>
                <p className='descr'>{product.description}</p>
                <h1 className='price'>${product.price}</h1>
                <button className='atc' onClick={()=>handleadd(product)}>Add</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Productinfo
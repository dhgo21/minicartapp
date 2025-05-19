import React, { useEffect, useState } from 'react'
import "../css/Products.css"
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { addTocart, addtowishlist, filterbycategory, setallproducts, setproductinfo } from '../redux/store';
import Loader from './Loader';
import Productinfo from './Productinfo';
import Fotter from './Fotter'
function Products() {
  // const items = useSelector(state => state.slice.filteredproducts);

  const [items, setitems] = useState([])
  const [loader,setloader]=useState(false)
  // const [productinfo,setproductinfo]=useState(null)
  // const cartproducts = useSelector(state => state.slice.cartitems)
  const productinfo = useSelector((state) => state.slice.productinfo);
  const wishlist = useSelector((state) => state.slice.wishitems);
  const filteritems = useSelector(state => state.slice.filterproducts);
  const dispatch=useDispatch()
    
  useEffect(() => {
    setloader(true)
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setallproducts(data))
        setitems(data)
        setloader(false)
      })
  //     const savedCart = sessionStorage.getItem('cartItems');
  // if (savedCart) {
  //   const parsedCart = JSON.parse(savedCart);
  //   parsedCart.forEach(item => {
  //     dispatch(addTocart(item));
  //   })
  // }
  }, [])
  
  function handleadd(item)
  {
    dispatch(addTocart(item))
    // const updatedCart = [...cartproducts, item];
    // sessionStorage.setItem('cartItems', JSON.stringify(updatedCart));
  }

  // local stograge 
  // localStorage.setItem("product",JSON.stringify(cartproducts))

  //session storage
  // sessionStorage.setItem("product",JSON.stringify(cartproducts))

  function handleinfo(product)
  {
    dispatch(setproductinfo(product))
  }
  function handlewish(product)
  {
    dispatch(addtowishlist(product))
  }

  function handlefilter(product)
  {
    dispatch(filterbycategory(product))
  }
  const productsToShow = filteritems.length > 0 ? filteritems : items;

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
      (loader ? (
        <Loader />
      ) : (
        <div className="pro">
              {/* <img src="/public/images/bgwaves.svg" style={{ width:"100%",position: "fixed", zIndex: -1, top: 0, opacity: 0.5 }} /> */}
          <h1 className='head'>Products</h1>
          <div className="page">
            <div className="category">
                <div className="header">
                    <h3 className='allcat'>Filter Section</h3>
                  </div>
                  <div className="box">
                      <div className='bl'><input type="radio" name="category" onChange={()=>handlefilter("all")}/>All<br></br></div>

                      <div className='bl'><input type="radio" name="category" onChange={()=>handlefilter("men's clothing")}/>Men's clothing<br></br></div>

                      <div className='bl'><input type="radio" name="category" onChange={()=>handlefilter("jewelery")}/>Jewelery<br></br></div>

                      <div className='bl'><input type="radio" name="category" onChange={()=>handlefilter("electronics")}/>Electronics<br></br></div>

                      <div className='bl'><input type="radio" name="category" onChange={()=>handlefilter("women's clothing")}/>Women's Clothing<br></br></div>
                  </div>
            </div>
        <div className="products1">
        {
          productsToShow.map((curr,index)=>{
            return (
              <>
              <div className="cards" key={index}>
                <div className="visuals">
                  <img src={curr.image} onClick={()=>handleinfo(curr)}></img>
                  <div className="icons">
                    {wishlist.some(item => item.id === curr.id) ? (
                      <IoMdHeart className="heart filled" onClick={() => handlewish(curr)} />
                    ) : (
                      <CiHeart className="heart" onClick={() => handlewish(curr)} />
                    )}
                  </div>
                </div>
                <div className="info">
                  <h5>{truncateText(curr.title,15)}</h5>
                  <p>Price: ${curr.price}</p>
                  <p>Rating: {curr.rating.rate}</p>
                  <div className="addtocart">
                    <button className="addbttn"onClick={()=>handleadd(curr)}>Add</button>
                  </div>
                </div>
              </div>
              </>
            )
          })
        }
        </div>
        </div>
        {productinfo ? <Productinfo product={productinfo} setproductinfo={setproductinfo} handleadd={handleadd}/> : ""}
      
      </div>
      
      ))
    }

    <Fotter />
    </>
  )
}

export default Products
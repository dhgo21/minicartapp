// Home.jsx
import React from 'react'
import "../css/Home.css"
import { Link } from 'react-router-dom'
import Fotter from './Fotter'
function Home() {
  return (
    <>
      <div className="boxing">
        <div className="shopnow">
          <img id="fp1"src="/images/frontpage1.jpg"></img>
          <Link to="/products"><button className='bttn1'>Shop Now</button></Link>
        </div>
        <div className="banners">
            <div className="banner1">
              <div className="leftboxs">
                  <img id="frontpage2"src="/images/frontpage2.jpg"></img>
                  <Link to="/products"><button className='button2'>Shop Now</button></Link>
              </div>
              <div className="midbox">
                <img className="midbox"src="/images/sale.jpg"></img>
              </div>
              <div className="rightboxs">
                <div className="banner2">
                    <img className="banner2" src='/images/frontpage3.jpg'></img>
                    <Link to="/products"><button className='button4'>Shop Now</button></Link>
                </div>
                <div className="banner2">
                    <img className="banner2" src='/images/frontpage4.jpg'></img>
                    <Link to="/products"><button className='button5'>Shop Now</button></Link>
                </div>
              </div>
            </div>
            </div>
            <div className="banners1">
              <div className="banner3">
                <img className="frontpage5" src='/images/frontpage5.jpg'></img>
                <Link to="/products"><button className='button6'>Shop Now</button></Link>
              </div>
              <div className="banner3">
                <img className="frontpage5" src='/images/frontpage6.jpg'></img>
                <Link to="/products"><button className='button7'>Shop Now</button></Link>
              </div>
              <div className="banner3">
                <img className="frontpage7"src='/images/frontpage7.jpg'></img>
                <Link to="/products"><button className='button8'>Shop Now</button></Link>
                <img className="frontpage7" src='/images/frontpage8.jpg'></img>
                <Link to="/products"><button className='button3'>Shop Now</button></Link>
              </div>
            </div>
      </div>
      <Fotter />
    </>
  )
}

export default Home

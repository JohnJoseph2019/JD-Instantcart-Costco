import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './StoreFrontNavBar.css'

export default class StoreFrontNavBar extends Component {
 render() {
  return (
   <>
    <nav className='header-navBar'>
     <div className='left-side'>
      <img className="instacart-logo" src={require("../../images/instacart-logo-white@3x.png")} alt="instacart" />
      <Link className="storeFrontNavBar-link" src='#'>Stores</Link>
     </div>

     <div className='right-side'>
      <Link className="storeFrontNavBar-link" src='#'>Account</Link>
      <Link className="storeFrontNavBar-link" src='#'>Help</Link>
      <img src={require("../../images/cart.png")} alt="cart" className="cart-logo" />
     </div>
    </nav>
   </>
  )
 }
}

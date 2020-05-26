import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './StoreFrontNavBar.css'
import DropdownMenu from '../shared/DropdownMenu'
import HamburgerNav from './HamburgerNav'
export default class StoreFrontNavBar extends Component {


 render() {
  return (
   <>
    <HamburgerNav callbackFromParent={this.props.callbackFromParent} />
    <nav className='header-navBar'>
     <div className='left-side'>
      <Link className="storeFrontNav-img-link" to="/costco">
       <img className="instacart-logo" src={require("../../images/instacart-logo-white@3x.png")} alt="instacart" />
      </Link>
      <DropdownMenu titleMenu={"Stores"} user={this.props.user} />
     </div>
     <div className='right-side'>
      <DropdownMenu titleMenu={"Account"} user={this.props.user} />
      <Link className="storeFrontNavBar-link" to='#'>Help</Link>
      <img src={require("../../images/cart.png")} alt="cart" className="cart-logo" />
     </div>
    </nav>
   </>
  )
 }
}

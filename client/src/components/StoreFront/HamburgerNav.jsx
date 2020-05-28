import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import { hamburgerLink } from "../selectedOptions"
import './HamburgerNav.css'

export default class HamburgerNav extends Component {
 constructor(props) {
  super(props)
  this.state = {
   menuOpen: false
  }
 }
 handleClick = event => {
  event.preventDefault();
  if (this.state.menuOpen === false) {
   console.log("handleClick", this.state.menuOpen)
   this.setState({ menuOpen: true });
  }
 }
 handleMenuClick = (event, property, value) => {
  event.preventDefault();
  this.setState({ menuOpen: false }, this.props.callbackFromParent(hamburgerLink(this.props.products, property, value)));

 }
 render() {
  return (
   <div className="hamburger-menu" onClick={this.handleClick}>
    <Menu
     isOpen={this.state.menuOpen}
    >
     <h1 className="departments-header">Departments</h1>
     <ul className="parent-menu-hamburger">

      <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'department', "Meat & Seafood")}>Meat & Seafood</Link>

       <ul className="parent-sub-menu-hamburger">

        <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Prime Beef")}>Prime Beef</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Pork & Lamb")}>Pork & Lamb</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Beef")}>Beef</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Seafood")}>Seafood</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Poultry")}>Poultry</Link></li>

       </ul>

      </li>

      <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'department', "Produce")}>Produce</Link>

       <ul className="parent-sub-menu-hamburger">

        <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Fruit & Vegetable Trays")}>Fruit & Vegetable</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Fruit")}>Fruit</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Vegetable")}>Vegetables</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Salad Mix")}>Salad Mix</Link></li>

       </ul></li>

      <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'department', "Deli")}>Deli</Link></li>

      <ul className="parent-sub-menu-hamburger">

       <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Meat & Cheese Trays")}>Meat & Cheese</Link></li>

       <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Prepared Meals")}>Prepared Meals</Link></li>

       <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Prepared Soups & Salad")}>Soups & Salad</Link></li>

       <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Dips & Spreads")}>Dips & Spreads</Link></li>
      </ul>

      <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'department', "Bakery & Desserts")}>Bakery & Desserts</Link>

       <ul className="parent-sub-menu-hamburger">

        <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Bread")}>Bread</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Buns & Rolls")}>Buns & Rolls</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Cookies")}>Cookies</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={(e) => this.handleMenuClick(e, 'category', "Pies & Cakes")}>Pies & Cakes</Link></li>

       </ul>

       <li><Link className="department-item" to="#" onClick={(e) => this.handleMenuClick(e, 'none', 'none')}>Back to Main</Link></li>

      </li>
     </ul>
    </Menu>
   </div>
  )
 }
}

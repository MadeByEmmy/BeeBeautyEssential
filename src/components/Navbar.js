import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import {FaBars, FaTimes, FaShoppingCart} from "react-icons/fa"
import {IconContext} from "react-icons/lib"
import beebeautyLogo from '../assets/logo.png'
import {Button, Modal} from 'react-bootstrap'

import CartProduct from './CartProduct'

//importing from CartContext
import { CartContext } from '../CartContext'


function Navbar() {
  // controller for the CartContext Shopping cart modal section
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  //styling the FaShopping cart
  const style = { color: "black" }
  
  // controller for the navigation mobile view
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  // controller of the shopping cart modal section
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
        <IconContext.Provider value={{color: "fff"}}>
            <nav className='navbar'>
                <div className='navbar-container container'>
                    <div className="logo">
                        <Link to="/" className="navbar-logo" >
                            <img src={beebeautyLogo} alt='logo'onClick={closeMobileMenu}/>
                            <p>Giving you the confidence to wear the skin you like.</p>
                        </Link>
                    </div>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes style={{color: 'black'}} /> : <FaBars style={{color: 'black'}} />}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/beebeauties" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                                BeeBeauties
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <Button onClick={handleShow} className='cart'><FaShoppingCart className='cart-icon' style={style}/><p className='total-numbers-cart'>{productsCount}</p></Button>
                </div>
            </nav>
            <Modal show={show} onHide={handleClose}> 
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        {productsCount > 0 ?
                            <>
                                <p>Items in your cart</p>
                                {cart.items.map((currentProduct, index) => (
                                    <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity}  ></CartProduct>
                                ))}

                                <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                                
                                <Button variant='success'>
                                    Purchase Items
                                </Button>
                            </>
                        :
                            <h1>There are no items in your Cart</h1>
                        }
                </Modal.Body>
            </Modal>
        </IconContext.Provider>
    </>
  )
}

export default Navbar
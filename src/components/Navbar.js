import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import {FaBars, FaTimes, FaShoppingCart} from "react-icons/fa"
import {IconContext} from "react-icons/lib"
import beebeautyLogo from '../assets/logo.png'
import {Button, Modal} from 'react-bootstrap'


function Navbar() {
  //styling the stars
  const style = { color: "black" }
  
  const [click, setClick] = useState(false)
  
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  // controller of the shopping cart section
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
                    <Button onClick={handleShow} className='cart'><FaShoppingCart className='cart-icon' style={style}/><>0</></Button>
                </div>
            </nav>
            <Modal show={show} onHide={handleClose}> 
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <h1>This is the modal Body</h1>
                </Modal.Body>
            </Modal>
        </IconContext.Provider>
    </>
  )
}

export default Navbar
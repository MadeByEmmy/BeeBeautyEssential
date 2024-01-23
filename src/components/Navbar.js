import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import {FaBars, FaTimes} from "react-icons/fa"
import {IconContext} from "react-icons/lib"
import beebeautyLogo from '../assets/logo.png'
import {Button, Modal} from 'react-bootstrap'


function Navbar() {
  const [click, setClick] = useState(false)
  
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
    <IconContext.Provider value={{color: "fff"}}>
        <nav className='navbar'>
            <div className='navbar-container container'>
                <div className="logo">
                    <Link to="/" className="navbar-logo" >
                        <img src={beebeautyLogo} alt='logo' width={150} onClick={closeMobileMenu}/>
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
                <Button>Cart 0 Items</Button>
            </div>
        </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
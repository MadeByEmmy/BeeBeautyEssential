import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import {FaBars, FaTimes} from "react-icons/fa"
import {IconContext} from "react-icons/lib"
import beebeautyLogo from '../assets/logo.jpg'
import { click } from '@testing-library/user-event/dist/click'


function Navbar() {
  
  const [click, setClick] = useState(false)
  
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container container'>
            <Link to="/" className="navbar-logo" >
                <img src={beebeautyLogo} alt='logo' width={200} onClick={closeMobileMenu}/>
                <p>Given you the confidence to wear your skin</p>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
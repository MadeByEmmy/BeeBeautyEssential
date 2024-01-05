import React from 'react'
import "../components/Home.css"
import allproductimages from "../assets/all-product-image.jpg"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <div className='aboutus'>
          <div className='aboutus-write-up'>
            <h1>About Us</h1>
            <p>BeeBeauty Essentials is a fully African beauty and health focused brand creating a range of essentials for your skin and hair care using locally sourced natural ingredients which are neatly formulated and handmade with love to give you the best treatment you deserve.
            <br /> <br />Our mission is to give you the confidence to wear the skin you like.</p>
            <Link to="/Beebeauties">
              <button className='btn'>Beebeauties</button>
            </Link>
          </div>
          <div className='allproductimage'>
            <img src={allproductimages} alt="all-product-images" />
          </div>
        </div>
    </div>
  )
}

export default Home
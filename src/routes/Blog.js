import React from 'react'
import "../components/Blog.css"
import comingsoonimage from "../assets/page_coming_soon.jpg"

function Blog() {
  return (
    <div className='blog'>
        <img src={comingsoonimage} alt='blog image'/>
    </div>
  )
}

export default Blog
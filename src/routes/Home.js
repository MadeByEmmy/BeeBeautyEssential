import React, {useRef, useState} from "react";
//importing Email.js 
import emailjs from '@emailjs/browser';
import "../components/Home.css"
import ceoimage from "../assets/7.jpg"
import inspired from "../assets/8.jpg"
import sourced from "../assets/9.jpg"
import backed from "../assets/10.jpg"
import bestseller from "../assets/result.png"
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,A11y,Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
// import Swiper core and required modules
import 'swiper/css/pagination';

import { FaStar, FaPhoneSquareAlt, FaEnvelopeOpenText, FaInstagramSquare, FaFacebookSquare  } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight, FaSquareXTwitter } from "react-icons/fa6";



  const heroData = [
  {
    id: 1,
    image: require('../assets/1.jpg'),
  },
  {
    id: 2,
    image: require('../assets/2.jpg'),
  },
  {
    id: 3,
    image: require('../assets/3.jpg'),
  },
  {
    id: 4,
    image: require('../assets/4.jpg'),
  },
  {
    id: 5,
    image: require('../assets/5.jpg'),
  },
  {
    id: 6,
    image: require('../assets/6.jpg')
  }
]

const data = [
  {
    id: 1,
    username: "Emmanuel E.",
    testimonial: "I have used products from other suppliers, but BeeBeauty Essentials is the best,my experience     with her product has been the best and I can guarantee you the perfect results that you want. 💯💯💯💯",
    star: <FaStar />
  },
  {
    id: 2,
    username: "Tomiloloa O.",
    testimonial: "Absolutely lovely and effective products. The packaging is also top notch, it's so much bigger than it looks in the pictures. Great value for money. I use the Black soap for my 4 year old too and Hubby uses the liquid black soap too. Absolutely recommend!",
    star: <FaStar />
  },
  {
    id: 3,
    username: "Queen O.",
    testimonial: "My husband and I have used the products for a while now, it makes our skin feel smooth no matter the weather. I would definitely recommend to anyone looking to feel and smell good 😎",
    star: <FaStar />
  },
  {
    id: 4,
    username: "Rowland O.",
    testimonial: "I have used products from other suppliers, but BeeBeauty Essentials is the best,my experience     with her product has been the best and I can guarantee you the perfect results that you want.",
    star: <FaStar />
  }
]

function AppHero() {
  //styling the stars
  const style = { color: "gold" }
  //facebook Profile Page
  const facebookProfile = 'https://m.facebook.com/beebeautyessentials/';
  //Instagram Profile Page
  const instagramProfile = 'https://www.instagram.com/beebeautyessentials/';
  //facebook Profile Page
  const twitterProfile = 'https://www.instagram.com/beebeautyessentials/';
  //Email Address
  const emailAddress = 'mailto:beebeautyessentials@gmail.com';
  //Subcription form
  const form = useRef()

  //sending Emailjs function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cc1h1ew', 'template_oucmmak', form.current, 'p8yx2bdhcQYvRykI7')
      .then(() => {
          // change button text

      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  
  return (
    <div className="mainpage">
      <div className='homepage'>
        <div className='aboutus'>
            <div className='aboutus-desp'>
              <h2>About Us</h2>
              <p>BeeBeauty Essentials is a fully African beauty and health focused brand creating a range of essentials for your skin and hair care using locally sourced natural ingredients which are neatly formulated and handmade with love to give you the best treatment you deserve.
              <br /> <br /> Our mission is to give you the confidence to wear the skin you like.</p>
              <Link to="/Beebeauties">
                <button className='button'>BeeBeauties</button>
              </Link>
            </div>
            <div>
              
            </div>
        </div>
        <div className="ceo-writeup">
          <div className='ceoimage-desp'>
            <img src={ceoimage} />
          </div>
          <div>
            <p>BeeBeauty Essentials is a fully African beauty and health focused brand creating a range of essentials for your skin and hair care using locally sourced natural ingredients which are neatly formulated and handmade with love to give you the best treatment you deserve.</p>
          </div>
        </div>
      </div>
      <div className='inspirationalquotes'>
          <div className='inspirdesp'>
              <img src={inspired} />
              <p>INSPIRED BY BEAUTY</p>
              <img src={sourced} />
              <p>SOURCED FROM NATURE</p>
              <img src={backed} />
              <p>BACKED BY SCIENCE</p>
          </div>
      </div>
      <div className="bestseller">
        <div className="bestseller-write">
        <h3>Our Best Seller</h3>
        <p>Transform your beauty routine into a masterpiece with our latest cosmetic sensation! 🌟 Unveil the magic of radiant hues, flawless finishes, and a touch of glamour. Elevate your look with a dash of luxury and a sprinkle of confidence. Unleash your inner glow and let your beauty shine, because you're not just using cosmetics – you're creating a masterpiece. Indulge in the extraordinary, embrace your allure!"</p>
        <div className="subscription-form">
          <h3>Let’s Connect</h3>
          <p>Hi! Sign up for our newsletter and be the first to know about exclusive offers, heads up on new product updates and launches, pop-ups events of BeeBeauty Essentials, juicy discounts and more. </p>
          <form ref={form} onSubmit={sendEmail} className="subscription-main-form">
              <input type="text" placeholder="Full Name" name="name" required />
              <input type="email" placeholder="Email Address" name="email" required />
              <button type="submit" className="submit-btn">Subscribe</button>
          </form>
        </div>
        </div>
        <div className="best-seller-pro">
          <img src={bestseller} />
        </div>
      </div>
      <div className="swipercontainer">
        <h1 className="testimonial-header">What People Say About Us</h1>
        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            200:{
              slidesPerView:1,
            },
            320:{
                slidesPerView:1,
            },
            767:{
                slidesPerView:2,
            },
            600:{
                slidesPerView:3,
            },
            1000:{
                slidesPerView:3
            }
          }}
          pagination={{ clickable: true}}
          spaceBetween={20}
          slidesPerView={3}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {data.map((data,index) => (
            <SwiperSlide key={data.id} virtualIndex={index} className="slide">
              <div className="testimonial-desp">
                <FaQuoteLeft className="quoteleft" />{data.testimonial }<FaQuoteRight className="quoteright" />
              </div>
              <div className="review-name">
                {data.username}
              </div>
              <div>
                <FaStar style={style} /><FaStar style={style} /><FaStar style={style} /><FaStar style={style} /><FaStar style={style} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <footer className="footer">
          <div className="footer-form">
            <h3>Let’s Connect</h3>
            <p>Hi! Sign up for our newsletter and be the first to know about exclusive offers, heads up on new product updates and launches, pop-ups events of BeeBeauty Essentials, juicy discounts and more. </p>
            <form ref={form} onSubmit={sendEmail}className="subscription-main-form-footer">
                <input type="text" placeholder="Full Name" name="name" className="input_name" required />
                <input type="email" placeholder="Email Address" name="email" className="input_email" required />
                <button type="submit" className="submit-btn-footer">Subscribe</button>
            </form>
          </div>
          <nav className="footer-nav">
            <div>
              <h3>Shop</h3>
              <ul>
                <li>
                  <Link to="./#">
                  Shop All
                  </Link>
                </li>
                <li>
                  <Link to="./#">
                  Hair Care
                  </Link>
                </li>
                <li>
                  <Link to="./#">
                  Body Care
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>About Us</h3>
              <ul>
                <li>
                  <Link to="./#">
                  About The Brand
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>FAQ</h3>
              <ul>
                <li>
                  <Link to="./Blog">
                  Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>Customer Support</h3>
              <ul>
                <li>
                  <FaPhoneSquareAlt />  +234 802 222 5861
                </li>
                <li>
                <a href={emailAddress}>
                  <FaEnvelopeOpenText /> beebeautyessentials@gmail.com
                </a>
                </li>
              </ul>
              <div className="nav-icons">
                <a href={facebookProfile} target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare style={{ fontSize: '30px', marginRight:'5px' }} className="icons" />
                </a>
                <a href={instagramProfile}>
                <FaInstagramSquare style={{ fontSize: '30px', marginRight:'5px' }} className="icons" />
                </a>
                <a href={twitterProfile}>
                <FaSquareXTwitter style={{ fontSize: '30px' }} className="icons"  />
                </a>
              </div>
            </div>
          </nav>
          <div className="copyright">
          <p>&copy; 2024 MadeByEmmyConcepts, All Rights Reserved.</p>
          </div>
      </footer>
    </div>
  );
}

export default AppHero;

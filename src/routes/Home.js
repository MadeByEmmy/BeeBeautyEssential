import React, {useRef, useState} from "react";
//importing Email.js 
import emailjs from '@emailjs/browser';

//importing the css component
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
//import React Icons

import { FaStar } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight} from "react-icons/fa6";

//importing from the dataStore
import { productImageData } from "../dataStore/productImageData"
import { testimonialData } from "../dataStore/testimonialData"

function AppHero() {
  //styling the stars
  const style = { color: "gold" }

  //sending Emailjs function
  const [buttonText, setButtonText] = useState('Subscribe');
  //Subcription form
  const formRef = useRef(null)
  
  const sendEmail = (e) => {
    e.preventDefault();

    setButtonText('Wait...'); // Change button text during sending

    emailjs.sendForm('service_sh9kylo', 'template_hvcp6s9', formRef.current, 'ACcT6cgGYHF3vHLVU')
      .then(() => {
        setButtonText('Subscription Successfull'); // Change button text on success

        // Reset the form
        formRef.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        setButtonText('Error Subscribing, Try Again'); // Change button text on error
      });
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
            <div className="product-image-swiper-container">
              <Swiper className="product-image-swiper"
                modules={[Autoplay, Pagination, A11y]}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true}}
                spaceBetween={0}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                {productImageData.map((productImageData,index) => (
                  <SwiperSlide key={productImageData.id} virtualIndex={index} className="product-image-swiper">
                    <img src={productImageData.image} alt="productimage"/>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
        </div>
        <div className="ceo-writeup">
          <div className='ceoimage-desp'>
            <img src={ceoimage} alt=""/>
          </div>
        </div>
      </div>
      <div className='inspirationalquotes'>
          <div className='inspirdesp'>
              <img src={inspired} alt="" />
              <p className="inspiredpara">INSPIRED BY BEAUTY</p>
              <img src={sourced} alt="" className="inspiredimg"/>
              <p className="special">SOURCED FROM NATURE</p>
              <img src={backed} alt="" />
              <p>BACKED BY SCIENCE</p>
          </div>
      </div>
      <div className="bestseller">
        <div className="bestseller-write">
        <div className="bestseller-write-up">
        <h3>Our Best Seller</h3>
        <p>Transform your beauty routine into a masterpiece with our latest cosmetic sensation! 🌟 Unveil the magic of radiant hues, flawless finishes, and a touch of glamour. Elevate your look with a dash of luxury and a sprinkle of confidence. Unleash your inner glow and let your beauty shine, because you're not just using cosmetics – you're creating a masterpiece. Indulge in the extraordinary, embrace your allure!"</p>
        </div>
        <div className="best-seller-pro">
          <img src={bestseller} alt="" />
        </div>
        </div>
        <div className="subscription-form">
          <h3>Let’s Connect</h3>
          <p>Hi! Sign up for our newsletter and be the first to know about exclusive offers, heads up on new product updates and launches, pop-ups events of BeeBeauty Essentials, juicy discounts and more. </p>
          <form ref={formRef} onSubmit={sendEmail}className="subscription-main-form">
                <input type="text" placeholder="Full Name" name="name" className="input_name" required />
                <input type="email" placeholder="Email Address" name="email" className="input_email" required />
                <button type="submit" className="submit-btn">{buttonText}</button>
            </form>
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
          {testimonialData.map((testimonialData,index) => (
            <SwiperSlide key={testimonialData.id} virtualIndex={index} className="slide">
              <div className="testimonial-desp">
                <FaQuoteLeft className="quoteleft" />{testimonialData.testimonial }<FaQuoteRight className="quoteright" />
              </div>
              <div className="review-name">
                {testimonialData.username}
              </div>
              <div>
                <FaStar style={style} /><FaStar style={style} /><FaStar style={style} /><FaStar style={style} /><FaStar style={style} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default AppHero;

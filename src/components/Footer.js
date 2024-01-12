import React, { useRef, useState } from "react";
//importing Email.js 
import emailjs from '@emailjs/browser';
//Importin Footer css
import "../components/Footer.css"

import { Link } from 'react-router-dom';


//Importing React icons
import { FaPhoneSquareAlt, FaEnvelopeOpenText, FaInstagramSquare, FaFacebookSquare  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  //facebook Profile Page
  const facebookProfile = 'https://m.facebook.com/beebeautyessentials/';
  //Instagram Profile Page
  const instagramProfile = 'https://www.instagram.com/beebeautyessentials/';
  //facebook Profile Page
  const twitterProfile = 'https://www.instagram.com/beebeautyessentials/';
  //Email Address
  const emailAddress = 'mailto:beebeautyessentials@gmail.com';


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
        setButtonText('Error Subscribing'); // Change button text on error
      });
  };
  return (
    <>
        <footer className="footer">
          <div className="footer-form">
            <h3>Let’s Connect</h3>
            <p>Hi! Sign up for our newsletter and be the first to know about exclusive offers, heads up on new product updates and launches, pop-ups events of BeeBeauty Essentials, juicy discounts and more. </p>
            <form ref={formRef} onSubmit={sendEmail}className="subscription-main-form-footer">
                <input type="text" placeholder="Full Name" name="name" className="input_name" required />
                <input type="email" placeholder="Email Address" name="email" className="input_email" required />
                <button type="submit" className="submit-btn-footer">{buttonText}</button>
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
                <a href={instagramProfile} target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare style={{ fontSize: '30px', marginRight:'5px' }} className="icons" />
                </a>
                <a href={twitterProfile} target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter style={{ fontSize: '30px' }} className="icons"  />
                </a>
              </div>
            </div>
          </nav>
          <div className="copyright">
          <p>&copy; 2024 MadeByEmmyConcepts, All Rights Reserved.</p>
          </div>
      </footer>
    </>
  )
}

export default Footer
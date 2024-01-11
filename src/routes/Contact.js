import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import "../components/Contact.css";
import ceoimage from "../assets/11.jpg"
//Importing React icons
import { FaPhoneSquareAlt, FaEnvelopeOpenText } from "react-icons/fa";

function Contact() {
  //sending Emailjs function
  const [buttonText, setButtonText] = useState('Send Message');
  //Subcription form
  const formRef = useRef(null)
  
  const sendEmail = (e) => {
    e.preventDefault();

    setButtonText('Sending...'); // Change button text during sending

    emailjs.sendForm('service_cc1h1ew', 'template_dn4bind', formRef.current, 'p8yx2bdhcQYvRykI7')
      .then(() => {
        setButtonText('Sent Successfully'); // Change button text on success

        // Reset the form
        formRef.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        setButtonText('Error Subscribing'); // Change button text on error
      });
  };
  return (
    <div className='contact'>
      <div className='get-in-touch'>
        <div className='get-in-touch-writeup'>
          <h3>Get In Touch</h3>
          <p>Whether you are looking for more information on our product, or you just want to say Hi. We would love to hear from you.</p>
          <h3>General Enquires</h3>
          <div className='contact-icons'><FaEnvelopeOpenText /> beebeautyessentials@gmail.com</div>
          <div  className='contact-icons'><FaPhoneSquareAlt />  +234 802 222 5861</div>
        </div>
        <div className='ceo-contact-image'>
          <img src={ceoimage}  />
        </div>
      </div>
      <div className='form'>
        <h3>Leave us a Message</h3>
        <form ref={formRef} onSubmit={sendEmail}className="contact-form">
          <input type="text" placeholder="Full Name *" name="user_name" className="input_name" required />
          <input type="email" placeholder="Email Address *" name="user_email" className="input_email" required />
          <textarea name='message' style={{ width: '600px', height: '150px', padding:'10px' }} placeholder='Type your message here'></textarea>
          <button type="submit" className="submit-btn">{buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
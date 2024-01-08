import React from "react";
import "../components/Home.css"
import ceoimage from "../assets/7.jpg"
import inspired from "../assets/8.jpg"
import sourced from "../assets/9.jpg"
import backed from "../assets/10.jpg"
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,A11y,Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
// import Swiper core and required modules
import 'swiper/css/pagination';

import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";


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
    username: "Queen O.",
    testimonial: "My husband and I have used the products for a while now, it makes our skin feel smooth no matter the weather. I would definitely recommend to anyone looking to feel and smell good 😎",
    star: <FaStar />
  },
  {
    id: 3,
    username: "Tomiloloa O.",
    testimonial: "Absolutely lovely and effective products. The packaging is also top notch, it's so much bigger than it looks in the pictures. Great value for money. I use the Black soap for my 4 year old too and Hubby uses the liquid black soap too. Absolutely recommend!",
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
  const style = { color: "gold" }
   // Create array with 1000 slides
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div className='homepage'>
        <div className='aboutus'>
            <div className='aboutus-desp'>
              <h1>About Us</h1>
              <p>BeeBeauty Essentials is a fully African beauty and health focused brand creating a range of essentials for your skin and hair care using locally sourced natural ingredients which are neatly formulated and handmade with love to give you the best treatment you deserve.
              <br /> <br /> Our mission is to give you the confidence to wear the skin you like.</p>
              <Link to="/Beebeauties">
                <button className='button'>BeeBeauties</button>
              </Link>
            </div>
            <div>
              
            </div>
        </div>
        <div className='ceoimage-desp'>
          <img src={ceoimage} />
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
      <div className="swipercontainer">
        <h1>What People Say About Us</h1>
        <Swiper
          modules={[Autoplay,Pagination, A11y]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true}}
          spaceBetween={20}
          slidesPerView={2}
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
    </>
  );
}

export default AppHero;

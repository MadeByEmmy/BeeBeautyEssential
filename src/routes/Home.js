import Carousel from 'react-bootstrap/Carousel';
import "../components/Home.css"
import {ceoimage} from "../assets/ceo.jpg"


var heroData = [
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
    image: require('../assets/6.jpg'),
  }
]

function AppHero() {
  return (
      <div className='homepage'>
        <div className='aboutus'>
            <div className='aboutus-desp'>
              <h1>About Us</h1>
              <p>BeeBeauty Essentials is a fully African beauty and health focused brand creating a range of essentials for your skin and hair care using locally sourced natural ingredients which are neatly formulated and handmade with love to give you the best treatment you deserve.
              <br /> <br /> Our mission is to give you the confidence to wear the skin you like.</p>
            </div>
            <section id="home" className="hero-block">
              <Carousel>
                  {
                    heroData.map(hero => {
                      return (
                        <Carousel.Item key={hero.id}>
                          <img
                            className="productimage"
                            src={hero.image}
                            alt={"slide " + hero.id}
                          />
                        </Carousel.Item>
                      );
                    })
                  }
              </Carousel>
            </section>
        </div>
        <div>
          <img src={ceoimage} />
        </div>
      </div>
  );
}

export default AppHero;

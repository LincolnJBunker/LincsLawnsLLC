import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { Outlet, useNavigate } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";
import ContactForm from "../Components/ContactForm";
import mountains_img from '../assets/mountains.jpg';
import welcomelawn_img from '../assets/welcome-lawn.jpg';
import welcomedriveway_img from '../assets/welcome-driveway.jpg'
import welcomegrill_img from '../assets/welcome-grill.jpg'

function Home() {
  const navigate = useNavigate();
  return (
    <div className="Home">
      {/* <h2 className="home-welcome">Welcome</h2> */}
      <div className="welcome-carousel">
        <Carousel controls indicators>
          <Carousel.Item>
            <img className='carousel-image' src={welcomelawn_img} alt="slide 1" />
            <Carousel.Caption>
              <div className="home-description">
                <p>Lawn Care</p>
                <h2>Lush, pristine grass</h2>

              </div>
              <div>
                <Button className="button" onClick={() => navigate('/services/lawncare')}>Learn More</Button>
                <Button className='schedule-button' onClick={() => navigate('/schedule/appointment')}>Schedule Now</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='carousel-image' src={welcomedriveway_img} alt="slide 2" />
            <Carousel.Caption>
              <p>Power Washing</p>
              <h2>Clean, spotless driveways</h2>
              <div>
                <Button className="button" onClick={() => navigate('/services/powerwashing')}>Learn More</Button>
                <Button className='schedule-button' onClick={() => navigate('/schedule/appointment')}>Schedule Now</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='carousel-image-grill' src={welcomegrill_img} alt="" />
            <Carousel.Caption>
              <p>Grill Cleaning</p>
              <h2>Shiny, stainless grills</h2>
              <div>
                <Button className="button" onClick={() => navigate('/services/grillcleaning')}>Learn More</Button>
                <Button className='schedule-button' onClick={() => navigate('/schedule/appointment')}>Schedule Now</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <h3 className="who-and-what">Welcome</h3>
      <p className="welcome-intro">
        Discover the beauty of pristine lawns, spotless driveways, and gleaming grills with Alpine Twin Peak Maintenance. 
        Proudly serving the Salt Lake City, Utah community, we specialize in lawn aeration, driveway pressure washing, and grill cleaning. 
        Elevate the curb appeal of your home with our professional services. For a cleaner, greener, and more welcoming outdoor space, trust Alpine Twin Peak Maintenance.
      </p>
      
      <div className="learn-more">
        <p>To learn more about Alpine Twin Peak Maintenance, click below</p>
        <Button className="button" onClick={() => navigate('/about')}>Learn More</Button>
      </div>

      <div className="home-container">
        <div className="home-left">
          <div className="left-img">
            <img src={mountains_img} alt="lone peak" />
          </div>
          <div className="left-content">
            <h3>Schedule an Appointment Below</h3>
            <Button className="button" onClick={() => navigate('/schedule/appointment')}>Here</Button>
          </div>
        </div>

        <div className="home-right">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Home
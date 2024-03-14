import { useNavigate } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";
function BBQ() {
  const navigate = useNavigate();
  return (
    <div className="bbq">
      {/* <div className="services-carousel">
        <Carousel controls indicators>
          <Carousel.Item>
            <img src='' alt="slide1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src='' alt="slide2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="" alt="slide3" />
          </Carousel.Item>
        </Carousel>
      </div> */}
     <h3 className="services-header">Our Grill Cleaning Process</h3>
     <p className="services-details">
        We begin our powerwasing process by blowing by checking out the driveway for any signs
        of damage and distress. We do this so we do not further damage your driveway. We then blow off
        any debris that could be on your driveway; pebbles, rocks, pinecones, etc. Using a pressure washer,
        we start at the highest point of your driveway and work to the lowest point, taking our time to ensure
        that we get every inch of your driveway. We maintain the pressue washer at an angle that will 
        effectivley clean your driveway, while not damaging it.
      </p>
    <div className="service-container">
      <div className="service-appointment">
        <p>Click here to schedule an appointment</p>
        <Button className="button" onClick={() => navigate('/schedule/appointment')}>Schedule Appointment</Button>
      </div>
    </div>  

    <div className="service-container">
      <div className="service-faq">
        <p>Have more questions about grill cleaning? Check out our FAQ's below!</p>
        <Button className="button" onClick={() => navigate('/faqs')}>FAQ's</Button>
      </div>

    </div>

    </div>
  )
}

export default BBQ
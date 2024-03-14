import { useNavigate } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";
function Lawncare() {
  const navigate = useNavigate();

  return (
    <div className="lawncare">
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
    <h3 className="services-header">Our Lawn Care Process</h3>
    <p className="services-details">
      We offer various types of lawn care. We specalize in lawn aerating during the spring and fall.
      We quote you on your lawn based on the size of the front and backyard first. Then, we prepare by
      marking where all your sprinklers are with flags. We aerate your lawn
    </p>

    <div className="service-container">
      <div className="service-appointment">
        <p>Click here to schedule an appointment</p>
        <Button className="button" onClick={() => navigate('/schedule/appointment')}>Schedule Appointment</Button>
      </div>
    </div>

    <div className="service-container">
      <div className="service-faq">
        <p>Have more questions about lawn care? Check out our FAQ's below!</p>
        <Button className="button" onClick={() => navigate('/faqs')}>FAQ's</Button>
      </div>
    </div>

    </div>
  )
}

export default Lawncare
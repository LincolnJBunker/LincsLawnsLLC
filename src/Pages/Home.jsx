import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { Outlet, useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap";
import logo_png from '../assets/logo.png'

function Home() {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <h2 className="home-welcome">Welcome</h2>
      <img className="logo" src={logo_png} alt="company logo" />
      <h3>Who we are and what we do</h3>
      <p>Discover the beauty of pristine lawns, spotless driveways, and gleaming grills with Alpine Twin Peak Maintenance. 
        Proudly serving the Salt Lake City, Utah community, we specialize in lawn aeration, driveway pressure washing, and grill cleaning. 
        Elevate the curb appeal of your home with our professional services. For a cleaner, greener, and more welcoming outdoor space, trust Alpine Twin Peak Maintenance.
      </p>

      <p/>

      <p>brief information about buisness</p>
      <p>Click below to learn more</p>
      <Button className="button" onClick={() => navigate('/about')}>Learn More</Button>

      <p />
      <h3>Put some cool pictures of mountains here</h3>
      <p/>

      <h3>Schedule an Appointment Below</h3>
      <Button className="button" onClick={() => navigate('/schedule/appointment')}>Here</Button>

    </div>
  )
}

export default Home
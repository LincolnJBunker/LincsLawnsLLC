import Me from "../Components/Me";
import ServiceCards from "../Components/ServiceCards";
import Map from "../Components/About/Maps";
import Footer from "../Components/Footer";
import CityCards from "../Components/CityCards";

function About() {
  return (
    <>
      <h1 className="about">About</h1>

      <h2>Company Overview</h2>
      <p className="company-overview">Alpine Twin Peak Maintenance offers various professional services for whatever your
        needs may be. Check out some of the services offered for more information!
      </p>
        <ServiceCards />
      <h2>Mission and Values</h2>
      <p className="mission-and-values">
        Alpine Twin Peak Maintenance is determined to provide high-quality services that are 
        affordable and to your conveience. We value customer satisfaction, ensuring that our provided services
        surpass your expectations. Your time is valuable, we make communication a high priorty and want to 
        respect your time. We aim to make our maintenance process easy and stress-free for you.
      </p>

      <h2>About Me</h2>
        <Me />

      <h2>Quality of Service</h2>

      <h2>Service Area</h2>
      <p className="service-area">We service to many cities and counties all across the State of Utah</p>
        <CityCards />
        <p/>
      <p className="map-info">Check out popular services offered in each location by clicking on the markers below!</p>
        <Map />
    </>
  )
}

export default About
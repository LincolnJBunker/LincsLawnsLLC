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
      <p>Alpine Twin Peak Maintenance offers various professional services for whatever Your
        needs may be. Check out some of the services offered for more information!
      </p>
        <ServiceCards />
      <h2>Mission and Values</h2>

      <h2>About Me</h2>
        <Me />
      <h2>Client-Centric Approach</h2>

      <h2>Quality of Service</h2>

      <h2>Service Area</h2>
      <p>We service to many cities and counties all across the State of Utah</p>
        <CityCards />
        <p/>
      <p>Check out popular services offered in each location by clicking on the markers below!</p>
        <Map />
    </>
  )
}

export default About
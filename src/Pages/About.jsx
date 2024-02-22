import Me from "../Components/Me"
import ServiceCards from "../Components/ServiceCards"

function About() {
  return (
    <>
      <h1 className="about">About</h1>

      <h2>Company Overview</h2>
        <ServiceCards />
      <h2>Mission and Values</h2>

      <h2>About Me</h2>
        <Me />
      <h2>Client-Centric Approach</h2>

      <h2>Quality of Service</h2>

      <h2>Service Area</h2>
    </>
  )
}

export default About
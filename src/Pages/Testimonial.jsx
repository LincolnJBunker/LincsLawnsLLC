import axios from "axios"
import AddTestimonialBtn from "../Components/Testimonial Components/AddTestimonialBtn"
import TestimonialCard from "../Components/Testimonial Components/TestimonialCard"
import TestimonialForm from "../Components/Testimonial Components/TestimonialForm"
import { useState } from "react"

function Testimonial() {

  const [startingTestimonialData, setStartingTestimonialData] = useState('')
  
  const addTestimonial = () => {
    axios.post('/testimonial/add', {
      testimonialDescription: 'Enter description of testimonial here',
      testimonialName: "Enter name here",
      testimonialCity: "Enter city name here"
    })
      .then((res) => {
        setStartingTestimonialData([...startingTestimonialData, res.data.newTestimonial])
      })
  }

  return (
    <>
      <h1>Testimonials</h1>

      <TestimonialCard />
      <AddTestimonialBtn />

      
    </>
  )
}

export default Testimonial
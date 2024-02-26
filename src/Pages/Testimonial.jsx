import axios from "axios"
import AddTestimonialBtn from "../Components/Testimonial Components/AddTestimonialBtn"
import TestimonialCard from "../Components/Testimonial Components/TestimonialCard"
import TestimonialForm from "../Components/Testimonial Components/TestimonialForm"
import { useState, useEffect } from "react"

function Testimonial() {

  const [testimonials, setTestimonials] = useState([])

  let testimonialGet = async () => {axios.get('/api/testimonials')
  .then((res) => {
    setTestimonials(res.data)
  })
}

useEffect(() => {
  testimonialGet()
},[])

  const allTestimonials = testimonials.map((testimonial) => <TestimonialCard testimonial={testimonial} key={testimonial.testimonialId} />)

  return (
    <>
    <h1>Testimonial Page</h1>

    {allTestimonials}
    </>
  )
}

export default Testimonial
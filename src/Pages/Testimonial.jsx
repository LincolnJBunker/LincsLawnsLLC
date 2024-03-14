import axios from "axios"
import AddTestimonialBtn from "../Components/Testimonial Components/AddTestimonialBtn"
import TestimonialCard from "../Components/Testimonial Components/TestimonialCard"
import TestimonialForm from "../Components/Testimonial Components/TestimonialForm"
import { useState, useEffect } from "react"

function Testimonial() {

  const [testimonials, setTestimonials] = useState([]);
  const [testimonialName, setTestimonialName] = useState('');
  const [testimonialCity, setTestimonialCity] = useState('');
  const [testimonialDescription, setTestimonialDescription] = useState('');
  const [a, setA] = useState(0)

  let testimonialGet = async () => {axios.get('/api/testimonials')
  .then((res) => {
    setTestimonials(res.data)
  })
}

useEffect(() => {
  testimonialGet()
},[])

  const allTestimonials = testimonials.map((testimonial) => <TestimonialCard testimonial={testimonial} key={testimonial.id} />)

  return (
    <>
    <h1 className="testimonial-header">Testimonials</h1>
    <p className="testimonial-info">
      See what others have to say about Alpine Twin Peak Maintenance
    </p>
    {allTestimonials}
    
    <h3 className="form-header">Write a Testimonial</h3>
    <TestimonialForm setTestimonials={setTestimonials} />
    </>
  )
}

export default Testimonial
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

  const allTestimonials = testimonials.map((testimonial) => <TestimonialCard testimonial={testimonial} key={testimonial.testimonialId} />)

  // let testimonialAdd = async (e) => {
  //   e.preventDefault()
  //   axios.post('/api/testimonial/add', {
  //     testimonialName: 'testimonialName',
  //     testimonialCity: 'testimonialCity',
  //     testimonialDescription: 'testimonialDescription'
  //   })
  //   .then((res) => {
  //     console.log(res.data)
  //     setTestimonials(res.data)
  //     // setA(a + 1)
  //     if(res.data.status) {
  //       resetFields()
  //     }
  //   })
  // }

  // function resetFields(){
  //   setTestimonialName('')
  //   setTestimonialCity('')
  //   setTestimonialDescription('')
  // }

  return (
    <>
    <h1>Testimonial Page</h1>

    {allTestimonials}

    <TestimonialForm setTestimonials={setTestimonials} />
    </>
  )
}

export default Testimonial
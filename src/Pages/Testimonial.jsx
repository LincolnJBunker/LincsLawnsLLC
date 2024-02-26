import axios from "axios"
import AddTestimonialBtn from "../Components/Testimonial Components/AddTestimonialBtn"
import TestimonialCard from "../Components/Testimonial Components/TestimonialCard"
import TestimonialForm from "../Components/Testimonial Components/TestimonialForm"
import { useState } from "react"

function Testimonial() {

  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddTestimonial = (testimonail) => {
    setTestimonials([...testimonials, testimonail]);
    setShowForm(false)
  }

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
      <div className="testimonial-page">
        <button onClick={() => setShowForm(true)}>Write a Testimonial</button>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
        {showForm && <TestimonialForm onSubmit={handleAddTestimonial} />}
      </div>
    </>
  )
}

export default Testimonial
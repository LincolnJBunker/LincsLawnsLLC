import { Button } from "react-bootstrap";
import { useState } from "react"
import axios from "axios";

function TestimonialForm({ setTestimonials }) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !city || !description) {
      alert('Please fill out all of the fields.')
      return;
    };
    axios.post('/api/testimonial/add', {
      testimonialName: name,
      testimonialCity: city,
      testimonialDescription: description
    })
    .then((res) => {
      setTestimonials(res.data)
      //reset the fields
      setName('');
      setCity('');
      setDescription('');
    })

  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <div className="testimonial-form">
        <label htmlFor="description">Description</label>
        <input 
        type="text" 
        className="testimonial-control" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        />
      </div>
      
      <div className="testimonial-form">
        <label htmlFor="name">Name</label>
        <input 
        type="text"
        className="testimonial-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <div className="testimonial-form">
        <label htmlFor="city">City</label>
        <input 
        type="text" 
        className="testimonial-control"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <Button className='button' type="submit">Submit</Button>
    </form>
  )
}

export default TestimonialForm
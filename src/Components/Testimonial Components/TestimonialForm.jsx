import { useState } from "react"

function TestimonialForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    onSubmit({ name, city, description });

    //reset the fields
    setName('');
    setCity('');
    setDescription('');
  };

  return (
    <div className="testimonial-form">
      <input 
      type="text"
      placeholder="Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <input 
      type="text" 
      placeholder="Your City"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      />
      <input 
      type="text"
      placeholder="Description" 
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit Testimonial</button>
    </div>
  )
}

export default TestimonialForm
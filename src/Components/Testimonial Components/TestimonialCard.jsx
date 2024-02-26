import { Card } from "react-bootstrap" 

function TestimonialCard( { name, city, description }) {
  return (
    <div className="testimonial-card">
      <div>
        <Card>
          <Card.Body>
            <p>{description}</p>
            <h5>{name}</h5>
            <h6>{city}</h6>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default TestimonialCard
import { Card } from "react-bootstrap" 

function TestimonialCard({testimonial}) {
  const {testimonialName, testimonialCity, testimonialDescription} = testimonial
  return (
    <div className="testimonial-card">
      <div className="">
        <Card>
          <Card.Body>
            <p>{testimonialDescription}</p>
            <h5>{testimonialName}</h5>
            <h6>{testimonialCity}</h6>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default TestimonialCard
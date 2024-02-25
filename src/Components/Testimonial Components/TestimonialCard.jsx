import { Card } from "react-bootstrap" 

function TestimonialCard() {
  return (
    <div className="testimonial-card">
      <div>
        <Card>
          <Card.Body>
            <p>Testimonial Description</p>
            <h5>Name</h5>
            <h6>City</h6>
          </Card.Body>
        </Card>
      </div>

      <div>
        <Card>
          <Card.Body>
            <p>Testimonial Description</p>
            <h5>Name</h5>
            <h6>City</h6>
          </Card.Body>
        </Card>
      </div>

      <div>
        <Card>
          <Card.Body>
            <p>Testimonial Description</p>
            <h5>Name</h5>
            <h6>City</h6>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default TestimonialCard
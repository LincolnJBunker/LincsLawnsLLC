import { Button, Card } from "react-bootstrap";
import lawn_img from '../assets/prettylawn.jpg';
import powerwasher_img from '../assets/powerwasher.jpg';
import bbq_img from '../assets/bbq.jpg';
import { NavLink, useNavigate } from "react-router-dom"

function ServiceCards() {

    const navigate = useNavigate();

  return (
    <>
    <div className="hello">
        <div>
            <Card className="about-card">
                <Card.Img variant="top" src={lawn_img} />
                <Card.Body>
                    <Card.Title>Lawn Care</Card.Title>
                    <Card.Text>
                        Services including Aeration, lawn mowing, edging, to help your lawn be green and healthy
                    </Card.Text>
                    <Button className="button" onClick={() => navigate(`/services/lawncare`)}>More Information</Button>
                </Card.Body>
            </Card>     
        </div>

        <div>
            <Card className="about-card">
                <Card.Img variant="top" src={powerwasher_img} />
                <Card.Body>
                    <Card.Title>Powerwashing</Card.Title>
                    <Card.Text>
                        Power washing your driveway can help restore it's look, and eliminate stains and debris
                    </Card.Text>
                    <Button className="button" onClick={() => navigate(`/services/powerwashing`)}>More Information</Button>
                </Card.Body>
            </Card>
        </div>

        <div>
            <Card className="about-card">
                <Card.Img variant="top" src={bbq_img} />
                <Card.Body>
                    <Card.Title>Grill Cleaning</Card.Title>
                    <Card.Text>
                        We'll help your barbeque look as good as new with our interior and exterior deep clean
                    </Card.Text>
                    <Button className="button" onClick={() => navigate(`/services/grillcleaning`)}>More Information</Button>
                </Card.Body>
            </Card>
        </div>

    </div>
    </>
  )
}

export default ServiceCards
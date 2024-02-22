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
            <Card>
                <Card.Img variant="top" src={lawn_img} />
                <Card.Body>
                    <Card.Title>Lawn Care</Card.Title>
                    <Card.Text>
                        Services including Aeration, lawn mowing, edging, to help your lawn be better than your neighbors
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate(`/services/lawncare`)}>More Information</Button>
                </Card.Body>
            </Card>     
        </div>

        <div>
            <Card>
                <Card.Img variant="top" src={powerwasher_img} />
                <Card.Body>
                    <Card.Title>Powerwashing</Card.Title>
                    <Card.Text>
                        Got a dirty driveway? Powerwashing will make it look like the cement was poured yesterday
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate(`/services/powerwashing`)}>More Information</Button>
                </Card.Body>
            </Card>
        </div>

        <div>
            <Card>
                <Card.Img variant="top" src={bbq_img} />
                <Card.Body>
                    <Card.Title>Grill Cleaning</Card.Title>
                    <Card.Text>
                        When was the last time you REALLY cleaned your BBQ... I got you covered!
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate(`/services/grillcleaning`)}>More Information</Button>
                </Card.Body>
            </Card>
        </div>

    </div>
    </>
  )
}

export default ServiceCards
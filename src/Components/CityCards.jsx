import { Card } from "react-bootstrap";
import slc_img from '../assets/SaltLakeCounty.jpg';
import utahcounty_img from '../assets/utahcounty.jpg';
import parkcity_img from '../assets/parkcity.jpg';
import moab_img from '../assets/moab.jpg';

function CityCards() {
  return (
    <div className="city-cards">
        <div>
            <Card>
                <Card.Img variant="top" src={slc_img}/>
                <Card.Body>
                    <Card.Title>Salt Lake County</Card.Title>
                </Card.Body>
            </Card>
        </div>

        <div>
            <Card>
                <Card.Img variant="top" src={utahcounty_img}/>
                <Card.Body>
                    <Card.Title>Utah County</Card.Title>
                </Card.Body>
            </Card>
        </div>

        <div>
            <Card>
                <Card.Img variant="top" src={parkcity_img}/>
                <Card.Body>
                    <Card.Title>Park City</Card.Title>
                </Card.Body>
            </Card>
        </div>
        
        <div>
            <Card>
                <Card.Img variant="top" src={moab_img} />
                <Card.Body>
                    <Card.Title>Moab</Card.Title>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default CityCards
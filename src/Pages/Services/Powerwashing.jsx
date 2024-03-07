import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
function Powerwashing() {
  return (
    <div className="powerwashing">
    Display Pictures of pretty driveways here 
    <p></p>
      maybe explain a little bit why clean driveway is good 
    <p></p>

    <p>Click here to scheduel an appointment</p>
    <Button onClick={() => navigate('/schedule/appointment')}>Here</Button>

    <p>Have more questions? Check out FAQ's below!</p>
    <Button onClick={() => navigate('/faqs')}>FAQ's</Button>
    </div>
  )
}

export default Powerwashing
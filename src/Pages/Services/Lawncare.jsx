import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
function Lawncare() {
  const navigate = useNavigate();

  return (
    <div className="lawncare">
      Display Pictures of pretty lawns here 
    <p></p>
      maybe explain a little bit why aerating lawns is good 
    <p></p>

    <p>Click here to scheduel an appointment</p>
    <Button onClick={() => navigate('/schedule/appointment')}>Here</Button>

    <p>Have more questions? Check out FAQ's below!</p>
    <Button onClick={() => navigate('/faqs')}>FAQ's</Button>

    </div>
  )
}

export default Lawncare
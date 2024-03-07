import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Schedule() {
  const navigate = useNavigate();
  return (
    <div className="schedule">
      <h3>Schedule an Appointment</h3>
      <Button className="button" onClick={() => navigate('appointment')}>Yes</Button>
      <Button className="button" onClick={() => navigate('/')}>No</Button>

      <p></p>

      <h3>Reschedule or Cancel an Appointment?</h3>
      <Button className="button" onClick={() => navigate('edit')}>View Appointments</Button>
    </div>
  )
}

export default Schedule
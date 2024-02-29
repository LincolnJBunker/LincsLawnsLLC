import { useNavigate } from "react-router-dom";

function Schedule() {
  const navigate = useNavigate();
  return (
    <div className="schedule">
      <h3>Schedule an Appointment</h3>
      <button onClick={() => navigate('appointment')}>Yes</button>
      <button onClick={() => navigate('/')}>No</button>

      <p></p>

      <h3>Reschedule or Cancel an Appointment?</h3>
    </div>
  )
}

export default Schedule
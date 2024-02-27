import { useNavigate } from "react-router-dom"

function ScheduleApt() {
  const navigate = useNavigate();

  return (
    <div className="schedule-apt">
        <h3>What service would you like to schdule an appointment for?</h3>
        <button onClick={() => navigate('lawncare')}>Lawn Care</button>
        <button onClick={() => navigate('powerwashing')}>Powerwashing</button>
        <button onClick={() => navigate('grillcleaning')}>Grill Cleaning</button>
        
    </div>
  )
}

export default ScheduleApt
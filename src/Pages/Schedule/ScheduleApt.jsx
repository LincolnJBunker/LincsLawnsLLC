import { useNavigate } from "react-router-dom"
import SchedulingCalendar from "../../Components/SchedulingCalendar";

function ScheduleApt() {
  const navigate = useNavigate();

  return (
    <div className="schedule-apt">
        <h3>schedule an appointment below</h3>

        <SchedulingCalendar />
        
    </div>
  )
}

export default ScheduleApt
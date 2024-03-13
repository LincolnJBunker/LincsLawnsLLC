import axios from "axios";
import { Button } from "react-bootstrap";
import { useState } from "react";
function EditAptTableRow({ appointment, deleteAppointment, setAppointments, email }) {
    const [isEditing, setIsEditing] = useState(false);
    const [date, setDate] = useState(appointment.date)
    const [hour, setHour] = useState(appointment.hour)
    const [service, setService] = useState(appointment.service)

    const handleSave = () => {
        const bodyObj = {
            date: date,
            hour: hour,
            service: service,
            email: email
        };

        axios.put(`/api/appointment/update/${appointment.id}`, bodyObj)
        .then((res) => {
            setIsEditing(false)
            setAppointments(res.data.appointments)
            console.log(res.data.appointments)
        })
    }
  return isEditing ? (
        <tr>
            <td>
                <input 
                type="date" 
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)} 
                />
            </td>
            <td>
                <select name="times" value={hour} onChange={(e) => setHour(e.target.value)}>
                    <option value="selectTime">Select a Time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">01:00 PM</option>
                    <option value="2:00 PM">02:00 PM</option>
                    <option value="3:00 PM">03:00 PM</option>
                    <option value="4:00 PM">04:00 PM</option>
                    <option value="5:00 PM">05:00 PM</option>
                    <option value="6:00 PM">06:00 PM</option>
                </select>
            </td>
            <td>
            <select name="service" value={service} onChange={(e) => setService(e.target.value)}>
                <option value="selectService">Select a service</option>
                <option value="Aeration">Aeration</option>
                <option value="Powerwashing">Powerwashing</option>
                <option value="GrillCleaning">Grill Cleaning</option>
            </select>
            </td>
            <td>
                <Button className="button" onClick={handleSave}>
                    Save
                </Button>
            </td>
        </tr>
  ) : (
    <tr>
        <td>{appointment.date}</td>
        <td>{appointment.hour}</td>
        <td>{appointment.service}</td>
        <td>
            <Button className="delete-button" onClick={()=> deleteAppointment(appointment.id)}>Delete</Button>
        </td>
        <td>
            <Button className="edit-button" onClick={() => setIsEditing(true)}>Edit</Button>
        </td>
    </tr>
  )
}

export default EditAptTableRow
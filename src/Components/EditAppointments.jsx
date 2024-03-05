import { useState } from "react";
import axios from "axios";
function EditAppointments() {
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [appointments, setAppointments] = useState([])
    
    const getAppointment = (e) => {
        e.preventDefault();
        //get the customers appointment based off of email and phoneNumber
        axios.post('/api/appointment', {
            email
        })
        .then((res) => {
            setEmail('')
            setEmail2(email)
            setAppointments(res.data.appointments)
            console.log(res.data.appointments)
        })
    }

    const deleteAppointment = async (id) => {
        axios.delete(`/api/appointment/delete/${id}`)
        .then((res) => {
            console.log(res.data)
            axios.post('/api/appointment', {
                email: email2
            })
            .then((res) => {
                // setEmail('')
                setAppointments(res.data.appointments)
                console.log(res.data.appointments)
            })
        })
    }

    const updateAppointment = async (id) => {
        axios.put(`/api/appointment/delete/${id}`)
    }

  return (
    <>
    <h3>Please insert your email to edit or cancel an appointment</h3>
    
    <div className="edit-form">
        <label htmlFor="email">Email</label>
        <input
        type="email"
        className="edit-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
    </div>
    <button onClick={getAppointment}>Submit</button>
    {appointments.length > 0 && (

        <div>
        <h4>Your Appointments:</h4>
        <ul>
            {appointments.map((appointment) => (
                <li key={appointment.id}>
                    Date: {appointment.date}, Hour: {appointment.hour}, Service: {appointment.service}
                    <button onClick={()=> deleteAppointment(appointment.id)}>Delete</button>
                    <button onClick={() => updateAppointment(appointment.id)}>Edit</button>
                </li>
            ))}
        </ul>
    </div>
    )}
    </>
    
  )
}

export default EditAppointments
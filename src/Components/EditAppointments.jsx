import { useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import EditAptTableRow from "./EditAptTableRow";
import { Button } from "react-bootstrap";

function EditAppointments() {
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [appointments, setAppointments] = useState([]);
    
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
        
        axios.put(`'/api/appointment/update/${id}`)
    }

    const allData = appointments.map((appointment) => <EditAptTableRow appointment={appointment} key={appointment.id} deleteAppointment={deleteAppointment} setAppointments={setAppointments} email={email2}/>)

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
    <Button className="button" onClick={getAppointment}>Submit</Button>
    {appointments.length > 0 && (

        <div>
        <h4>Your Appointments:</h4>
            <Table>
                <thead>
                    <tr>
                        <th>Appointment Date</th>
                        <th>Appointment Time</th>
                        <th>Requested Service</th>
                    </tr>
                </thead>
                <tbody>
                    {allData}
                </tbody>
            </Table>
    </div>
    )}
    </>
  )
}

export default EditAppointments
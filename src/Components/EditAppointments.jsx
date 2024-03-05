import { useState } from "react";
import axios from "axios";
function EditAppointments() {
    const [email, setEmail] = useState('');

    const getAppointment = (e) => {
        e.preventDefault();
        //get the customers appointment based off of email and phoneNumber
        axios.post('/api/appointment', {
            email
        })
        .then((res) => {
            console.log(res.data)
        })
    }
  return (
    <>
    <h3>Please Insert your Email and Phone Number to edit or cancel an Appointment</h3>
    
    <div className="edit-form">
        <label htmlFor="email">Email</label>
        <input
        type="email"
        className="edit-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
    </div>


    {/* Will need to make a get req to whatever that users info is */}
    <button onClick={getAppointment}>Submit</button>
    </>
    
  )
}

export default EditAppointments
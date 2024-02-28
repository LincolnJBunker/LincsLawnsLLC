import { useState } from "react"
import axios from "axios"

function AppointmentForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/newAppointment', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            address: address
        })
        .then((res) => {

        })
    }

  return (
    <form onSubmit={handleSubmit} method="POST">
        <div className="appointment-form">
            <label htmlFor="first-name">First Name</label>
            <input 
            type="text"
            className="appointment-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
        </div>

        <div className="appointment-form">
            <label htmlFor="last-name">Last Name</label>
            <input 
            type="text"
            className="appointment-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
        </div>

        <div className="appointment-form">
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            className="appointment-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className="appointment-form">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input 
            type="number" 
            className="appointment-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            />
        </div>

        <div className="appointment-form">
            <label htmlFor="address">Address</label>
            <input 
            type="text" 
            className="appointment-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
        </div>
    </form>
  )
}

export default AppointmentForm
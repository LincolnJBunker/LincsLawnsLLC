import { useState } from "react"
import axios from 'axios';

function TableRow({data, onDelete, appointment, setAppointmentsCustomers}) { 
const [isEditing, setIsEditing] = useState(false);
const [firstName, setFirstName] = useState(data.customer.firstName);
const [lastName, setLastName] = useState(data.customer.lastName);
const [phoneNumber, setPhoneNumber] = useState(data.customer.phoneNumber);
const [email, setEmail] = useState(data.customer.email);
const [address, setAddress] = useState(data.customer.address);
const [date, setDate] = useState(data.date);
const [hour, setHour] = useState(data.hour);
const [service, setService] = useState(data.service);
console.log(firstName)

const handleSave = () => {
  const bodyObj = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    address: address,
    date: date,
    hour: hour,
    service: service
  };

  axios.put(`/api/customers/appointments/update/${data.id}`, bodyObj)
    .then((res) => {
      setIsEditing(false)
      setAppointmentsCustomers(res.data)
    })
}

  const handleDelete = () => {
    onDelete(data.id)
  }

  return isEditing ? (
    <tr>
      <td>
        <input 
        type="text" 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />
      </td>
      <td>
        <input 
        type="text" 
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />
      </td>
      <td>
        <input
        type="number" 
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </td>
      <td>
        <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </td>
      <td>
        <input 
        type="text" 
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        />
      </td>
      <td>
        <input 
        type="text" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        />
      </td>
      <td>
        <input 
        type="text" 
        value={hour}
        onChange={(e) => setHour(e.target.value)}
        />
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
        <button onClick={handleSave}>
          Save
        </button>
      </td>
    </tr>
  ) : (
    <tr>
        <td>{data.customer.firstName}</td>
        <td>{data.customer.lastName}</td>
        <td>{data.customer.phoneNumber}</td>
        <td>{data.customer.email}</td>
        <td>{data.customer.address}</td>
        <td>{data.date}</td>
        <td>{data.hour}</td>
        <td>{data.service}</td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
        <td>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </td>
    </tr>
  )
}

export default TableRow
import { useState } from "react"

function TableRow({data, onDelete}) { 
const [editMode, setEditMode] = useState();

const makeEditMode = () => setEditMode(true);
const makeNormalMode = () => {
  const bodyObj = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    address: address,
    date: date,
    hour: hour,
    service: service
  }

  const updateAppointment = async (id) => {
    axios.put(`/api/customers/appointments/update/${id}`, bodyObj)
    .then((res) => {
      setEditMode(false)
    })

  }
}

  const handleDelete = () => {
    onDelete(data.id)
  }

  const handleEdit = () => {
    
  }
  return (
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
          <button>Edit</button>
        </td>
    </tr>
  )
}

export default TableRow
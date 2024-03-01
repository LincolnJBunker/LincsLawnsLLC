import { Table } from "react-bootstrap";

function AppointmentData({ appointment }) {
    const { date, hour, service } = appointment
  return (
    <div className="appointment-data">
      <div>
        <Table>
          <thead>
            <tr>
              <th>{date}</th>
              <th>{hour}</th>
              <th>{service}</th>
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  )
}

export default AppointmentData
import { useState, useEffect } from "react";
// import CustomerData from "../Components/DataTable/DataTable";
import AppointmentData from "../Components/DataTable/AppointmentData";
import TableHeader from "../Components/DataTable/TableHeader";
import axios from "axios";
import { Table } from "react-bootstrap";

function Data() {
    const [appointments, setAppointments] = useState([])
    const [customers, setCustomers] = useState([])
    const [appointmentsCustomers, setAppointmentsCustomers] = useState([])

    let appointmentGet = async () => {
        let appointmentRes = await axios.get('/api/appointments')
        console.log(appointmentRes)
        setAppointments(appointmentRes.data)
    }

    let customerGet = async () => {
        let customerRes = await axios.get('/api/customers')
        console.log(customerRes)
        setCustomers(customerRes.data)
    }

    let appointmentCustomerGet = async () => {
        let appointmentCustomerRes = await axios.get('/api/customers&appointments')
        console.log(appointmentCustomerRes)
        setAppointmentsCustomers(appointmentCustomerRes.data)
    }

    useEffect(() => {
        appointmentGet()
        customerGet()
        appointmentCustomerGet()
    }, []);

    // const customerRow = customers.map((customer) => )

    const allAppointments = appointments.map((appointment) => <AppointmentData appointment={appointment} key={appointment.appointmentId} />)
    // const allCustomers = customers.map((customer) => <CustomerData customer={customer} key={customer.customerId} />)
  return (
    <>
    <div className="data">
        <Table>
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                {/* put data here */}
            </tbody>
        </Table>
    </div>
    </>
  )
}

export default Data
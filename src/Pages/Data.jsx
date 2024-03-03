import { useState, useEffect } from "react";
// import CustomerData from "../Components/DataTable/DataTable";
import AppointmentData from "../Components/DataTable/AppointmentData";
import TableHeader from "../Components/DataTable/TableHeader";
import axios from "axios";
import { Table } from "react-bootstrap";
import TableRow from "../Components/DataTable/TableRow";

function Data() {
    const [appointments, setAppointments] = useState([])
    const [customers, setCustomers] = useState([])
    const [appointmentsCustomers, setAppointmentsCustomers] = useState([])

    // let appointmentGet = async () => {
    //     let appointmentRes = await axios.get('/api/appointments')
    //     console.log(appointmentRes)
    //     setAppointments(appointmentRes.data)
    // }

    // let customerGet = async () => {
    //     let customerRes = await axios.get('/api/customers')
    //     console.log(customerRes)
    //     setCustomers(customerRes.data)
    // }

    let appointmentCustomerGet = async () => {
        let appointmentCustomerRes = await axios.get('/api/customers/appointments')
        console.log(appointmentCustomerRes.data)
        setAppointmentsCustomers(appointmentCustomerRes.data)
    }
    
    useEffect(() => {
        // appointmentGet()
        // customerGet()
        appointmentCustomerGet()
    }, []);
    
    // const allAppointments = appointments.map((appointment) => <AppointmentData appointment={appointment} key={appointment.appointmentId} />)
    // const allCustomers = customers.map((customer) => <TableRow customer={customer} key={customer.customerId} />)
    const allData = appointmentsCustomers.map((data) => <TableRow data={data} key={data.id} />)
    console.log(appointmentsCustomers)
    
  return (
    <>
    {/* <div className="data"> */}
        <Table responsive>
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                {allData}
            </tbody>
        </Table>
    {/* </div> */}
    </>
  )
}

export default Data
import { useState, useEffect } from "react";
import TableHeader from "../Components/DataTable/TableHeader";
import axios from "axios";
import { Table } from "react-bootstrap";
import TableRow from "../Components/DataTable/TableRow";

function Data() {
    const [appointmentsCustomers, setAppointmentsCustomers] = useState([])

    let appointmentCustomerGet = async () => {
        let appointmentCustomerRes = await axios.get('/api/customers/appointments')
        console.log(appointmentCustomerRes.data)
        setAppointmentsCustomers(appointmentCustomerRes.data)
    };

    const deleteAppointment = async (id) => {
        axios.delete(`/api/customers/appointments/delete/${id}`)
        appointmentCustomerGet();
    }
    
    useEffect(() => {
        appointmentCustomerGet()
    }, []);
    
    const allData = appointmentsCustomers.map((data) => <TableRow data={data} key={data.id} onDelete={deleteAppointment} />)
    console.log(appointmentsCustomers)
    
  return (
    <>
        <Table responsive>
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                {allData}
            </tbody>
        </Table>
    </>
  )
}

export default Data
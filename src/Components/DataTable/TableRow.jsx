
function TableRow(props) { 
  let {data} = props
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
    </tr>
  )
}

export default TableRow
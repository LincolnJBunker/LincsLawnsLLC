import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Footer() {
  const adminId = useSelector((state) => state.adminId)

  return (
    <div className="footer">
        <footer>
            <nav>
                <NavLink to='faqs'>FAQ's</NavLink>
                <NavLink to='contact'>Contact</NavLink>
                <NavLink to='adminlogin'>Admin</NavLink>

                {adminId &&
                  <NavLink to='data'>View Customers and Appointments</NavLink>
                }
            </nav>
        </footer>
        <h1></h1>
    </div>
  )
}

export default Footer
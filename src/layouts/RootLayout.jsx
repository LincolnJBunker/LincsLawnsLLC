import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function RootLayout() {
  const adminId = useSelector((state) => state.adminId)
  return (
    <div className="root-layout">
      <header>
            <nav>
                <h1>Alpine Twin Peak Maintenance</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="services">Services</NavLink>
                <NavLink to="schedule">Schedule</NavLink>
                <NavLink to="testimonial">Testimonial</NavLink>
            </nav>
      </header>

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
    </div>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
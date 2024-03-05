import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
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

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
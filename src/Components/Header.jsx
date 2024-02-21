import { NavLink } from "react-router-dom";


function Header() {
  return (
    <>
    <div className="header">
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
    </div>
    </>
  )
}

export default Header
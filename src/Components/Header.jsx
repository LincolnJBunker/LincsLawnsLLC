import { NavLink, useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();
  return (
    <>
    <div className="header">
      <header>
            <nav>
                <h1 className='home-nav' onClick={() => navigate(`/`)}>Alpine Twin Peak Maintenance</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="services">Services</NavLink>
                <NavLink to="schedule">Schedule</NavLink>
                <NavLink to="testimonial">Testimonial</NavLink>
                <NavLink to="loginsignup">Login</NavLink>
            </nav>
      </header>
    </div>
    </>
  )
}

export default Header
import { NavLink, Outlet } from "react-router-dom";

function ServicesLayout() {
  return (
    <div className="services-layout">
        <h2>Services offered</h2>
        <h3>Expert Services Tailored to Your Needs</h3>
      <div className="nav-links-container">
        <h3>
        <NavLink to="lawncare">Lawncare Services</NavLink>
        </h3>

        <h3>
        <NavLink to="powerwashing">Powerwashing</NavLink>
        </h3>

        <h3>
        <NavLink to="grillcleaning">Barbeque and Grill Cleaning</NavLink>
        </h3>
      </div>
        
        <Outlet />
    </div>
  )
}

export default ServicesLayout
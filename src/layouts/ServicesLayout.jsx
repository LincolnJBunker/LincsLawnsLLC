import { NavLink, Outlet } from "react-router-dom";

function ServicesLayout() {
  return (
    <div className="services-layout">
        <h2 className="services-offered">Services Offered</h2>
        <h4 className="service--page">To learn more about the services we offer, click on each link below  </h4>
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
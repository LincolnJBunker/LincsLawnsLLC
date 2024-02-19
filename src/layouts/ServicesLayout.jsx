import { NavLink, Outlet } from "react-router-dom";

function ServicesLayout() {
  return (
    <div className="services-layout">
        <h2>Services offered</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quis!</p>

        <h3>
        <NavLink to="lawncare">Lawncare Services</NavLink>
        </h3>

        <h3>
        <NavLink to="powerwashing">Powerwashing</NavLink>
        </h3>

        <h3>
        <NavLink to="grillcleaning">Barbeque and Grill Cleaning</NavLink>
        </h3>
        
        <Outlet />
    </div>
  )
}

export default ServicesLayout
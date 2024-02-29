import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
        <footer>
            <nav>
                <NavLink to='faqs'>FAQ's</NavLink>
                <NavLink to='contact'>Contact</NavLink>
                <NavLink to='adminlogin'>Admin</NavLink>
            </nav>
        </footer>

    </div>
  )
}

export default Footer
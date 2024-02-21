import { NavLink, Outlet } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
        <footer>
            <nav>
                <NavLink to='faqs'>FAQ's</NavLink>
                <NavLink to='contact'>Contact</NavLink>
            </nav>
        </footer>

    </div>
  )
}

export default Footer
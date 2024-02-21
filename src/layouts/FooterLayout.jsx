import { NavLink, Outlet } from "react-router-dom";

import React from 'react'

function FooterLayout() {
  return (
    <div className="footer-layout">
        <footer>
            <nav>
                <NavLink to="faqs">FAQS</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </nav>
        </footer>

        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default FooterLayout
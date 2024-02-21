import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { Outlet } from "react-router-dom"

function Home() {
  return (
    <div className="Home">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home
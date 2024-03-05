import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

//pages
import Home from "./Pages/Home"
import About from "./Pages/About"
import Schedule from "./Pages/Schedule/Schedule"
import Testimonial from "./Pages/Testimonial"
import Contact from "./Pages/Contact"
import FAQs from "./Pages/FAQ's"
import LoginSignup from "./Pages/Login-Signup";
import Lawncare from "./Pages/Services/Lawncare";
import Powerwashing from "./Pages/Services/Powerwashing";
import BBQ from "./Pages/Services/BBQ";
import ScheduleApt from "./Pages/Schedule/ScheduleApt";
import Data from "./Pages/Data";

//layouts
import RootLayout from "./layouts/RootLayout";
import ServicesLayout from "./layouts/ServicesLayout";
import EditAppointments from "./Components/EditAppointments";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      {/* <Route index element={<Home />} /> */}
      <Route path="about" element={<About />} />

      <Route path="services" element={<ServicesLayout />} >
        <Route path="lawncare" element={<Lawncare />} />
        <Route path="powerwashing" element={<Powerwashing />}/>
        <Route path="grillcleaning" element={<BBQ />}/>
      </Route>

      <Route path="schedule" element={<Schedule />} />
      <Route path="schedule/appointment" element={<ScheduleApt />} />
      <Route path="testimonial" element={<Testimonial />} />
      <Route path="faqs" element={<FAQs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="adminlogin" element={<LoginSignup />} />
      <Route path="data" element={<Data />} />
      <Route path="schedule/edit" element={<EditAppointments />} />

  </Route>

  )
)



function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App

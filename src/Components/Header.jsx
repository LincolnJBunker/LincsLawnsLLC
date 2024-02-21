import { RouterProvider } from "react-router-dom";
import router from "../Routes";

function Header() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default Header
import { Outlet } from "react-router"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"


function Layout() {
  return (
    <main>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </main>
  )
}

export default Layout

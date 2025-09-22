import NavLogo from "../assets/Main_logo.svg"
import ScrIcon from "../assets/search_icon.svg"
import { Link } from "react-router"
import { Heart, Settings, ShoppingCart, UserRound } from "lucide-react"
import SettingsPage from "./SettingsPage"

const Navbar = () => {
  return (
    <>

     <nav className=" border-b-[1px] border-[#00000023] " >

     <div className=" container flex items-center justify-between pt-[40px] pb-[16px] " >

     <div>
     <Link to={"/"} > <img src={NavLogo} alt={NavLogo} /> </Link>
    </div>

    <div>
     <ul className=" flex items-center gap-[48px] " >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/loginpage">Sign Up</Link> </li>
     </ul>
    </div>

    <div className=" flex items-center gap-[16px] " >

     <div>
     <input className=" border-1 border-[#F5F5F5] flex items-center gap-[5px] h-[38px] w-[243px] rounded-[4px] outline-none bg-[#F5F5F5] " type="search" name="search" id="search" placeholder="What are you looking for?" /> <img className=" translate-y-[-28px] translate-x-[205px] absolute " src={ScrIcon} alt={ScrIcon} /> 
     </div>

     <div className=" pl-[8px] " >
          <Link> <Heart /> </Link>
     </div>

     <div >
         <Link> <ShoppingCart /> </Link>
     </div>

     <div >
          <Link> <UserRound /> </Link>
     </div>

     <div>
          <Link to={"/setting"} > <Settings> <SettingsPage/> </Settings> </Link>
     </div>

    </div>

      </div>

     </nav>
      
    </>
  )
}

export default Navbar

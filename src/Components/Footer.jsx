import FoterIcon from "../assets/footer_aro.svg"
import Qr from "../assets/qr.svg"
import Google from "../assets/GooglePlay.svg"
import App from "../assets/AppStore.svg"
import Midia from "../assets/media.svg"
import { Link } from "react-router"

const Footer = () => {
  return (

    <footer className="pt-[80px] bg-[#000000]  " >

     <div className="container" >
          <div className=" flex  " >

          <div className="  " >
               <div  >
               <h2 className=" text-[#FAFAFA] text-[25px] " >Exclusive</h2>
               <h3 className=" text-[#FAFAFA] text-[20px] pt-[24px] " >Subscribe</h3>
               <p className=" text-[#FAFAFA] pt-[16px] pb-[16px] " >Get 10% off your first order</p>
          </div>

          <div className=" flex " >
               <input className="border-1 border-[#FAFAFA] flex items-center gap-[5px] h-[48px] w-[285px] rounded-[4px] outline-none " type="email" name="email" id="email" placeholder="Enter your email" />
               <button className=" translate-x-[-28px] " ><img src={FoterIcon} alt={FoterIcon} /></button>
          </div>
               
          </div>

          <div >
               <h2 className=" text-[#FAFAFA] text-[20px] pb-[24px] " >Support</h2>
               <ul className="  " >
                    <li className=" text-[#FAFAFA] pb-[16px] " >111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                    <li className=" text-[#FAFAFA] pb-[16px] " >exclusive@gmail.com</li>
                    <li className=" text-[#FAFAFA] " >+88015-88888-9999</li>
               </ul>
          </div>

          <div>
               <h2 className=" text-[#FAFAFA] text-[20px] pb-[24px] " >Account</h2>
               <ul>
                    <Link to={"/"} > <li className=" text-[#FAFAFA] text-[16px] pb-[16px] " >My Account</li> </Link>
                   <Link to={"/loginpage"} > <li className=" text-[#FAFAFA] text-[16px] pb-[16px] " >Login / Register</li> </Link>
                    <li className=" text-[#FAFAFA] text-[16px] pb-[16px] " >Cart</li>
                    <li className=" text-[#FAFAFA] text-[16px] pb-[16px] " >Wishlist</li>
                    <li className=" text-[#FAFAFA] text-[16px] pb-[16px] " >Shop</li>
               </ul>
          </div>

          <div>
               <h2 className=" text-[#FAFAFA] text-[20px] pb-[24px] " >Download App</h2>
               <p className=" text-[#FAFAFA] text-[12px] pb-[12px] " >Save $3 with App New User Only</p>
               <div className=" flex items-center " >
                    <div><img src={Qr} alt={Qr} /></div>
                    <div className=" flex flex-col pl-[10px] " >
                         <div><img src={Google} alt={Google} /></div>
                         <div><img src={App} alt={App} /></div>
                    </div>
               </div>
               <div className=" pt-[28px] " ><img src={Midia} alt={Midia} /></div>
          </div>

          
          
     </div>

     <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; Copyright TechStore 2025. All right reserved</p>
          </div>
     </div>

    </footer>
  )
}

export default Footer

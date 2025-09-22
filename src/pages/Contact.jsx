import { Link } from "react-router"
import Call from "../assets/call_as.svg"
import Write from "../assets/write_us.svg"

const Contact = () => {
  return (
    < >

    <div className=" container pt-[80px] pb-[140px] ">

     <div className=" pb-[80px] "> <Link to="/" >Home</Link> / <b className=" cursor-pointer " >Contuct</b> </div>

     <div className=" flex justify-between gap-[40px] " >

          <div className=" flex flex-col gap-[32px] shadow p-[40px] pr-[125px] " >

          <div className=" border-b-[1px] pb-[30px] " >
               <div className=" flex items-center justify-start " > 
               <div className=" pr-[5px] " ><img className=" w-[40px] h-[40px] " src={Call} alt={Call} /></div>
               <div className=" pr-[128px] " >Call To Us</div>
               </div>
               <div className=" pt-[24px] ">
               <p className="pb-[16px]" >We are available 24/7, 7 days a week.</p>
               <p>Phone: +8801611112222</p>
               </div>
          </div>

          <div className=" " >
               <div className=" flex items-center justify-start " > 
               <div className=" pr-[5px] " ><img className=" w-[40px] h-[40px] " src={Write} alt={Write} /></div>
               <div className=" pr-[110px] " >Write To US</div>
               </div>
               <div className=" pt-[24px] " >
               <p className=" pb-[16px] " >Fill out our form and we will contact <span className=" block ">you within 24 hours.</span> </p>
               <p className=" pb-[16px] " >Emails: customer@exclusive.com</p>
               <p >Emails: support@exclusive.com</p>
               </div>
          </div>

     </div>

     <div className=" shadow p-[40px] w-[800px]  " >

     <div className=" flex items-center pr-[605px] gap-[16px] " >
          <div className=" p-[16px] bg-[#F5F5F5] rounded-[4px] "><input className=" outline-none " type="text" name="text" id="text" placeholder="Your Name *" /></div>
          <div className=" p-[16px] bg-[#F5F5F5] rounded-[4px]   "><input className="outline-none" type="email" name="email" id="email" placeholder="Your Email *"  /></div>
          <div className=" p-[16px] bg-[#F5F5F5] rounded-[4px] "><input className=" outline-none " type="text" name="number" id="number" placeholder="Your Phone *" /></div>
     </div>

     <div className=" pt-[32px] ">
          <input className=" outline-none pb-[207px] w-[737px] bg-[#F5F5F5] " type="text" name="text" id="text" placeholder="Your Massage" />
     </div>

    <div className=" pt-[32px] pl-[549px] ">
      <button className=" bg-[#DB4444] text-[#FAFAFA] text-[16px] leading-[24px] pt-[16px] pl-[32px] pr-[32px] pb-[16px] rounded-[4px] " >Send Massage</button>
    </div>

     </div>

     </div>

    </div>

      
    </>
  )
}

export default Contact

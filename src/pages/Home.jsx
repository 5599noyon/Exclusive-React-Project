import Aro from "../assets/aro_icon.svg"
import Bannar from "../assets/bannar1.svg"
import BodrIcon from "../assets/Boder1.svg"
import FlashSalesTimer from "../Components/FlashSalesTimer"
import ShoppingWebsite from "../Components/ShoppingWebsite"


const Home = () => {
  return (
    <>

    <div className=" container flex items-center justify-between pt-[20px] pb-[140px] ">

    <div className="  " >

       <div className=" pr-[85px] " >
          <p className=" flex items-center text-[16px] leading-[24px] pb-[16px]  ">Woman’s Fashion <span className=" pl-[60px] "><img src={Aro} alt={Aro} /></span> </p>
          <p className=" flex items-center text-[16px] leading-[24px] pb-[16px]  " >Men’s Fashion <span className=" pl-[82px] "><img src={Aro} alt={Aro} /></span> </p>
          <p className="text-[16px] leading-[24px] pb-[16px] ">Electronics</p>
          <p className="text-[16px] leading-[24px] pb-[16px] ">Home & Lifestyle</p>
          <p className="text-[16px] leading-[24px] pb-[16px] ">Medicine</p>
          <p className="text-[16px] leading-[24px] pb-[16px] ">Sports & Outdoor</p>
          <p className="text-[16px] leading-[24px] pb-[16px] ">Baby’s & Toys</p>
          <p className="text-[16px] leading-[24px] pb-[16px] ">Groceries & Pets</p>
          <p className="text-[16px] leading-[24px] ">Health & Beauty</p>
     </div>

    </div>
    <img className=" h-[400px] translate-y-[-20px] " src={BodrIcon} alt={BodrIcon} />
    <div >

    </div>

     <div>
      <img src={Bannar} alt={Bannar} />
      </div>

    </div>

    <div className=" mb-[30px] " >
      <FlashSalesTimer/>
    </div>

    <div>
      <ShoppingWebsite/>
    </div>

    <div className=" pt-[40px] " >

    </div>

    </>
  )
}

export default Home

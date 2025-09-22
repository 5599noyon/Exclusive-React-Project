import { Link } from "react-router"
import AboutAds from "../assets/about_ads.svg"
import AboutText from "../Components/AboutText"


function About() {
  return (
    <div>

      <div className=" container " >

        <div className="  pb-[42px] pt-[80px] " >
          <Link to="/" >Home</Link> / <b className=" cursor-pointer " >About</b>
        </div>

        <div className=" flex items-center justify-center " >

          <div>
            <h1 className=" text-[64px] font-[800] leading-[64px] " >Our Story</h1>

            <AboutText />
          </div>

          <div>
            <img className=" w-[837px] whitespace-nowrap pb-[140px] translate-x-[215px] " src={AboutAds} alt={AboutAds} />
          </div>

        </div>

      </div>

    </div>
  )
}

export default About

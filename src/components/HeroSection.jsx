import GetstartedBtn from "../components/GetstartedBtn"
import Image1 from "../Pages/home/homeAssets/Group 1.png" 

const HeroSection = () => {
  return (
    <section className="hero flex py-[4em] justify-between font-Inter bg-backgroundBlack h-[850px]">
      <div className="flex flex-col space-y-[2.5em] text-white w-[43%] ml-[6em] my-[4em] items-start">
        <p className="text-[64px] font-[700] -mb-8">Grow and sell social media <span className="text-customPink"> pages</span> </p>
        <p className="text-[20px] w-[73%] opacity-50 font-[300]">
          Take your social media success to the next level? Sell 
          your established social media pages and profit from your hard work.
        </p>
        <GetstartedBtn />
      </div>
      <div className="w-[600px]">
        <img src={Image1} alt="hero image" />
      </div>
  </section>
  )
}

export default HeroSection
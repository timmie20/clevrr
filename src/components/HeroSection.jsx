import GetstartedBtn from "../components/GetstartedBtn"
import Image1 from "../Pages/home/homeAssets/Group 1.png" 

const HeroSection = () => {
  return (
    <section className=" bg-backgroundBlack">
      <div className="container m-auto flex flex-col justify-center items-center gap-4 xl:flex-row md:py-[4em] md:justify-between font-Inter">
        <div className="flex flex-col space-y-[2.5em] mt-[3em] text-white w-full xl:w-[43%] items-center text-center md:text-start md:items-start">
          <h1 className="text-3xl md:text-6xl font-[700] mb-2 w-full">Grow and sell social media <span className="text-customPink"> pages</span> </h1>
          <p className="text-[20px] w-[73%] opacity-50 font-[300]">
          A platform where you can buy, sell, and manage social media accounts. Whether you're looking
          to grow your own social media presence or start a business.</p>
          <GetstartedBtn />
        </div>
        <div className="w-[100%] md:w-[600px] ">
          <img src={Image1} alt="hero image" />
        </div>
      </div>
  </section>
  )
}

export default HeroSection
import Image2 from "../Pages/home/homeAssets/Group 2.png"
import Image3 from "../Pages/home/homeAssets/Frame 14.png"

const MiddleSection = () => {
  return (
    <section className="container mx-auto flex flex-col py-[6em] text-Inter space-y-[5em] md:space-y-[9em]">
      <div className="flex flex-col items-center justify-between md:flex-row ">
        <div className=" flex flex-col text-center md:w-[35%] space-y-[2em] md:text-start">
          <p className="text-[52px] font-[700] leading-[57px]">Social Media Account <span className="text-customPink">Marketplace</span></p>
          <p className="text-[20px] opacity-50 font-[300]">Take your social media success to the next level? 
            Sell your established social media pages and profit from your hard work.
          </p>
        </div>
        <div>
          <img src={Image2} alt="" />
        </div>
      </div>

      <div className="flex flex-col items-center text-center space-y-[2em] md:flex-row md:text-start justify-between md:space-y-0">
        <div>
          <img src={Image3} alt=""/>
        </div>
        <div className=" flex flex-col md:w-[35%] space-y-[2em]">
          <p className="text-[52px] font-[700] leading-[57px]">Reach a large business <span className="text-customPink">Audience</span></p>
          <p className="text-[20px] opacity-50 font-[300]">Social media accounts of all sizes, from small personal accounts to large influencer accounts.
          </p>
        </div>
      </div>
  </section>
  )
}

export default MiddleSection
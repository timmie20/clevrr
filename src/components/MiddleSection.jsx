import Image2 from "../Pages/home/homeAssets/Group 2.png"
import Image3 from "../Pages/home/homeAssets/Frame 14.png"

const MiddleSection = () => {
  return (
    <section className="flex flex-col p-[6em] text-Inter space-y-[10em]">
      <div className="flex items-center justify-between">
        <div className=" flex flex-col w-[35%] space-y-[2em]">
          <p className="text-[52px] font-[700] leading-[57px]">Grow and sell social media <span className="text-customPink">pages</span></p>
          <p className="text-[20px] opacity-50 font-[300]">Take your social media success to the next level? 
            Sell your established social media pages and profit from your hard work.
          </p>
        </div>
        <div>
          <img src={Image2} alt="" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <img src={Image3} alt=""/>
        </div>
        <div className=" flex flex-col w-[35%] space-y-[2em]">
          <p className="text-[52px] font-[700] leading-[57px]">Grow and sell social media <span className="text-customPink">pages</span></p>
          <p className="text-[20px] opacity-50 font-[300]">Take your social media success to the next level? 
            Sell your established social media pages and profit from your hard work.
          </p>
        </div>
      </div>
  </section>
  )
}

export default MiddleSection
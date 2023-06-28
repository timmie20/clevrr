import Image4 from "../Pages/home/homeAssets/image 10.png"
import Image5 from "../Pages/home/homeAssets/image 11.png"
import GetstartedBtn from "./GetstartedBtn"

const FooterSection = () => {
  return (
    <section className='bg-backgroundBlack w-[100%] h-[460px] flex justify-between items-end'>
      <img src={Image4} alt="twitter logo" />
      <div className="flex flex-col items-center font-Inter w-[50%] my-[auto] space-y-[2em]">
        <p className="text-white text-[52px] font-[700] text-center leading-[60px]">
        Ready to grow viral and make your first <span className="text-customPink">$</span>
        </p> 
        <GetstartedBtn />
      </div>
      <img src={Image5} alt="tic-tok logo"/>
    </section>

  )
}

export default FooterSection
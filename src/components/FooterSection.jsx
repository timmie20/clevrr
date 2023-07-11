import Image4 from "../Pages/home/homeAssets/image 10.png"
import Image5 from "../Pages/home/homeAssets/image 11.png"
import GetstartedBtn from "./GetstartedBtn"

const FooterSection = () => {
  return (
    <section className='relative bg-backgroundBlack w-[100%] h-[460px] flex justify-between items-end'>
      <img className="absolute w-[20%] left-0" src={Image4} alt="twitter logo" />
      <img className="absolute w-[20%] right-0" src={Image5} alt="tic-tok logo"/>
      <div className="flex flex-col justify-center items-center font-Inter my-[auto] mx-[auto] space-y-[2em]">
        <p className="text-white text-3xl font-[700] text-center md:w-[50%] md:text-5xl md:leading-normal">
        Ready to grow viral and make your first <span className="text-customPink">$ </span>
        off clevrr</p> 
        <GetstartedBtn />
      </div>
    </section>

  )
}
export default FooterSection
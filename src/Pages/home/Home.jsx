import GetstartedBtn from "../../components/GetstartedBtn";
import Image1 from "../../Pages/home/homeAssets/Group 1.png";
import Image2 from "../../Pages/home/homeAssets/Group 2.png";
import Image3 from "../../Pages/home/homeAssets/Frame 14.png";
import Image4 from "../../Pages/home/homeAssets/image 10.png";
import Image5 from "../../Pages/home/homeAssets/image 11.png";

const Home = () => {
  return (
    <div>
      <section className=" bg-backgroundBlack">
        <div className="container mx-auto flex flex-col justify-center items-center gap-4 md:py-[4em] md:px-[2em] md:justify-between font-Inter xl:flex-row">
          <div className="flex flex-col space-y-[2.5em] mt-[3em] text-white w-full xl:w-[43%] items-center text-center md:text-start md:items-start">
            <h1 className="text-3xl md:text-6xl font-[700] mb-2 w-full">
              Grow and sell social media{" "}
              <span className="text-customPink"> pages</span>{" "}
            </h1>
            <p className="text-[20px] w-[73%] opacity-50 font-[300]">
              A platform where you can buy, sell, and manage social media
              accounts. Whether you're looking to grow your own social media
              presence or start a business.
            </p>
            <GetstartedBtn />
          </div>
          <div className="w-[100%] md:w-[600px] ">
            <img src={Image1} alt="hero image" />
          </div>
        </div>
      </section>
      <section className="container mx-auto flex flex-col py-[6em] font-Inter space-y-[5em] md:space-y-[9em] md:px-[2em]">
        <div className="flex flex-col items-center justify-between md:flex-row ">
          <div className=" flex flex-col text-center md:w-[35%] space-y-[2em] md:text-start">
            <p className="text-3xl font-[700] md:text-5xl">
              Social Media Account{" "}
              <span className="text-customPink">Marketplace</span>
            </p>
            <p className="text-[20px] opacity-50 font-[300]">
              Take your social media success to the next level? Sell your
              established social media pages and profit from your hard work.
            </p>
          </div>
          <div>
            <img src={Image2} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center space-y-[2em] md:flex-row md:text-start justify-between md:space-y-0">
          <div>
            <img src={Image3} alt="" />
          </div>
          <div className=" flex flex-col md:w-[35%] space-y-[2em]">
            <p className="text-3xl font-[700] md:text-5xl">
              Reach a large business{" "}
              <span className="text-customPink">Audience</span>
            </p>
            <p className="text-[20px] opacity-50 font-[300]">
              Social media accounts of all sizes, from small personal accounts
              to large influencer accounts.
            </p>
          </div>
        </div>
      </section>
      <section className="relative bg-backgroundBlack w-[100%] h-[460px] flex justify-between items-end">
        <img
          className="absolute w-[20%] left-0"
          src={Image4}
          alt="twitter logo"
        />
        <img
          className="absolute w-[20%] right-0"
          src={Image5}
          alt="tic-tok logo"
        />
        <div className="flex flex-col justify-center items-center font-Inter my-[auto] mx-[auto] space-y-[2em]">
          <p className="text-white text-3xl font-[700] text-center md:w-[50%] md:text-5xl md:leading-normal">
            Ready to grow viral and make your first{" "}
            <span className="text-customPink">$ </span>
            off clevrr
          </p>
          <GetstartedBtn />
        </div>
      </section>
    </div>
  );
};
export default Home;

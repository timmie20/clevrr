import { Link } from "react-router-dom"
import sideImg from "../login /loginAssets/Group 5.png"

const Signup = () => {
  return (
    <div className="bg-backgroundBlack w-[100vw] h-[100vh] font-Inter">
    <div className="flex items-center">
      <div>
        <img src={sideImg} alt="" className="h-[100vh]" />
      </div>
      <div className="m-[auto] flex flex-col text-white gap-[2em]">

        <p className="text-[32px] font-[500]">Create a free account</p>

        <div className="flex flex-col space-y-[10px] text-grayish">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" className="inputs"/>
        </div>

        <div className="flex flex-col space-y-[10px] text-grayish">
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" className="inputs"/>
        </div>

        <div className="flex flex-col space-y-[10px] text-grayish">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" className="inputs"/>
        </div>

        <div className="flex flex-col space-y-[10px] text-grayish">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" type="password" className="inputs"/>
        </div>

        <button className="w-[400px] h-[45px] bg-customPink rounded-full font-Rubik font-[400]">Sign up</button>

        <div className="text-[14px] flex flex-col items-center">
          <Link to='/' style={{color: '#F71B5D'}}>Back to home</Link>
          <div className="flex">
            <p>I already have an account -</p>
            <Link to='/login' style={{color: '#F71B5D'}}>Login</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup
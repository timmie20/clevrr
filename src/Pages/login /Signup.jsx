import { Link } from "react-router-dom"
import sideImg from "../login /loginAssets/Group 5.png"

const Signup = () => {
  return (
    <div className="flex justify-center items-center bg-backgroundBlack h-[100vh] font-Inter">
        <div className="flex flex-col text-white gap-[2em] w-[360px] items-center m-[1em]">

          <p className="text-2xl font-[700] md:text-3xl">Create a free account</p>

          <div className="flex flex-col space-y-[10px] text-grayish w-[100%]">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" className="inputs"/>
          </div>

          <div className="flex flex-col space-y-[10px] text-grayish w-[100%]">
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" className="inputs"/>
          </div>

          <div className="flex flex-col space-y-[10px] text-grayish w-[100%]">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="inputs"/>
          </div>

          <div className="flex flex-col space-y-[10px] text-grayish w-[100%]">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" type="password" className="inputs"/>
          </div>

          <button className="w-[100%] h-[45px] bg-customPink rounded-full font-Rubik font-[400]">Sign up</button>

          <div className="text-[14px] flex flex-col items-center">
            <Link to='/' style={{color: '#F71B5D'}}>Back to home</Link>
            <div className="flex">
              <p>I already have an account -</p>
              <Link to='/login' style={{color: '#F71B5D'}}>Login</Link>
            </div>
          </div>
        </div>
  </div>
  )
}

export default Signup
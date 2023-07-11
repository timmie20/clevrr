import { Link } from "react-router-dom"
import sideImg from "../login /loginAssets/Group 5.png"

const Login = () => {
  return (
    <div className="flex justify-center items-center bg-backgroundBlack h-[100vh] font-Inter">
      <div className="flex flex-col text-white gap-[2em] w-[360px] m-[1em] items-center">
        <p className="text-3xl font-[700] md:text-5xl">Login</p>
        <div className="flex flex-col space-y-[10px] text-grayish w-[100%]">
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" className="inputs"/>
        </div>
        <div className="flex flex-col space-y-[10px] text-grayish w-[100%]">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" className="inputs"/>
        </div>
        <button className="h-[45px] w-[100%] bg-customPink rounded-full font-Rubik font-[400]">Login</button>
        <div className="text-[14px] flex flex-col items-center">
          <Link to='/' style={{color: '#F71B5D'}}>Back to home</Link>
          <div className="flex">
            <p>I don't have an account -</p>
            <Link to='/signup' style={{color: '#F71B5D'}}>Signup for clevrr</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
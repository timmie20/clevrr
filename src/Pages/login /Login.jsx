import { Link } from "react-router-dom"
import sideImg from "../login /loginAssets/Group 5.png"

const Login = () => {
  return (
    <div className="bg-backgroundBlack w-[100vw] h-[100vh] font-Inter">
      <div className="flex items-center">
        <div>
          <img src={sideImg} alt="" className="h-[100vh]" />
        </div>
        <div className="m-[auto] flex flex-col text-white gap-[2em]">
          <p className="text-[32px] font-[500]">Login</p>
          <div className="flex flex-col space-y-[10px] text-grayish">
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" className="inputs"/>
          </div>
          <div className="flex flex-col space-y-[10px] text-grayish">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="inputs"/>
          </div>
          <button className="w-[400px] h-[45px] bg-customPink rounded-full font-Rubik font-[400]">Login</button>
          <div className="text-[14px] flex flex-col items-center">
            <Link to='/' style={{color: '#007FFF'}}>Back to home</Link>
            <div className="flex">
              <p>I don't have an account -</p>
              <Link to='/signup' style={{color: '#007FFF'}}>Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
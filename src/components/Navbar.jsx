import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="container">
      <div className="flex justify-between py-[1.5em] items-center w-[85%] m-auto font-Rubik text-white">
          <p className="text-5xl text-customPink">
            ¢ℓєνяя
          </p>
        <div className="flex gap space-x-[5em] ">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/buyaccount'>Buy Accounts</NavLink>
          <NavLink to='/about'>About</NavLink>
        </div>
        <div className="flex space-x-[1.5em] w-[20%]">
          <Link to="/login" className="text-white px-[27px] py-[9px] bg-customPink rounded-full">Login</Link>
          <Link to="/signup"className="text-white px-[27px] py-[9px] border-white border-[1px] bg-transparent rounded-full">Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
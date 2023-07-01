import { Link, NavLink } from "react-router-dom"
import { MdMenu, MdClose } from "react-icons/md"
import { useState } from "react"

const Navbar = () => {
  const[isOpen , setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
      <div className="bg-backgroundBlack">
        <nav className="container mx-auto flex justify-between items-center w-[85%] text-white py-[1.5em]">
          <p className="text-5xl text-customPink">
            ¢ℓєνяя
          </p>
          <div className="hidden md:flex space-x-[5em] lg:space-x-[2em]">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/buyaccount'>Buy Accounts</NavLink>
            <NavLink to='/about'>About</NavLink>
          </div>
          <div className="hidden md:flex space-x-[1.5em]">
            <Link to="/login" className="text-white px-[27px] py-[9px] bg-customPink rounded-full hover:bg-[#87acec]">Login</Link>
            <Link to="/signup"className="text-white px-[27px] py-[9px] border-white border-[1px] bg-transparent rounded-full">Sign up</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar}>
              {isOpen? <MdClose size={42}/> : <MdMenu size={42}/>}
            </button>
          </div>
        </nav>
      </div>
  )
}

export default Navbar
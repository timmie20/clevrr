import { Link, NavLink, useLocation } from "react-router-dom"
import { MdMenu, MdClose } from "react-icons/md"
import { useState } from "react"
import MobileNavlinks from "./MobileNavlinks"
import { useEffect } from "react"

const Navbar = () => {
  const[isOpen , setIsOpen] = useState(false)
  const {pathname} = useLocation()
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
      <div className="bg-backgroundBlack font-Rubik">
        <nav className="container mx-auto flex justify-between items-center w-[85%] text-white py-[1.5em]">
          <p className="text-3xl text-customPink md:text-5xl">
            ¢ℓєνяя
          </p>
          <div className="hidden md:flex space-x-[5em] lg:space-x-[2em]">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/buyaccount'>Buy Accounts</NavLink>
            <NavLink to='/about'>About</NavLink>
          </div>
          <div className="flex space-x-[2em]">
            <Link to="/login" className="py-[5px] text-white px-[12px] md:py-[9px] bg-customPink rounded-lg hover:bg-[#87acec]">Login</Link>
            <Link to="/signup"className="hidden md:block text-white px-[27px] py-[9px] border-white border-[1px] bg-transparent rounded-md">Sign up</Link>
          </div>
          <div>
            <button className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}>
              {isOpen? <MdClose size={32}/> : <MdMenu size={32}/>}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div>
            <MobileNavlinks />
          </div>
        )}
      </div>
  )
}

export default Navbar
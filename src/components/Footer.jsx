import { NavLink } from "react-router-dom"
import {MdCopyright} from "react-icons/md"

const Footer = () => {
  return (
    <div className="flex flex-wrap items-center justify-between container mx-auto mb-4">
      <div className="flex flex-wrap py-[4em] gap-[2em] text-black font-Rubik items-center">
        <p className="text-3xl text-customPink">
        ¢ℓєνяя
        </p>
        <div className="flex flex-wrap gap space-x-[3em] ">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/buyaccount'>Buy Accounts</NavLink>
          <NavLink to='/about'>About</NavLink>
        </div>
      </div>
      <p className="flex items-center">
        <MdCopyright size={16} color='#888' />
        copyright {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default Footer

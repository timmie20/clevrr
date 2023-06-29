import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className="flex px-[6em] py-[4em] gap-[5em] text-black font-Rubik items-center">
      <p className="text-3xl text-customPink">
      ¢ℓєνяя
      </p>
      <div className="flex gap space-x-[3em] ">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/buyaccount'>Buy Accounts</NavLink>
        <NavLink to='/about'>About</NavLink>
      </div>
    </div>
  )
}

export default Footer

import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className="flex px-[6em] py-[4em] gap-[5em] text-black font-Rubik">
      <p>Logo</p>
      <div className="flex gap space-x-[3em] ">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/buyaccount'>Buy Accounts</NavLink>
        <NavLink to='/about'>About</NavLink>
      </div>
    </div>
  )
}

export default Footer

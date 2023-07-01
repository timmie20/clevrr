import { NavLink } from "react-router-dom"

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
        <p>Copyright @2023</p>
    </div>
  )
}

export default Footer

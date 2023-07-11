import { Link } from "react-router-dom"

const MobileNavlinks = () => {
  return (
    <div className="text-white font-Rubik flex flex-col items-center gap-[.8em] pb-[1em] md:hidden ">
      <Link to="/">Home</Link>
      <Link to="/buyaccount">Buy Accounts</Link>
      <Link to="/about">About</Link>
      <Link to="/signup"className="px-[10px] py-[5px] bg-customPink rounded-md">Sign up</Link>
    </div>
  )
}
export default MobileNavlinks

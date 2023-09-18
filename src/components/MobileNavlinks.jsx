import { NavLink, Link } from "react-router-dom";

const MobileNavlinks = () => {
  return (
    <div className="text-white font-Rubik flex flex-col items-center gap-[.8em] pb-[1em] xl:hidden ">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-navbar" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/buyaccount"
        className={({ isActive }) => (isActive ? "active-navbar" : "")}
      >
        Buy Accounts
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active-navbar" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active-navbar" : "")}
      >
        Our contact
      </NavLink>
      <Link
        to="/signup"
        className="px-[10px] py-[5px] bg-customPink rounded-md"
      >
        Sign up
      </Link>
    </div>
  );
};
export default MobileNavlinks;

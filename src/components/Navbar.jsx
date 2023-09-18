import { Link, NavLink, useLocation } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import MobileNavlinks from "./MobileNavlinks";
import { useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="bg-backgroundBlack font-Rubik">
      <nav className="container mx-auto flex justify-between items-center w-[85%] text-white py-[1.5em]">
        <p className="text-3xl text-customPink md:text-5xl">¢ℓєνяя</p>
        <div className="hidden xl:flex space-x-[3em]">
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
            About us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-navbar" : "")}
          >
            Our Contact
          </NavLink>
        </div>
        <div className="flex space-x-[2em] text-center">
          <Link
            to="/login"
            className="py-2 text-white px-5 bg-customPink rounded-lg hover:bg-[#87acec] hover:font-[700] duration-100 md:py-4 md:px-8"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="hidden md:block text-white px-8 py-4 border-white border-[1px] bg-transparent rounded-lg hover:font-[700] duration-100"
          >
            Sign up
          </Link>
        </div>
        <div>
          <button className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdClose size={32} /> : <MdMenu size={32} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div>
          <MobileNavlinks />
        </div>
      )}
    </div>
  );
};

export default Navbar;

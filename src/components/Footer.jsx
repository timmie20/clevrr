import { NavLink } from "react-router-dom";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-wrap items-center justify-between mx-auto container mb-4 sm:mx-auto">
      <div className="flex flex-wrap py-[4em] gap-[2em] text-black font-Rubik items-center">
        <p className="text-3xl text-customPink">¢ℓєνяя</p>
        <div className="flex flex-wrap space-x-7">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/buyaccount">Buy Accounts</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/contact">our contact</NavLink>
        </div>
      </div>
      <p className="flex items-center text-[13px] font-[300] gap-1">
        <MdCopyright size={16} color="#888" />
        {new Date().getFullYear()}, All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

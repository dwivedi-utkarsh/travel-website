import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
  {
    name: "Register",
    link: "/Register"

  },
  {
    name: "Car Rental",
    link: "/Car-Rental",
  },

  // {
  //   name: "Supscription",
  //   link: "/Supscription"
  // }

];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
     <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
  <div className="bg-gradient-to-r from-primary to-secondary text-white">
    <div className="container py-[2px] hidden sm:block">
      <div className="flex items-center justify-between">
        <p className="text-sm">20% off on next booking</p>
        <p>mobile no. 6386728248</p>
      </div>
    </div>
  </div>

  <div className="container py-2 sm:py-0">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4 font-bold text-2xl">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          Travel
        </Link>
      </div>

      <div className="hidden md:block">
        <ul className="flex items-center gap-6">
          <li className="py-4">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : '')}>
              Blogs
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink to="/best-places" className={({ isActive }) => (isActive ? 'active' : '')}>
              Best Places
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : '')}>
              Register
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink to="/car-rental" className={({ isActive }) => (isActive ? 'active' : '')}>
              Car Rental
            </NavLink>
          </li>
          {/* <li className="py-4">
            <NavLink to="/subscription" className={({ isActive }) => (isActive ? 'active' : '')}>
              Subscription
            </NavLink>
          </li> */}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
          onClick={() => {
            handleOrderPopup();
          }}
        >
          Book Now
        </button>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden block">
          {showMenu ? (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="cursor-pointer transition-all"
              size={30}
            />
          ) : (
            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer transition-all"
              size={30}
            />
          )}
        </div>
      </div>
    </div>
  </div>

  {/* Responsive Menu */}
  {showMenu && (
    <div className="md:hidden block bg-white shadow-lg">
      <ul className="flex flex-col items-center gap-4 py-4">
        <li>
          <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/best-places" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            Best Places
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/car-rental" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            Car Rental
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/subscription" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            Subscription
          </NavLink>
        </li> */}
      </ul>
    </div>
  )}
</nav>

    </>
  );
};

export default Navbar;

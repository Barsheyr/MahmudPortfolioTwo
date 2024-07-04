import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <section className="font-primary">
      <nav
        className={`${
          isActive ? " bg-blue-100 py-3 shadow" : "bg-transparent py-6"
        }   fixed z-20 w-full transition-all duration-500`}
      >
        <div className="navbar align-element max-w-5xl mx-auto px-10">
          <div className="navbar-start">
            <NavLink
              to="/"
              className={`${
                isActive ? "text-blue-400" : "text-blue-400"
              } lg:text-3xl text-lg font-bold tracking-[3px]`}
            >
              MA
            </NavLink>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="flex flex-row items-center justify-between gap-10">
              <NavLinks />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

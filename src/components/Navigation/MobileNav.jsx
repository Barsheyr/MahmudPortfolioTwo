import React from "react";
const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/about", text: "About" },
  { id: 3, url: "/works", text: "Works" },
  { id: 4, url: "/contact", text: "Contact" },
];

import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;

        return (
          <li key={id}>
            <NavLink
              className="capitalize font-secondary text-black hover:bg-slate-200 hover:text-black
           p-3 rounded-md font-bold"
              to={url}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default MobileNav;

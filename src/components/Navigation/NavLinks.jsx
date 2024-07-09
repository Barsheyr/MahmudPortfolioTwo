import React from "react";
const links = [
  { id: 1, url: "about", text: "About" },
  { id: 2, url: "works", text: "Works" },
  { id: 3, url: "contact", text: "Contact" },
];

import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;

        return (
          <li key={id}>
            <NavLink
              className="capitalize font-secondary text-blue-400 hover:bg-slate-200 hover:text-black
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

export default NavLinks;

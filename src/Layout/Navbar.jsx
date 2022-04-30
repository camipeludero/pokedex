import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink
          to={`/store`}
          className={({ isActive }) => (isActive ? "selected-link" : undefined)}
        >
          Tienda
        </NavLink>
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? "selected-link" : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to={`/profile`}
          className={({ isActive }) => (isActive ? "selected-link" : undefined)}
        >
          Perfil
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;

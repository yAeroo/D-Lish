import React from "react";
// Iconos
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
//Link
import { NavLink } from "react-router-dom";

export default function NavMobileIndex() {
  return (
    <div className="btm-nav md:hidden text-primary z-10 bg-base-300">
      <NavLink to="/search" activeClassName="active" className="flex items-center gap-1 bg-base-300">
        <FaSearch className="h-5 w-5 mx-auto" />
        <span className="btm-nav-label text-sm">Busqueda</span>
      </NavLink>
      <NavLink to="/" activeClassName="active" className="bg-base-300">
        <FaHome className="h-5 w-5 mx-auto" />
        <span className="btm-nav-label text-sm">Inicio</span>
      </NavLink>
      <NavLink to="/profile" activeClassName="active" className="flex items-center gap-1 bg-base-300">
        <FaUserCircle className="h-5 w-5 ml-[0.1rem]" />
        <span className="btm-nav-label text-sm">Perfil</span>
      </NavLink>
    </div>
  );
}

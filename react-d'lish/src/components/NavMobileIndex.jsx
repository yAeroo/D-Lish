import React from "react";
// Iconos
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
//Link
import { Link } from "react-router-dom";

export default function NavMobileIndex() {
  return (
    <div className="btm-nav md:hidden text-primary z-10 bg-base-300">
      <Link to="../search" className="flex items-center gap-1">
        <FaSearch className="h-5 w-5 mx-auto" />
        <span className="btm-nav-label">Busqueda</span>
      </Link>
      <Link to="/" className="active bg-base-300">
        <FaHome className="h-5 w-5 mx-auto" />
        <span className="btm-nav-label">Inicio</span>
      </Link>
      <Link to="../profile" className="flex items-center gap-1">
        <FaUserCircle className="h-5 w-5 ml-[0.1rem]" />
        <span className="btm-nav-label">Perfil</span>
      </Link>
    </div>
  );
}

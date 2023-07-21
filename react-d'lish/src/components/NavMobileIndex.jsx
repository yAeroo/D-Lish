import React from "react";
// Iconos
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function NavMobileIndex() {
  return (
    <div className="btm-nav md:hidden text-primary z-10">
      <button className="flex items-center gap-1">
      <FaSearch className="h-5 w-5 mx-auto" />
        <span className="btm-nav-label">Busqueda</span>
      </button>
      <button className="active">
      <FaHome className="h-5 w-5 mx-auto" />
        <span className="btm-nav-label">Inicio</span>
      </button>
      <button className="flex items-center gap-1">
        <FaUserCircle className="h-5 w-5 ml-[0.1rem]" />
        <span className="btm-nav-label">Perfil</span>
      </button>
    </div>
  );
}

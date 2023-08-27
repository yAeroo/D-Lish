import React, { useState } from "react";
//Iconos
import { IoChevronBack } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
//Link
import { Link } from "react-router-dom";
//Imagenes
import User from "../../assets/index/user.png";

export default function NavIndex() {

  const [searchText, setSearchText] = useState('');
  const [showFloatingContainer, setShowFloatingContainer] = useState(false);

  const handleSearchInput = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);

    // Mostrar el contenedor flotante si hay texto en el campo de búsqueda
    setShowFloatingContainer(inputText.length > 0);
  };

  return (
    <section className="py-4 md:px-24 px-4 drop-shadow-2xl">
      <nav className="justify-between items-center rounded-2xl bg-neutral drop-shadow-md px-9 py-5 list-none hidden md:flex">
        <Link to="/">
          <img
            src="../src/assets/logo/icon_bw.png"
            alt="Logo"
            className="h-10 md:h-12 cursor-pointer my-auto"
          />
        </Link>
        <div className="form-control relative">
          <div className="input-group">
            <input
              type="text"
              placeholder="¿Qué estas buscando el dia de hoy?"
              className="input bg-slate-900 xl:w-[19rem] xl:text-md md:w-[17rem] md:text-[0.9rem] focus:outline-none"
              autoComplete="off"
              value={searchText}
              onChange={handleSearchInput}
            />
            <button className="btn bg-[#4cbb6a] hover:bg-[#4cbb69d5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          {showFloatingContainer && (

            /* Contenido del contenedor flotante */
            <div className="absolute input bg-slate-900 xl:w-[19rem] xl:text-md md:w-[17rem] md:text-[0.9rem] h-[4rem] focus:outline-none mt-[3.5rem] px-[1rem] py-[1rem] shadow-lg">
              Lucas Ríos estuvo aquí
            </div>
          )}
        </div>
        <div className="flex self-center gap-2">
          <Link to="/profile" className="text-slate-300">
            <FaUserCircle className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10" />
          </Link>
        </div>
      </nav>
    </section>
  );

}

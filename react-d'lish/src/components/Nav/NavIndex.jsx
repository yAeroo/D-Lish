import React, { useState, useEffect } from "react";
//Iconos
import { FaUserCircle } from "react-icons/fa";
//Link
import { Link } from "react-router-dom";
// Protección de rutas
import { useAuth } from "../../hooks/useAuth";

//Iconos
import Icon from "../../../src/assets/logo/icon_bw.png";
import IconWide from "../../../src/assets/logo/wide_white.png";
import { FaSearch } from "react-icons/fa";

export default function NavIndex(props) {
  const { user } = useAuth({ middleware: 'auth' });

  return (
    <section className="py-4 md:px-24 px-4 drop-shadow-2xl">
      <nav className="justify-between items-center rounded-2xl bg-neutral drop-shadow-md px-9 py-5 list-none hidden md:flex">
        <Link to="/">
          <div>
            <img
              src={Icon}
              className="block lg:hidden h-12 cursor-pointer my-auto"
            />
            <img
              src={IconWide}
              className="hidden lg:block h-12 cursor-pointer my-auto"
            />
          </div>
        </Link>

        <Link to="/search" className="btn btn-wide text-white">
          <h2>Buscar</h2>
          <FaSearch />
        </Link>

        <div id="pfp-cont" className="flex self-center gap-2">
          <Link to="/profile" className="text-slate-300" >
            <img src={user?.profile_pic ? `/assets/pfp/${user?.profile_pic}` : '/assets/pfp/default-pfp.png'} id="profile-pic" className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 rounded-full" alt="." />
          </Link>
        </div>
      </nav>
    </section>
  );
}

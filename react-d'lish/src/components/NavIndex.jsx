import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import User from "../../src/assets/index/user.png";


export default function NavIndex() {
  return (
    <>
<section className="py-4 md:px-24 px-4 drop-shadow-2xl">
  {/* Eliminar "rounded-2xl" para lograr el Navbar cuadrado (y hacer los respectivos cambios en el componente que se requiera)  */}
  <nav className="flex justify-between items-center rounded-2xl bg-neutral drop-shadow-md px-9 py-5 list-none ">
    {/* Link a Homepage */}
    <Link to="../../views/index.jsx">
      <img
        src="../src/assets/logo/icon_bw.png"
        alt="Logo"
        className="h-12 cursor-pointer my-auto"
      />
    </Link>
    <div className="form-control self-center flex items-center">
      <input
        type="text"
        placeholder="Buscar"
        className="input input-bordered w-[10rem] md:w-[40rem] rounded-2xl bg-slate-900 drop-shadow-md px-9 py-5"
      />

    </div>
    <div className="flex self-center gap-2">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost">
          <div className="w-8 rounded-full">
            <img src={User} className="" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</section>
    </>
  );
}

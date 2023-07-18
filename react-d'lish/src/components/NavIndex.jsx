import React from 'react'
import { IoChevronBack } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import {Link} from "react-router-dom";

export default function NavIndex() {
  return (
    <>
        <section className='py-4 md:px-24 px-4 drop-shadow-2xl'>
      {/* Eliminar "rounded-2xl" para lograr el Navbar cuadrado (y hacer los respectivos cambios en el componente que se requiera)  */}
      <nav className='flex justify-between rounded-2xl bg-neutral drop-shadow-md px-9 py-5 list-none '>
        {/* Link a Homepage */}
        <Link to='../../views/index.jsx'>
          <img src="../src/assets/logo/icon_bw.png" alt="Logo" className='h-12 cursor-pointer my-auto' />
        </Link>
        <div className="md:flex hidden items-center gap-10 text-white md:my-0 my-7">
            <input type='text' placeholder='Search'></input>
        </div>
      </nav>
    </section>

      
    </>
  )
}
